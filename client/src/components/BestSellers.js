import React, { useEffect, useState } from 'react'
import API from "../utils/API";
import { Container, Row, Col, Button, CardDeck, Card, } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


function BestSellers() {
    const [bestSeller, setbestSeller] = useState([])
    // var best = []


    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        cssEase: "linear"
    }

    useEffect(() => {
        searchNYTBestSellersBooks()
    }, [])

    function searchNYTBestSellersBooks() {
        API.searchNYTBestSellers()
            .then(res => {
                // console.log(results);
                console.log(res.data.results);
                setbestSeller(res.data.results.books)
                // best = res.data.results.books
                // console.log(best);
                console.log(bestSeller);
            })
            .catch(err => console.log(err));
    };

    return (
        <Card className='my-3' style={{ backgroundColor: "#f7d065" }}>
            <h2>
                Best Sellers
                </h2>
            <Row className='my-3 mx-3' >
                {bestSeller.length ? (
                    <Slider {...settings}>

                        {bestSeller.map(book => {
                            return (
                                <div key={book.primary_isbn10}>
                                    <Card className="mx-3 v-100" style={{ textAlign: 'left' }} >
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
                                            <small className="text-muted">Weeks on list as best selling: {book.weeks_on_list}</small>
                                        </Card.Footer>
                                    </Card>
                                </div>

                            )
                        })}

                    </Slider>
                ) : (
                    <>
                        <h3>No Results to Display</h3>
                        <Button onClick={searchNYTBestSellersBooks} />
                    </>
                )

                }
            </Row>
        </Card>


    )
}
export default BestSellers;