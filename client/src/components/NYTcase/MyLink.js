import React, { useEffect, useState } from 'react'
import { Card } from "react-bootstrap";
import API from "../../utils/API";

function MyLink(props) {
    // const [key, setKey] = useState(props.isbn);
    const [img, setImg] = useState();
    const [link, setLink] = useState();

    useEffect(() => {
        getCover()
    }, [])

    function getCover() {
        API.searchBooks(props.isbn)
            .then(res => {
                setLink(res.data.items[0].volumeInfo.infoLink)
                setImg(res.data.items[0].volumeInfo.imageLinks.thumbnail)
            })
            .catch(err => {
                console.log(err)
            });
    }
    return (
        <a href={link} target="_blank" rel="noopener noreferrer">
            <Card.Img key={props.isbn} className=" d-block mx-auto img-fluid" variant="top" src={img} style={{ height: "200px" }} />
        </a>
    )
}
export default MyLink
