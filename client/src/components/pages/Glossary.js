import React, { useRef, useState } from "react";
import { Container, Row, Col, Card, Form, Button, Alert, Spinner, ListGroup } from "react-bootstrap";
import API from "../../utils/API";

export default function Glossary() {
    const wordRef = useRef()
    // const [word, setWord] = useState()
    const [errorMessage, seterrorMessage] = useState('')
    const [btnLoading, setBtnLoading] = useState(false)
    const [btnSpin, setBtnSpinner] = useState(false)
    const [searchResult, setsearchResult] = useState()

    async function handleSearch(event) {
        event.preventDefault();
        console.log("input value: ", wordRef.current.value)
        const app_id = 'ca8c5d3b';
        const app_key = 'd0a0ba1b62842eb7b002340c1b1b7723'

        try {
            setBtnSpinner(true)
            setBtnLoading(true)
            const query = wordRef.current.value
            await API.searchInMerriamDictionary(wordRef.current.value)
                .then(results => {
                    // console.log(results);
                    console.log(results.data);
                    setsearchResult(results.data)
                })

            // API.searchInDictionary(wordRef)
            //     .then(results => {
            //         console.log(results);
            //     })
        } catch (error) {
            console.log(error)
            seterrorMessage(error.message)
        }
        setBtnLoading(false)
        setBtnSpinner(false)
    }

    return (
        <>
            <Card className='my-3'>
                <Row className="no-gutters vertical-divider">
                    <h3 className="text-center mb-4">Glossary</h3>
                    <hr />


                    <Col md="8" >


                        <p className="d-flex justify-content-start">
                            Get the most trusted, up-to-date definitions from Merriam:
                    </p>
                        {/* {passwordError && <Alert variant="danger">{passwordError}</Alert>} */}
                        {/* {errorMessage && <Alert variant="danger">{errorMessage}</Alert>} */}



                    </Col>
                    <Col className="border-start  border-dark" md="4">
                        <Form onSubmit={handleSearch}>
                            <Form.Group className="mb-3" id="word">
                                <Form.Label className="" >Search for word:</Form.Label>
                                <Form.Control name="word" type="text" ref={wordRef} placeholder="Ex: exponential" required />
                            </Form.Group>
                            <Row className="d-flex justify-content">
                                <Col sm="12" md="2">
                                    {!btnSpin
                                        ? < Button disabled={btnLoading} className="mt-3" variant="success" type="submit">Search</Button>
                                        : <Spinner className="mt-3" animation="border" variant="success" />
                                    }
                                </Col>
                            </Row>
                        </Form>
                    </Col>
                </Row>
                {searchResult &&
                    <Row className="mt-3">
                        <hr />

                        <Col sm="12" md="6">
                            <Card style={{ width: '18rem' }}>
                                <Card.Header>{wordRef.current.value}</Card.Header>
                                <ListGroup variant="flush">
                                    {searchResult.map(res => {
                                        return (
                                            <>
                                                <ListGroup.Item key={res.meta.uuid}>{res.shortdef}</ListGroup.Item>

                                            </>
                                        )
                                    })}

                                </ListGroup>
                            </Card>

                        </Col>
                    </Row>
                }

            </Card>
        </>
    )

}

