import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import quotesData from '../utils/bookQuotes';

function DashboardQuoteCol() {
    const [quote, setQuote] = useState({});

    useEffect(() => {
        setQuote(quotesData[Math.floor(Math.random() * quotesData.length)]);
    }, []);

    return (
        <Container className="d-flex align-items-center">
            <article style={{ paddingTop: "20px", paddingBottom: "15px" }}>
                <h2 className="text-center" style={{ fontFamily: `'Raleway', sans-serif` }}>{quote.quote}</h2>
                <p>--{quote.author}, <i style={{ fontFamily: `'Raleway', sans-serif` }}>{quote.book}</i></p>
            </article>
        </Container>
    );
}

export default DashboardQuoteCol;