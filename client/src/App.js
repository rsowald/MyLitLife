import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AppNav from "./components/Navbar";
import Home from "./components/pages/Home";
import Dashboard from "./components/pages/Dashboard";
import BookQueue from "./components/pages/BookQueue";
import Completed from "./components/pages/Completed";
import NoMatch from "./components/pages/NoMatch";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <AppNav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/book-queue" component={BookQueue} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/api/books" component={Completed} />
          <Route component={NoMatch} />
        </Switch>
      </Router>
    );
  }
}

export default App;
