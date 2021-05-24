<<<<<<< HEAD
import React from "react";
// react-bootstrap components
import {
  Card,
  Row,
  Col,
  Button,
  ButtonToolbar
} from "react-bootstrap";
import Title from './Title';
// import "./dashboard.css";

function Dashboard() {
    // const bookGoals = useRef();

    return (
        <>
        <Title></Title>
        <div className="container">
        <Row>
        <Col md="3">
          <Card className="card-stats">
            <Card.Body>
              <Row>
                <Col xs="2">
                  <div className="icon-big text-left icon-warning">
                    <i className="nc-icon nc-chart text-warning"></i>
                  </div>
                </Col>
                <Col xs="10">
                  <div className="numbers">
                      {/* {{ useRef }} */}
                    <p className="card-category">User Book Stats</p>
                    <Card.Title as="h4">Book Goals</Card.Title>
                    <Card.Body>
                        Goal:
                        <hr></hr>
                        Currently Reading:
                    </Card.Body>
                  </div>
                </Col>
              </Row>
            </Card.Body>
            <Card.Footer>
              <hr></hr>
              <div className="stats">
                <i className="fas fa-redo mr-1"></i>
                                <ButtonToolbar className="mt-12 justify-content-between" aria-label="Toolbar with Button groups">
                  <Button variant="secondary" type="submit">Update</Button>
                </ButtonToolbar>
              </div>
            </Card.Footer>
          </Card>
        </Col>
      </Row>
      <Row>

        </Row>
        </div>
=======
import React, { useState } from "react";
import { useAuth } from "../authentication/context/AuthContext"
import { Link } from "react-router-dom"
import { Alert } from "react-bootstrap"

import "./dashboard.css";

export default function Dashboard() {
    const { currentUser } = useAuth()
    console.log(currentUser);

    return (
        <>
            <meta charSet="UTF-8" />
            <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <link rel="stylesheet" href="style.css" />
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" />
            <title>DataDemo</title>
            <header className="masthead">
                <h1 className="text-center mb-4">Hello </h1>
                <div className="container h-100">
                    <div className="row h-100 align-items-center">
                        <div className="col-12 text-center">
                            <h1 className="font-weight-light">DataCenter</h1>
                            <p className="lead">A great place to make sure your data is protected</p>
                        </div>
                    </div>
                </div>
            </header>
            <div className="container-fluid">
                <div className="jumbotron-fluid">
                    <h1 className="display-4">Hello, {currentUser.displayName.split(' ')[0]}</h1>
                    {/* <h1 className="display-4">Hello, {currentUser.displayName}</h1> */}
                    <p className="lead">your UID: {currentUser.uid}</p>
                    <hr className="my-4" />
                    <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
                    <p className="lead">
                        <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
                    </p>
                    <div className="row">
                        <div className="column">
                            <div className="card" style={{ width: '18rem' }}>
                                <img className="card-img-top" src="..." alt="Card image cap" />
                                <div className="card-body">
                                    <h5 className="card-title">Card title</h5>
                                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                    <a href="#" className="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="column">
                                <div className="card" style={{ width: '18rem' }}>
                                    <img className="card-img-top" src="..." alt="Card image cap" />
                                    <div className="card-body">
                                        <h5 className="card-title">Card title</h5>
                                        <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <a href="#" className="btn btn-primary">Go somewhere</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer bg-dark">
                <p>This is some text footer</p>
            </div>
>>>>>>> main
        </>
    )
}

