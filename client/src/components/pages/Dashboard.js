import React, { useState } from 'react';
// react-bootstrap components
import { Container, Card, Row, Col, Button, ButtonToolbar } from "react-bootstrap";
import Title from '../Title';
import "./dashboard.css";
import Glossary from "../Glossary";
import DashboardQuoteCol from "../DashboardQuoteCol";
import BestSellers from '../BestSellers';
import CompletedBookForm from '../CompletedBookForm';
import CurrentBookDropdown from "../CurrentBookDropdown";
import RecentlyCompleted from "../RecentlyCompleted";
import HistoryCard from '../HistoryCard';
import BookGoals from '../BookGoals';

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
        <Row className="d-flex align-items-center mb-9">
          <Col xs="12" md="6" className="mb-2">
            <BookGoals />
          </Col>
          <Col xs="12" md="2"></Col>
          <Col xs="12" md="4">
            <HistoryCard />
            <br></br>
            <br></br>
            <Row className="mx-1">
              <Card className="card-current-book" style={{ backgroundColor: "#f7d065" }}>
                <Card.Title>
                  <CurrentBookDropdown />
                </Card.Title>
                <Card.Body />
              </Card>
            </Row>
          </Col>
        </Row>
        <br></br>
        <Row className="row-eq-height d-flex align-items-center">
          <Col sm="6" md="4">
            <Card className="card-completed-form" style={{ backgroundColor: "#f7d065", height: "350px" }}>
              <Card.Body>
                <div className="icon-big text-left icon-warning">
                  <i className="nc-icon nc-chart text-warning"></i>
                </div>
                <div className="numbers">
                  <Card.Title as="h2">Completed Book Form</Card.Title>
                  <hr></hr>
                  <Card.Body>
                    <CompletedBookForm onAdd={onNewCompletedBook} />
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
        <Row className="d-flex align-items-center">
          <Col sm="12" md="8">
            <Glossary />
          </Col>
          <Col sm="12" md="4">
            <RecentlyCompleted refresher={(fn) => refresher = fn} />
          </Col>
        </Row>
        <BestSellers className="mb-3" />
      </Container>
    </>
  )
}