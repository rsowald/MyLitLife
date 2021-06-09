import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import SearchForm from "../SearchForm";
import "./BookQueue.css";
import API from "../../utils/API";
import { useAuth } from "../authentication/context/AuthContext";

function BookQueue() {
  const { currentUser } = useAuth();

  const user = currentUser.uid;
  const initColumns = {
    // eslint-disable-next-line
    [1]: {
      name: "Results",
      items: [],
    },
    // eslint-disable-next-line
    [2]: {
      name: "Book Queue",
      items: [],
    },
    // eslint-disable-next-line
    [3]: {
      name: "Completed",
      items: [],
    },
  };

  const [columns, setColumns] = useState(initColumns);
  const [search, setSearch] = useState({
    title: "",
    author: "",
    genre: "",
    isbn: "",
  });

  function handleChange(event) {
    const inputValue = event.target.value.toLowerCase().trim();
    setSearch({
      ...search,
      [event.target.name]: inputValue,
    });
  }

  function handleSearch(event) {
    event.preventDefault();
    var queryCount = 0;
    var inputQuery = "";
    if (search.title) {
      inputQuery = `intitle:${search.title}`;
      queryCount++;
    }
    if (search.author) {
      if (queryCount > 0) {
        inputQuery += "+";
      }
      inputQuery += `inauthor:${search.author}`;
      queryCount++;
    }
    if (search.genre) {
      if (queryCount > 0) {
        inputQuery += "+";
      }
      inputQuery += `subject:${search.genre}`;
      queryCount++;
    }
    if (search.isbn) {
      if (queryCount > 0) {
        inputQuery += "+";
      }
      inputQuery += `isbn:${search.isbn}`;
      queryCount++;
    }
    API.searchBooks(inputQuery)
      .then((res) => {
        if (res.data.items) {
          setColumns({
            ...columns,
            // eslint-disable-next-line
            [1]: {
              name: "Results",
              items: res.data.items,
            },
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    loadColumns(columns, setColumns);
  }, []);

  async function loadColumns(columns, setColumns) {
    try {
      const queuePromise = API.getQueue(user);
      const completed = await API.getCompletedLimit(user);
      const queue = await queuePromise;
      const sortedQueue = queue.data.sort((a, b) => new Date(b.updated) - new Date(a.updated));

      setColumns({
        ...columns,
        // eslint-disable-next-line
        [2]: {
          name: "Book Queue",
          items: sortedQueue,
        },
        // eslint-disable-next-line
        [3]: {
          name: "Completed",
          items: completed.data,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  function handleOnDragEnd(result, columns, setColumns) {
    if (!result.destination) return;

    const { source, destination } = result;
    if (source.droppableId !== destination.droppableId) {
      const sourceColumn = columns[source.droppableId];
      const destColumn = columns[destination.droppableId];
      const sourceItems = [...sourceColumn.items];
      const destItems = [...destColumn.items];

      const [movedItem] = sourceItems.splice(result.source.index, 1);
      destItems.splice(result.destination.index, 0, movedItem);
      if (source.droppableId === "2") {
        API.removeFromQueue(movedItem.id, user);
      } else if (source.droppableId === "3") {
        API.removeFromCompleted(movedItem.id, user);
      }

      if (destination.droppableId === "2") {
        API.addToQueue(movedItem, user);
      } else if (destination.droppableId === "3") {
        API.addToCompleted(movedItem, user);
      }

      setColumns({
        ...columns,
        [source.droppableId]: {
          ...sourceColumn,
          items: sourceItems,
        },
        [destination.droppableId]: {
          ...destColumn,
          items: destItems,
        },
      });
    } else {
      const column = columns[source.droppableId];
      const copiedItems = [...column.items];
      const [removed] = copiedItems.splice(source.index, 1);
      copiedItems.splice(destination.index, 0, removed);
      setColumns({
        ...columns,
        [source.droppableId]: {
          ...column,
          items: copiedItems,
        },
      });
    }
  }
  return (
    <Container>
      <Row>
        <SearchForm
          className="dashboard-card"
          handleChange={handleChange}
          handleSearch={handleSearch}
          title={search.title}
          author={search.author}
          genre={search.genre}
          isbn={search.isbn}
        />
      </Row>
      <Row className="queue-container">
        <DragDropContext
          onDragEnd={(result) => handleOnDragEnd(result, columns, setColumns)}
        >
          {Object.entries(columns).map(([columnId, column]) => {
            return (
              <Col md={4} sm={12} key={columnId}>
                <div className="book-queue-col-header">
                  <h3>{column.name}</h3>
                </div>
                <div>
                  <Droppable droppableId={columnId} key={columnId}>
                    {(provided, snapshot) => {
                      return (
                        <div
                          className="book-queue-col"
                          {...provided.droppableProps}
                          ref={provided.innerRef}
                          style={{
                            background: snapshot.isDraggingOver
                              ? "#eeeeee"
                              : "whitesmoke",
                            minHeight: 200,
                          }}
                        >
                          {column.items.map(({ volumeInfo, id }, index) => {
                            var link = volumeInfo.infoLink;
                            var image;
                            if (volumeInfo.imageLinks) {
                              image = volumeInfo.imageLinks.thumbnail;
                            } else {
                              image = `${process.env.PUBLIC_URL}/cover_placeholder.jpg`;
                            }
                            var title = volumeInfo.title;

                            return (
                              <Draggable
                                key={id}
                                draggableId={id}
                                index={index}
                              >
                                {(provided, snapshot) => {
                                  return (
                                    <div
                                      className="book-item"
                                      ref={provided.innerRef}
                                      {...provided.draggableProps}
                                      {...provided.dragHandleProps}
                                      style={{
                                        userSelect: "none",
                                        minHeight: "50px",
                                        backgroundColor: snapshot.isDragging
                                          ? "whitesmoke"
                                          : "#f7d065",
                                        color: "saddlebrown",
                                        ...provided.draggableProps.style,
                                      }}
                                    >
                                      <a
                                        href={link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                      >
                                        <img src={image} alt={title} />
                                      </a>
                                      <p>{title}</p>
                                    </div>
                                  );
                                }}
                              </Draggable>
                            );
                          })}
                          {provided.placeholder}
                        </div>
                      );
                    }}
                  </Droppable>
                </div>
              </Col>
            );
          })}
        </DragDropContext>
      </Row>
    </Container>
  );
}

export default BookQueue;
