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
        </>
    )
}

export default Dashboard;