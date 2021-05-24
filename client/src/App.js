import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AppNav from "./components/Navbar";
import Home from "./components/pages/Home";
import Dashboard from "./components/pages/Dashboard";
import BookQueue from "./components/pages/BookQueue";
import Completed from "./components/pages/Completed";
import NoMatch from "./components/pages/NoMatch";
import "./App.css";
import Login from "./components/authentication/Login";
import Signup from "./components/authentication/Signup";
// import Logout from "./components/Logout";
import { AuthProvider } from "./components/authentication/Auth";
import PrivateRoute from "./components/authentication/PrivateRoute";
import app from "./components/authentication/Base";

class App extends Component {
  render() {
    const user = app.auth().currentUser;
    return (
      <AuthProvider>
        <Router>
          <AppNav />
          <Switch>
            <Route exact path="/" component={!user ? Home : Dashboard} />
            <Route exact path="/book-queue" component={BookQueue} />
            <PrivateRoute exact path="/dashboard" component={Dashboard} />
            <Route exact path="/api/books" component={Completed} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
            <Route component={NoMatch} />
          </Switch>
        </Router>
      </AuthProvider>
    );
  }
}

export default App;
