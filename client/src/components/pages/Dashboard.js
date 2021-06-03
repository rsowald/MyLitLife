import React, { useState } from 'react';
// react-bootstrap components
import { Container, Card, Row, Col, Button, ButtonToolbar } from "react-bootstrap";
import Title from '../Title';
import "./dashboard.css";
import Glossary from "../Glossary";
import DashboardQuoteCol from "../DashboardQuoteCol";
import BestSellers from '../BestSellers';
import CompletedBookForm from '../CompletedBookForm';
import History from '../History';
import BookGoalChart from "../BookGoalChart";
import PageGoalChart from "../PageGoalChart";
import CurrentBook from "../CurrentBook";
import RecentlyCompleted from "../RecentlyCompleted";

export default function Dashboard() {
  // const bookGoals = useRef();

  let refresher = null;

  const onNewCompletedBook = () => {
    refresher();
  };

  return (
    <>
      <Title />
      <Container>
        <Row className="d-flex justify-content-center mb-9">
          <Col xs="6" md="6">
            <Card className="card-stats" style={{ backgroundColor: "#f7d065" }}>
              <hr></hr>
                  <Card.Title as="h2">Book Goals:</Card.Title>
                  <hr></hr>
              <Card.Title as="h2">Book Goals</Card.Title>
              <hr></hr>
              <Card.Body>
                <Row>
                  <Card>
                  <Card.Body>
                  <Row>
                    <BookGoalChart className="chart" />
                  </Row>
                  <br></br>
                  <br></br>
                  <Row>
                    <PageGoalChart className="chart" />
                  </Row>
                  {/* {{ useRef }} */}
                  </Card.Body>
                  </Card>
                </Row>
                </Card.Body>
              </Card>
            </Col>
            <Col xs="12" md="2"></Col>
            <Col xs="12" md="4">
              <Card className="card-genre" style={{ backgroundColor: "#f7d065" }}>
                <Card className="card-genre-body" style={{ backgroundColor: "#FAF9F6" }}>
                <Card.Body>
                <Row>
                    <div className="icon-big text-left icon-warning">
                      <i className="nc-icon nc-chart text-warning"></i>
                    </div>
                  <History className="chart" />
                  </Row>
                </Card.Body>
                </Card>
                  </Card>
                  <br></br>
                  <br></br>
                    <Row>
                    <Card className="card-current-book" style={{ backgroundColor: "#f7d065" }}>
                    <Card.Title>
                        <CurrentBook />
                    </Card.Title>
                    </Card>
                </Row>
            </Col>
        </Row>
        <br></br>
        <Row className="row-eq-height">
          <Col sm="6" md="4">
            <Card className="card-completed-form" style={{ backgroundColor: "#f7d065", height: "350px" }}>
              <Card.Body>
                <div className="icon-big text-left icon-warning">
                  <i className="nc-icon nc-chart text-warning"></i>
                </div>
                <div className="numbers">
                  <Card.Title as="h2">Completed Book Form</Card.Title>
                  <Card.Body>
                    <h6 className="text-center mb-9">Add Your Book Below!</h6>
                    <hr></hr>
                    <BookForm />
                  </Card.Body>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col sm="3" md="2"></Col>
          <Col md="6">
            <DashboardQuoteCol />
          </Col>
        </Row>
        <br></br>
          <Row className="justify-content-center">
          <Col sm="12" md="8">
            <Glossary />
          </Col>
          <Col sm="6" md="4">
            <Card className="card-queue" style={{ backgroundColor: "#f7d065", height: "350px" }}>
              {/* <div className="icon-big text-left icon-warning">
                  <i className="nc-icon nc-chart text-warning"></i>
                </div> */}
              <Card.Title as="h2">Book Queue</Card.Title>
              <hr></hr>
          <Col md="6">
            <RecentlyCompleted refresher={(fn) => refresher = fn} />
          </Col>
          <Col md="6">
            <Card style={{ backgroundColor: "#f7d065" }}>
              <Card.Body>
                <Card.Title as="h2">Completed Book Form</Card.Title>
                <h6 className="text-center mb-9">Add Your Book Below!</h6>
                <hr></hr>
                <CompletedBookForm onAdd={onNewCompletedBook} />
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <BestSellers />
      </Container>
    </>
  )
}