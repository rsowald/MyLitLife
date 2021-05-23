import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import SearchForm from "../SearchForm";
//import uuid from "react-uuid";
import "./BookQueue.css";
import API from "../../utils/API";

function BookQueue() {

 const data = API.completed()
   .then(res => res.data)
  console.log(data);

  const initColumns = {
    [1]: {
      name: "Results",
      items: []
    },
    [2]: {
      name: "Book Queue",
      items: []
    },
    [3]: {
      name: "Completed",
      items: []
    }
  };


  const [columns, setColumns] = useState(initColumns);
  const [query, setQuery] = useState("");
  const [bookResults, setBookResults] = useState([]);

  const [search, setSearch] = useState({

    title: "",
    author: "",
    genre: ""

  })

  API.queue()
  .then(res => {
    if (res.data.items) {
      setColumns({
        ...columns,
        [2]: {
          name: "Book Queue",
          items: res.data.items
        }
      });
    }
  })
  




  function handleChange(event) {
    console.log(event.target.name)
    const inputValue = event.target.value.toLowerCase().trim()
    setSearch({
      ...search,
      [event.target.name]: inputValue
    });
    console.log(search)
  }

  function handleSearch(event) {
    event.preventDefault();
    const inputQuery = `${search.title}+inauthor:${search.author}`
    // const inputQuery = `${state.title}`
    console.log(inputQuery)
    setQuery(inputQuery)
    // const query = `${state.title}+inauthor:${state.author}+subject:${state.genre}`
    console.log(query)
    API.searchBooks(inputQuery)
      .then(res => {
        if (res.data.items) {
          setColumns({
            ...columns,
            [1]: {
              name: "Results",
              items: res.data.items
            }
          });
        }
      })
      .catch(err => {
        console.log(err)
      });
    }


  useEffect(() => {
//    loadQueue(columns, setColumns);
//    loadCompleted(columns, setColumns);
  });

  //   .then( res => {
  //     setColumns({
  //       ...columns,
  //       [2]: {
  //         name: "Book Queue",
  //         items: res.data
  //       }
  //     })
  //   })
  //   .catch(err => {
  //   console.log(err)
  // });
  // } 

  // function loadCompleted(columns, setColumns) {
  //   API.completed()
  //   .then( res => {
  //     setColumns({
  //       ...columns,
  //       [3]: {
  //         name: "Completed",
  //         items: res.data
  //       }
  //     })
  //   })
  //   .catch(err => {
  //   console.log(err)
  // });
  // } 


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
      if (source.droppableId === '2') {
        API.removeFromQueue(movedItem);
      } else if (source.droppableId === '3') {
        API.removeFromCompleted(movedItem);
      }

      if (destination.droppableId === '2') {
        API.addToQueue(movedItem);
      } else if (destination.droppableId === '3') {
        API.addToCompleted(movedItem);
      }

      setColumns({
        ...columns,
        [source.droppableId]: {
          ...sourceColumn,
          items: sourceItems
        },
        [destination.droppableId]: {
          ...destColumn,
          items: destItems
        }
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
          items: copiedItems
        }
      });
    }


  }
  return (
    <Container>
      <Row>
        <SearchForm
          handleChange={handleChange}
          handleSearch={handleSearch}
          title={search.title}
          author={search.author}
          genre={search.genre}
        />
      </Row>
      {/* <Row>
        <Col md={8} sm={12}>
          {bookResults.map(result => {
            return (
              <h1>Hello World</h1>
            )

          })}

        </Col>
      </Row> */}
      <Row>
        <DragDropContext onDragEnd={(result) => handleOnDragEnd(result, columns, setColumns)} >
          {Object.entries(columns).map(([columnId, column]) => {
            return (
              <Col md={4} sm={12} key={columnId}>
                <div className="book-queue-col-header">
                  <h2>{column.name}</h2>
                </div>
                <div>
                  <Droppable droppableId={columnId} key={columnId}>
                    {(provided, snapshot) => {
                      return (
                        <div className="book-queue-col"
                          {...provided.droppableProps}
                          ref={provided.innerRef}
                          style={{
                            background: snapshot.isDraggingOver
                              ? "lightblue"
                              : "lightgrey",
                            minHeight: 200
                          }}
                        >
                          {column.items.map(({ volumeInfo, id }, index) => {
                            if (volumeInfo.infoLink) {
                              var link = volumeInfo.infoLink;
                            }                            
                            if (volumeInfo.imageLinks) {
                              var image = volumeInfo.imageLinks.thumbnail;
                            }
                            if (volumeInfo.title) {
                              var title = volumeInfo.title;
                            } 

                            return (                              
                              <Draggable
                                key={id}
                                draggableId={id}
                                index={index}
                              >
                                {(provided, snapshot) => {
                                  return (
                                    <div className="book-item"
                                      ref={provided.innerRef}
                                      {...provided.draggableProps}
                                      {...provided.dragHandleProps}
                                      style={{
                                        userSelect: "none",
                                        minHeight: "50px",
                                        backgroundColor: snapshot.isDragging
                                          ? "#263B4A"
                                          : "#456C86",
                                        color: "white",
                                        ...provided.draggableProps.style
                                      }}
                                    >
                                      <a href={link}><img src={image} alt={title} /></a>
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

  )
}

export default BookQueue;
