import React, { useState } from 'react'
import Slider from 'react-slick'
import { Row, Card, CardDeck, Button, Alert, Spinner } from "react-bootstrap";
import API from '../../utils/API'
import { useAuth } from '../authentication/context/AuthContext'

function Category(props) {
    const { currentUser } = useAuth()
    const [loading, setLoading] = useState(false)
    const [spin, setSpinner] = useState(false)
    const [apiError, setApiError] = useState('')
    const [showError, setShowError] = useState('')
    const [addBookError, setAddBookError] = useState()
    const [addBookSucces, setAddBookSucces] = useState()

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
        setSpinner(true)
        API.searchBooks(`intitle:${title}+inauthor:${author}`)
            .then(result => {
                console.log(result.data.items)
                API.getQueue(currentUser.uid)
                    .then(res => {
                        console.log(res.data);
                        const checkExisting = res.data.filter(book => {
                            if (book.id === result.data.items[0].id) {
                                return setAddBookError(`${book.volumeInfo.title} by ${book.volumeInfo.authors[0]} it's in your queue already!`)
                            }
                            else {
                                API.addToQueue(result.data.items[0], currentUser.uid)
                                    .then(response => {
                                        setAddBookSucces(`${response.data.volumeInfo.title} by ${response.data.volumeInfo.authors[0]} successfuly added`);
                                    })
                                    .catch(err => console.log(err))

                            }
                        })
                        setLoading(false)
                        setSpinner(false)
                    })
                    .catch(err => console.log(err))
                // if (res.data.items) {
                //     return API.addToQueue(res.data.items[0], currentUser.uid)
                // }
            })
            .catch(err => {
                setShowError("We couldn't add the book")
                setApiError(err)
                console.log(err)
            });

    };
    return (
        <>
            {addBookError && <Row className="m-5">
                <Alert variant="danger">{addBookError}</Alert>
            </Row>
            }
            {addBookSucces && <Row className="m-5">
                <Alert variant="success">{addBookSucces}</Alert>
            </Row>
            }
            <Slider {...settings}>

                {props.books.map(book => {
                    return (
                        <div key={book.primary_isbn10}>


                            <Card className="m-3" style={{ textAlign: 'left', width: "250px", minHeight:"500px" }} >
                                {apiError ? (
                                    <Alert variant="danger">{apiError}</Alert>
                                ) : (
                                    <Card.Img className="d-block mx-auto img-fluid" variant="top" src={book.book_image} style={{ height: "250px" }} />
                                )
                                }
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
                                    )
                                    }
                                </Card.Footer>
                                {!spin
                                    ? < Button disabled={loading} variant="primary" onClick={() => handleAddBook(book.title, book.author)}>Add to Book Queue</Button>

                                    : <Spinner className="mt-3" animation="border" variant="primary" />
                                }
                                {showError && <Alert variant="danger">{showError}</Alert>}
                            </Card>
                        </div>
                    )
                })}
            </Slider>
        </>
    )
}

export default Category
