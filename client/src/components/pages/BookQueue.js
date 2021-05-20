//import { isValidObjectId } from "mongoose";
import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import {DragDropContext, Droppable, Draggable} from "react-beautiful-dnd";
import SearchForm from "../SearchForm";
//import uuid from "react-uuid";
import "./BookQueue.css";


const completed = [
    {
        "kind": "books#volume",
        "id": "_FjrugAACAAJ",
        "etag": "oVrvcdfEdQg",
        "selfLink": "https://www.googleapis.com/books/v1/volumes/_FjrugAACAAJ",
        "volumeInfo": {
          "title": "The Fellowship of the Ring",
          "subtitle": "Being the First Part of the Lord of the Rings",
          "authors": [
            "John Ronald Reuel Tolkien"
          ],
          "publisher": "HarperCollins Publishers",
          "publishedDate": "2012",
          "description": "Continuing the story begun in The Hobbit, this is the first part of Tolkien s epic masterpiece, The Lord of the Rings, featuring an exclusive cover image from the film, the definitive text, and a detailed map of Middle-earth. Sauron, the Dark Lord, has gathered to him all the Rings of Power the means by which he intends to rule Middle-earth. All he lacks in his plans for dominion is the One Ring the ring that rules them all which has fallen into the hands of the hobbit, Bilbo Baggins. In a sleepy village in the Shire, young Frodo Baggins finds himself faced with an immense task, as his elderly cousin Bilbo entrusts the Ring to his care. Frodo must leave his home and make a perilous journey across Middle-earth to the Cracks of Doom, there to destroy the Ring and foil the Dark Lord in his evil purpose. To celebrate the release of the first of Peter Jackson s two-part film adaptation of The Hobbit, THE HOBBIT: AN UNEXPECTED JOURNEY, this first part of The Lord of the Rings is available for a limited time with an exclusive cover image from Peter Jackson s award-winning trilogy.\"",
          "industryIdentifiers": [
            {
              "type": "ISBN_10",
              "identifier": "0007488300"
            },
            {
              "type": "ISBN_13",
              "identifier": "9780007488308"
            }
          ],
          "readingModes": {
            "text": false,
            "image": false
          },
          "pageCount": 531,
          "printType": "BOOK",
          "categories": [
            "Baggins, Frodo (Fictitious character)"
          ],
          "averageRating": 4,
          "ratingsCount": 2718,
          "maturityRating": "NOT_MATURE",
          "allowAnonLogging": false,
          "contentVersion": "preview-1.0.0",
          "imageLinks": {
            "smallThumbnail": "http://books.google.com/books/content?id=_FjrugAACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
            "thumbnail": "http://books.google.com/books/content?id=_FjrugAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
          },
          "language": "en",
          "previewLink": "http://books.google.com/books?id=_FjrugAACAAJ&dq=fantasy&hl=&cd=1&source=gbs_api",
          "infoLink": "http://books.google.com/books?id=_FjrugAACAAJ&dq=fantasy&hl=&source=gbs_api",
          "canonicalVolumeLink": "https://books.google.com/books/about/The_Fellowship_of_the_Ring.html?hl=&id=_FjrugAACAAJ"
        },
        "saleInfo": {
          "country": "US",
          "saleability": "NOT_FOR_SALE",
          "isEbook": false
        },
        "accessInfo": {
          "country": "US",
          "viewability": "NO_PAGES",
          "embeddable": false,
          "publicDomain": false,
          "textToSpeechPermission": "ALLOWED",
          "epub": {
            "isAvailable": false
          },
          "pdf": {
            "isAvailable": false
          },
          "webReaderLink": "http://play.google.com/books/reader?id=_FjrugAACAAJ&hl=&printsec=frontcover&source=gbs_api",
          "accessViewStatus": "NONE",
          "quoteSharingAllowed": false
        },
        "searchInfo": {
          "textSnippet": "The Lord of the Rings is an epic adventure, a beautifully written masterpiece of imaginative fiction of the 20th century."
        }
      },
      {
        "kind": "books#volume",
        "id": "XtY-AAAAYAAJ",
        "etag": "oCIIHRG7Xt4",
        "selfLink": "https://www.googleapis.com/books/v1/volumes/XtY-AAAAYAAJ",
        "volumeInfo": {
          "title": "A Midnight Fantasy",
          "subtitle": "And The Little Violinist",
          "authors": [
            "Thomas Bailey Aldrich"
          ],
          "publishedDate": "1877",
          "industryIdentifiers": [
            {
              "type": "OTHER",
              "identifier": "HARVARD:HWJSK6"
            }
          ],
          "readingModes": {
            "text": false,
            "image": true
          },
          "pageCount": 96,
          "printType": "BOOK",
          "categories": [
            "Hamlet (Legendary character)"
          ],
          "maturityRating": "NOT_MATURE",
          "allowAnonLogging": false,
          "contentVersion": "0.2.3.0.full.1",
          "panelizationSummary": {
            "containsEpubBubbles": false,
            "containsImageBubbles": false
          },
          "imageLinks": {
            "smallThumbnail": "http://books.google.com/books/content?id=XtY-AAAAYAAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
            "thumbnail": "http://books.google.com/books/content?id=XtY-AAAAYAAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
          },
          "language": "en",
          "previewLink": "http://books.google.com/books?id=XtY-AAAAYAAJ&pg=PA70&dq=fantasy&hl=&cd=2&source=gbs_api",
          "infoLink": "https://play.google.com/store/books/details?id=XtY-AAAAYAAJ&source=gbs_api",
          "canonicalVolumeLink": "https://play.google.com/store/books/details?id=XtY-AAAAYAAJ"
        },
        "saleInfo": {
          "country": "US",
          "saleability": "FREE",
          "isEbook": true,
          "buyLink": "https://play.google.com/store/books/details?id=XtY-AAAAYAAJ&rdid=book-XtY-AAAAYAAJ&rdot=1&source=gbs_api"
        },
        "accessInfo": {
          "country": "US",
          "viewability": "ALL_PAGES",
          "embeddable": true,
          "publicDomain": true,
          "textToSpeechPermission": "ALLOWED",
          "epub": {
            "isAvailable": false,
            "downloadLink": "http://books.google.com/books/download/A_Midnight_Fantasy.epub?id=XtY-AAAAYAAJ&hl=&output=epub&source=gbs_api"
          },
          "pdf": {
            "isAvailable": true,
            "downloadLink": "http://books.google.com/books/download/A_Midnight_Fantasy.pdf?id=XtY-AAAAYAAJ&hl=&output=pdf&sig=ACfU3U1JiLAKGiPL4P3J9PtZGPrA2Hat4g&source=gbs_api"
          },
          "webReaderLink": "http://play.google.com/books/reader?id=XtY-AAAAYAAJ&hl=&printsec=frontcover&source=gbs_api",
          "accessViewStatus": "FULL_PUBLIC_DOMAIN",
          "quoteSharingAllowed": false
        },
        "searchInfo": {
          "textSnippet": "The amber glow of the carlantern lighted up my figure in the gloom , the driver \u003cbr\u003e\ngave a quick turn on the brake , and the conductor , making a sudden dexterous \u003cbr\u003e\nclutch at the strap over his head , sounded the death - knell of my \u003cb\u003efantasy\u003c/b\u003e as I&nbsp;..."
        }
}];

const queue = [
  {
        "kind": "books#volume",
        "id": "a-H5L-lSsR0C",
        "etag": "IKrtSO9KRhQ",
        "selfLink": "https://www.googleapis.com/books/v1/volumes/a-H5L-lSsR0C",
        "volumeInfo": {
          "title": "A Fantasy in Fustian",
          "authors": [
            "George Wemyss"
          ],
          "publishedDate": "1899",
          "industryIdentifiers": [
            {
              "type": "OTHER",
              "identifier": "STANFORD:36105213336956"
            }
          ],
          "readingModes": {
            "text": false,
            "image": true
          },
          "pageCount": 309,
          "printType": "BOOK",
          "maturityRating": "NOT_MATURE",
          "allowAnonLogging": false,
          "contentVersion": "0.1.2.0.full.1",
          "panelizationSummary": {
            "containsEpubBubbles": false,
            "containsImageBubbles": false
          },
          "imageLinks": {
            "smallThumbnail": "http://books.google.com/books/content?id=a-H5L-lSsR0C&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
            "thumbnail": "http://books.google.com/books/content?id=a-H5L-lSsR0C&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
          },
          "language": "en",
          "previewLink": "http://books.google.com/books?id=a-H5L-lSsR0C&pg=PP7&dq=fantasy&hl=&cd=3&source=gbs_api",
          "infoLink": "https://play.google.com/store/books/details?id=a-H5L-lSsR0C&source=gbs_api",
          "canonicalVolumeLink": "https://play.google.com/store/books/details?id=a-H5L-lSsR0C"
        },
        "saleInfo": {
          "country": "US",
          "saleability": "FREE",
          "isEbook": true,
          "buyLink": "https://play.google.com/store/books/details?id=a-H5L-lSsR0C&rdid=book-a-H5L-lSsR0C&rdot=1&source=gbs_api"
        },
        "accessInfo": {
          "country": "US",
          "viewability": "ALL_PAGES",
          "embeddable": true,
          "publicDomain": true,
          "textToSpeechPermission": "ALLOWED",
          "epub": {
            "isAvailable": false,
            "downloadLink": "http://books.google.com/books/download/A_Fantasy_in_Fustian.epub?id=a-H5L-lSsR0C&hl=&output=epub&source=gbs_api"
          },
          "pdf": {
            "isAvailable": true,
            "downloadLink": "http://books.google.com/books/download/A_Fantasy_in_Fustian.pdf?id=a-H5L-lSsR0C&hl=&output=pdf&sig=ACfU3U2uSE5sPj0zTUl4xJXeXfqINwYlDw&source=gbs_api"
          },
          "webReaderLink": "http://play.google.com/books/reader?id=a-H5L-lSsR0C&hl=&printsec=frontcover&source=gbs_api",
          "accessViewStatus": "FULL_PUBLIC_DOMAIN",
          "quoteSharingAllowed": false
        },
        "searchInfo": {
          "textSnippet": "George Wemyss. A. \u003cb\u003eFANTASY\u003c/b\u003e IN FUSTIAN BY GEORGE W E MYSS DOWNEY \u003cbr\u003e\nAND CO. 12, York STREET, Covent GARDEN LONDON 1899 A \u003cb\u003eFANTASY\u003c/b\u003e IN \u003cbr\u003e\nFUSTIAN CHAPTER I. Look where he would,"
        }
      },
      {
        "kind": "books#volume",
        "id": "zPDkDQAAQBAJ",
        "etag": "PsWI3a14ACU",
        "selfLink": "https://www.googleapis.com/books/v1/volumes/zPDkDQAAQBAJ",
        "volumeInfo": {
          "title": "Fantasy League",
          "authors": [
            "Mike Lupica"
          ],
          "publisher": "Penguin",
          "publishedDate": "2014",
          "description": "From OKing of SportswritersO and \"New York Times\"-bestselling author Lupica. In Los Angeles, 12-year-old Charlie's skill at fantasy football gains the attention of both the local media and the owner of a professional football team.",
          "industryIdentifiers": [
            {
              "type": "ISBN_13",
              "identifier": "9780399256073"
            },
            {
              "type": "ISBN_10",
              "identifier": "0399256075"
            }
          ],
          "readingModes": {
            "text": false,
            "image": false
          },
          "pageCount": 293,
          "printType": "BOOK",
          "categories": [
            "Juvenile Fiction"
          ],
          "averageRating": 4.5,
          "ratingsCount": 2,
          "maturityRating": "NOT_MATURE",
          "allowAnonLogging": false,
          "contentVersion": "0.1.0.0.preview.0",
          "panelizationSummary": {
            "containsEpubBubbles": false,
            "containsImageBubbles": false
          },
          "imageLinks": {
            "smallThumbnail": "http://books.google.com/books/content?id=zPDkDQAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
            "thumbnail": "http://books.google.com/books/content?id=zPDkDQAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
          },
          "language": "en",
          "previewLink": "http://books.google.com/books?id=zPDkDQAAQBAJ&printsec=frontcover&dq=fantasy&hl=&cd=4&source=gbs_api",
          "infoLink": "http://books.google.com/books?id=zPDkDQAAQBAJ&dq=fantasy&hl=&source=gbs_api",
          "canonicalVolumeLink": "https://books.google.com/books/about/Fantasy_League.html?hl=&id=zPDkDQAAQBAJ"
        },
        "saleInfo": {
          "country": "US",
          "saleability": "NOT_FOR_SALE",
          "isEbook": false
        },
        "accessInfo": {
          "country": "US",
          "viewability": "PARTIAL",
          "embeddable": true,
          "publicDomain": false,
          "textToSpeechPermission": "ALLOWED_FOR_ACCESSIBILITY",
          "epub": {
            "isAvailable": false
          },
          "pdf": {
            "isAvailable": false
          },
          "webReaderLink": "http://play.google.com/books/reader?id=zPDkDQAAQBAJ&hl=&printsec=frontcover&source=gbs_api",
          "accessViewStatus": "SAMPLE",
          "quoteSharingAllowed": false
        },
        "searchInfo": {
          "textSnippet": "From OKing of SportswritersO and &quot;New York Times&quot;-bestselling author Lupica. In Los Angeles, 12-year-old Charlie&#39;s skill at fantasy football gains the attention of both the local media and the owner of a professional football team."
        }
      }
    ];
    
const searchResults = [
    {
        "kind": "books#volume",
        "id": "7YzaCwAAQBAJ",
        "etag": "SL43JdTsFHA",
        "selfLink": "https://www.googleapis.com/books/v1/volumes/7YzaCwAAQBAJ",
        "volumeInfo": {
          "title": "Fantasy Life",
          "subtitle": "The Outrageous, Uplifting, and Heartbreaking World of Fantasy Sports from the Guy Who's Lived it",
          "authors": [
            "Matthew Berry"
          ],
          "publisher": "Riverhead Books",
          "publishedDate": "2013",
          "description": "An inside assessment of the world of fantasy sports by the ESPN Senior Fantasy Analyst reveals the life-shaping impact of the multi-billion-dollar national pastime while chronicling his own rise to a leading figure in fantasy sports.",
          "industryIdentifiers": [
            {
              "type": "ISBN_13",
              "identifier": "9781594486258"
            },
            {
              "type": "ISBN_10",
              "identifier": "1594486255"
            }
          ],
          "readingModes": {
            "text": false,
            "image": false
          },
          "pageCount": 338,
          "printType": "BOOK",
          "categories": [
            "Games & Activities"
          ],
          "averageRating": 3.5,
          "ratingsCount": 2,
          "maturityRating": "NOT_MATURE",
          "allowAnonLogging": false,
          "contentVersion": "preview-1.0.0",
          "panelizationSummary": {
            "containsEpubBubbles": false,
            "containsImageBubbles": false
          },
          "imageLinks": {
            "smallThumbnail": "http://books.google.com/books/content?id=7YzaCwAAQBAJ&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api",
            "thumbnail": "http://books.google.com/books/content?id=7YzaCwAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api"
          },
          "language": "en",
          "previewLink": "http://books.google.com/books?id=7YzaCwAAQBAJ&printsec=frontcover&dq=fantasy&hl=&cd=5&source=gbs_api",
          "infoLink": "http://books.google.com/books?id=7YzaCwAAQBAJ&dq=fantasy&hl=&source=gbs_api",
          "canonicalVolumeLink": "https://books.google.com/books/about/Fantasy_Life.html?hl=&id=7YzaCwAAQBAJ"
        },
        "saleInfo": {
          "country": "US",
          "saleability": "NOT_FOR_SALE",
          "isEbook": false
        },
        "accessInfo": {
          "country": "US",
          "viewability": "PARTIAL",
          "embeddable": true,
          "publicDomain": false,
          "textToSpeechPermission": "ALLOWED_FOR_ACCESSIBILITY",
          "epub": {
            "isAvailable": false
          },
          "pdf": {
            "isAvailable": false
          },
          "webReaderLink": "http://play.google.com/books/reader?id=7YzaCwAAQBAJ&hl=&printsec=frontcover&source=gbs_api",
          "accessViewStatus": "SAMPLE",
          "quoteSharingAllowed": false
        },
        "searchInfo": {
          "textSnippet": "An inside assessment of the world of fantasy sports by the ESPN Senior Fantasy Analyst reveals the life-shaping impact of the multi-billion-dollar national pastime while chronicling his own rise to a leading figure in fantasy sports."
        }
      },
      {
        "kind": "books#volume",
        "id": "hS_WugEACAAJ",
        "etag": "kL1+YhDxp3U",
        "selfLink": "https://www.googleapis.com/books/v1/volumes/hS_WugEACAAJ",
        "volumeInfo": {
          "title": "Dragon Composition Notebook",
          "subtitle": "Standard Size Vintage Fantasy Art Cover Composition Notebook / Journal 150 Lined College Ruled Pages, Serpent Medieval Softcover Book. (Volume 9)",
          "authors": [
            "Abundant Creations"
          ],
          "publisher": "Createspace Independent Publishing Platform",
          "publishedDate": "2018-08-10",
          "description": "This vintage dragon artwork has been brought back to life from ancient archives and vividly recolored. It is now is available for you to enjoy. This notebook is perfect for taking notes in school or using as notebook at home. It's the perfect gift for any dragon and fantasy lover! Features: College Ruled Paper 150 Pages Matte Finish Cover Standard Size Composition Notebook Sturdy Paperback Binding",
          "industryIdentifiers": [
            {
              "type": "ISBN_10",
              "identifier": "1725154757"
            },
            {
              "type": "ISBN_13",
              "identifier": "9781725154759"
            }
          ],
          "readingModes": {
            "text": false,
            "image": false
          },
          "pageCount": 150,
          "printType": "BOOK",
          "maturityRating": "NOT_MATURE",
          "allowAnonLogging": false,
          "contentVersion": "preview-1.0.0",
          "panelizationSummary": {
            "containsEpubBubbles": false,
            "containsImageBubbles": false
          },
          "imageLinks": {
            "smallThumbnail": "http://books.google.com/books/content?id=hS_WugEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
            "thumbnail": "http://books.google.com/books/content?id=hS_WugEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
          },
          "language": "en",
          "previewLink": "http://books.google.com/books?id=hS_WugEACAAJ&dq=fantasy&hl=&cd=6&source=gbs_api",
          "infoLink": "http://books.google.com/books?id=hS_WugEACAAJ&dq=fantasy&hl=&source=gbs_api",
          "canonicalVolumeLink": "https://books.google.com/books/about/Dragon_Composition_Notebook.html?hl=&id=hS_WugEACAAJ"
        },
        "saleInfo": {
          "country": "US",
          "saleability": "NOT_FOR_SALE",
          "isEbook": false
        },
        "accessInfo": {
          "country": "US",
          "viewability": "NO_PAGES",
          "embeddable": false,
          "publicDomain": false,
          "textToSpeechPermission": "ALLOWED",
          "epub": {
            "isAvailable": false
          },
          "pdf": {
            "isAvailable": false
          },
          "webReaderLink": "http://play.google.com/books/reader?id=hS_WugEACAAJ&hl=&printsec=frontcover&source=gbs_api",
          "accessViewStatus": "NONE",
          "quoteSharingAllowed": false
        },
        "searchInfo": {
          "textSnippet": "This vintage dragon artwork has been brought back to life from ancient archives and vividly recolored."
        }
      }
]


function BookQueue() {
    const initColumns = {
        [1]: {
            name: "Results",
            items: []
        },
        [2]: {
            name: "Book Queue",
            items: queue
        },
        [3]: {
            name: "Completed",
            items: completed
        }
    };

    const [columns, setColumns] = useState(initColumns);

    function handleSearch() {
      setColumns({
        ...columns,
        [1]: {
          name: "Results",
          items: searchResults
        }
      });
    }

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
              <SearchForm handleSearch={handleSearch} />
            </Row>
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
                                  {column.items.map(({volumeInfo, id}, index) => {
                                    var link = volumeInfo.infoLink;                                      
                                    var image = volumeInfo.imageLinks.thumbnail;                                      
                                    var title = volumeInfo.title;

                                    return (
                                        <Draggable
                                        key={id}
                                        draggableId={id}
                                        index={index}
                                        >
                                        {(provided, snapshot, item) => {
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
