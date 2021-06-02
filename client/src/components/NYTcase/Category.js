import React from 'react'
import Slider from 'react-slick'
import { Container, Row, Col, Tabs, Tab, Button, CardDeck, Card, } from "react-bootstrap";

function Category(props) {



    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        cssEase: "linear"
    }
    return (
        <Slider {...settings}>
            {props.books.map(book => {
                return (
                    <div key={book.primary_isbn10}>
                        <Card className="m-3 v-100" style={{ textAlign: 'left' }} >
                            <Card.Img className=" d-block mx-auto img-fluid" variant="top" src={book.book_image} />
                            <Card.Body>
                                <Card.Title>{book.title}
                                    <br />
                                    <span style={{ fontSize: "12px" }}>by {book.author}</span></Card.Title>
                                <Card.Text>
                                    {book.description}
                                </Card.Text>
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
                        </Card>
                    </div>
                )
            })}
        </Slider>
    )
}

export default Category
