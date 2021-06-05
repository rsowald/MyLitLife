import React, { useEffect, useState } from 'react'
import API from "../utils/API";
import { Row, Tabs, Tab, Card } from "react-bootstrap";
import Category from "./NYTcase/Category";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function BestSellers() {
    // const categoryRef = useRef()
    const [bestSeller, setbestSeller] = useState([])
    const [key, setKey] = useState('fiction');
    const [bestSellerAll, setbestSellerAll] = useState([]);
    const [bestSellerElse, setbestSellerElse] = useState([]);

    useEffect(() => {
        searchNYTByCategory(key)
        // searchNYTBestAllTime()
    }, [])
    function searchNYT(category) {

        if (category === "fiction" || category === "nonfiction" || category === "advice" || category === "graphic-books") {
            return searchNYTByCategory(category)
        }
        if (category === "history") {
            return searchNYTBestAllTime()
        }

        if (category === "picture-books") {
            return searchNYTElse(category)
        }
    }
    function searchNYTByCategory(category) {
        API.searchNYTByCategory(category)
            .then(res => {


                setbestSeller(res.data.results.books)
            })
            .catch(err => console.log(err));
    };
    async function searchNYTBestAllTime() {
        try {
            const apiResults = await API.searchNYTBestAllTime()
            let books = apiResults.data.results.filter(book => book.isbns.length)
            setbestSellerAll(books)
        } catch (err) {
            console.log(err)
        }
    };
    async function searchNYTElse(query) {
        try {
            const apiResults = await API.searchNYTByElse(query)
            // let books = apiResults.data.results.filter(book => book.isbns.length)
            // setbestSellerAll(books)
            setbestSellerElse(apiResults.data.results.books)
        } catch (err) {
            console.log(err)
        }
    };

    return (
        <Card className='my-3 dashboard-card' style={{ backgroundColor: "#f7d065" }}>
            <h2>
                Best Sellers
                </h2>
            <Row className='my-3 mx-3' >
                <Tabs
                    id="controlled-tab-example"
                    activeKey={key}
                    onSelect={(k) => {
                        setKey(k)
                        searchNYT(k)
                    }}
                >
                    <Tab eventKey="fiction" title="Fiction" >
                        <Category
                            books={bestSeller}
                        />
                    </Tab>
                    <Tab eventKey="nonfiction" title="Non-Fiction">
                        <Category
                            books={bestSeller}
                        />
                    </Tab>
                    <Tab eventKey="advice" title="Advice, How-To">
                        <Category
                            books={bestSeller}
                        />
                    </Tab>
                    <Tab eventKey="graphic-books" title="Graphics">
                        <Category
                            books={bestSeller}
                        />
                    </Tab>
                    <Tab eventKey="picture-books" title="Kid's books">
                        <Category
                            books={bestSellerElse}
                        />
                    </Tab>
                    <Tab eventKey="history" title="All-time">
                        <Category
                            books={bestSellerAll}
                        />
                        {/* <AllTime
                            books={bestSellerAll}
                        /> */}
                    </Tab>
                </Tabs>
            </Row>
        </Card>
    )
}
export default BestSellers;