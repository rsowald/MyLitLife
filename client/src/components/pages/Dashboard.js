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
        <Row className="justify-content-center">
          <Col md="6">
            <DashboardQuoteCol />
          </Col>
        </Row>
        <Row className="d-flex justify-content-center mb-3">
          <Col>
            <Card className="card-stats" style={{ backgroundColor: "#f7d065" }}>
              <Card.Title as="h2">Book Goals</Card.Title>
              <hr></hr>
              <Card.Body>
                <Row>
                  <Col xs="2">
                    <div className="icon-big text-left icon-warning">
                      <i className="nc-icon nc-chart text-warning"></i>
                    </div>
                  </Col>
                  <Col xs={4}>
                    <History className="chart" />
                  </Col>
                  <Col xs={3}>
                    <BookGoalChart className="chart" />
                  </Col>
                  <Col xs={3}>
                    <PageGoalChart className="chart" />
                  </Col>
                  {/* {{ useRef }} */}
                  <hr></hr>
                  <Card.Body>
                    Goal:
                        {/* input */}
                    <hr></hr>
                        Currently Reading:
                        {/* dropdown of book queue */}
                  </Card.Body>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row className="row-eq-height">
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
        <Row>
          <Col >
            <Glossary />
          </Col>
        </Row>
        <BestSellers />
      </Container>
    </>
  )
}