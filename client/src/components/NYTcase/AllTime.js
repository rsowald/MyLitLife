import React from 'react'
import Slider from 'react-slick'
import { Card } from "react-bootstrap";
// import API from '../../utils/API'
import MyLink from './MyLink'

function Category(props) {
    // const [isbnResult, setisbnResult] = useState([]);

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


    return (
        <Slider {...settings}>
            {props.books.map(book => {
                return (
                    <div key={book.isbns[0].isbn10}>
                        <Card className="m-3 v-100" style={{ textAlign: 'left', minHeight: "550px" }} >
                            <MyLink
                                isbn={book.isbns[0].isbn10}
                            />
                            <Card.Img className=" d-block mx-auto img-fluid" variant="top" src={book.book_image} />
                            <Card.Body>
                                <Card.Title>{book.title}
                                    <br />
                                    <span style={{ fontSize: "12px" }}>by {book.author}</span></Card.Title>
                                <Card.Text>
                                    {book.description}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        {/* <div>
                            result
                        </div> */}
                    </div>
                )
            })}
        </Slider >
    )
}

export default Category
