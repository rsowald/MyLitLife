import React, { useRef, useState } from "react";
import { Row, Col, Card, Form, Button, Alert, Spinner, Container } from "react-bootstrap";
import API from "../utils/API";
// import DictionaryResult from '../DictionaryResult'

function Glossary() {
    const wordRef = useRef()
    const [errorMessage, seterrorMessage] = useState('')
    const [btnLoading, setBtnLoading] = useState(false)
    const [btnSpin, setBtnSpinner] = useState(false)
    const [searchResult, setsearchResult] = useState("")

    async function handleSearch(event) {
        event.preventDefault();

        try {
            setBtnSpinner(true)
            setBtnLoading(true)
            await API.searchInMerriamDictionary(wordRef.current.value)
                .then(results => {
                    // console.log(results.data);
                    setsearchResult(results.data)
                })
        } catch (error) {
            console.log(error)
            seterrorMessage(error.message)
        }
        setBtnLoading(false)
        setBtnSpinner(false)
    }

    return (
        <>
            <Card className='my-3' style={{ textAlign: 'left', backgroundColor: "#f7d065" }}>
                <Card className="def-body-results" style={{ backgroundColor: "#FAF9F6" }}>
                <Row className="no-gutters ">
                    <h3 className="text-center mb-4">Glossary</h3>
                    <hr />
                    <Col md="8" >
                        <p className="d-flex justify-content-start">
                            Get the most trusted, up-to-date definitions from Merriam Dictionary:
                <Container>
                    <Row className="no-gutters ">
                        <h3 className="text-center mb-4">Dictionary</h3>
                        <hr />
                        <Col md="8" >
                            <p className="d-flex justify-content-start">
                                Get the most trusted, up-to-date definitions from Merriam Dictionary:
                    </p>
                        </Col>
                        : <p></p>}
                </Row>
                </Card>
                </Card>
                        <Col className="border-start  border-dark" md="4">
                            <Form onSubmit={handleSearch}>
                                <Form.Group className="mb-3" id="word">
                                    <Form.Label className="" >Search for a word:</Form.Label>
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
                    <Row className="mt-3 ">
                        {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}
                        {searchResult.length
                            ? <Col className="d-flex justify-content-start">
                                <hr />
                                <Alert className="text-left " >
                                    < Alert.Heading >Definition:
                                 </Alert.Heading>
                                    {searchResult[0].shortdef
                                        ? searchResult[0].shortdef.map((def, i) => {
                                            var index = i + 1
                                            return (
                                                <p key={`${searchResult[0].meta.uuid}${index}`}>
                                                    {index}: {def}
                                                </p>
                                            )
                                        })
                                        : <p>No results found</p>
                                    }
                                </Alert>
                            </Col>
                            : <p></p>}
                    </Row>
                </Container>
            </Card>
        </>
    )
}

export default Glossary;

