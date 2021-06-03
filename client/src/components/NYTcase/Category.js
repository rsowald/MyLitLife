import React, { useState } from 'react'
import Slider from 'react-slick'
import { Row, Card, Button, Alert } from "react-bootstrap";
import API from '../../utils/API'
import { useAuth } from '../authentication/context/AuthContext'

function Category(props) {
    const { currentUser } = useAuth()
    const [loading, setLoading] = useState(false)
    const [showError, setShowError] = useState('')
    const [addBookMessage, setAddBookMessage] = useState()

    const [apiError, setApiError] = useState('')
    const [mongoError, setMongoError] = useState('')
    // const [spin, setSpinner] = useState(false)
    // const [addBookSucces, setAddBookSucces] = useState()

    let settings = {
        dots: true,
        infinite: true,
        speed: 400,
        slidesToShow: 4,
        slidesToScroll: 3,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 850,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    }

    function handleAddBook(title, author) {
        setLoading(true)
        // setSpinner(true)
        API.searchBooks(`intitle:${title}+inauthor:${author}`)
            .then(result => {
                console.log(result.data.items)
                API.getQueue(currentUser.uid)
                    .then(res => {
                        console.log(res.data);
                        console.log(result.data.items[0].id);
                        let checkExisting = res.data.filter(book => {
                            if (book.id === result.data.items[0].id) {
                                console.log(book.id);
                                var existingBook = book.id
                                setAddBookMessage(`${book.volumeInfo.title} by ${book.volumeInfo.authors[0]} it's in your queue already!`)
                                console.log(existingBook);
                                return existingBook
                            } else {
                                return null
                            }

                        })
                        console.log(checkExisting.length);
                        if (checkExisting.length <= 0) {
                            console.log("add to queue triggered")
                            API.addToQueue(result.data.items[0], currentUser.uid)
                                .then(response => {
                                    console.log(response);
                                    setAddBookMessage(`${response.data.volumeInfo.title} by ${response.data.volumeInfo.authors[0]} successfuly added`);
                                })
                                .catch(err => {
                                    setShowError("We couldn't add the book in your queue")
                                    console.log(err)
                                })
                        }
                        setLoading(false)
                        // setSpinner(false)
                    })
                    .catch(err => {
                        console.log(err)
                        setMongoError(err)
                        setShowError("We couldn't find the book in Book Queue to compare if exists already")
                        setLoading(false)
                    })
            })
            .catch(err => {
                setShowError("We couldn't find the book on Google: no response")
                setLoading(false)
                setApiError(err.message)
                console.log(err)
            });
        setInterval(function () {
            setAddBookMessage(null)
            setShowError(null)
            setApiError(null)
        }, 7000);
    };
    return (
        <>
            {addBookMessage &&
                <Row className="m-3">
                    {addBookMessage.includes("successfuly") ? (
                        <Alert variant="success">{addBookMessage}</Alert>
                    ) : (
                        <Alert variant="danger">{addBookMessage}</Alert>
                    )}
                </Row>
            }
            {showError && <Row className="m-3">
                <Alert variant="danger">{showError}</Alert>
            </Row>
            }
            {/* before presentaion remove it from here, for developing it helps if any errors... */}
            {mongoError && <Row className="m-3">
                <Alert variant="danger">{mongoError}</Alert>
            </Row>
            }
            {apiError && <Row className="m-3">
                <Alert variant="danger">{apiError}</Alert>
            </Row>
            }
            <Slider {...settings}>
                {props.books.map(book => {
                    return (
                        <div key={book.primary_isbn10}>
                            <Card className="m-3" style={{ textAlign: 'left', width: "250px", minHeight: "500px" }} >
                                <Card.Img className="d-block mx-auto img-fluid" variant="top" src={book.book_image} style={{ height: "250px" }} />
                                <Card.Body>
                                    <Card.Title>{book.title}
                                        <br />
                                        <span style={{ fontSize: "12px" }}>by {book.author}</span></Card.Title>
                                    {/* <Card.Text>
                                    {book.description}
                                </Card.Text> */}
                                </Card.Body>
                                <Card.Footer>
                                    {book.weeks_on_list > 1 ? (
                                        <small className="text-muted">
                                            {book.weeks_on_list} Weeks on list as best selling
                                        </small>
                                    ) : (
                                        <small className="text-muted">
                                            New this week
                                        </small>
                                    )}
                                </Card.Footer>
                                < Button disabled={loading} variant="primary" onClick={() => handleAddBook(book.title, book.author)}>Add to Book Queue</Button>
                                {/* {!spin
                                    ? < Button disabled={loading} variant="primary" onClick={() => handleAddBook(book.title, book.author)}>Add to Book Queue</Button>
                                    : <Spinner className="mt-3" animation="border" variant="primary" />
                                } */}
                            </Card>
                        </div>
                    )
                })}
            </Slider>
        </>
    )
}
export default Category
