import React, { useEffect, useState } from 'react'
import { Card } from "react-bootstrap";
import API from "../../utils/API";

function MyLink(props) {
    // const [key, setKey] = useState(props.isbn);
    const [img, setImg] = useState();

    useEffect(() => {
        getCover()
    }, [])

    function getCover() {
        API.searchBooks(props.isbn)
            .then(res => {
                // console.log(res.data.items);
                setImg(res.data.items[0].volumeInfo.imageLinks.thumbnail)
            })
            .catch(err => {
                console.log(err)
            });
    }
    return (
        <Card.Img key={props.isbn} className=" d-block mx-auto img-fluid" variant="top" src={img} style={{ height: "300px" }}/>
    )
}

export default MyLink
