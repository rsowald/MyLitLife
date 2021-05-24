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
import ForgotPassword from './components/authentication/ForgotPassword'
// import Logout from "./components/Logout";
import { AuthProvider } from "./components/authentication/context/AuthContext";
import PrivateRoute from "./components/authentication/PrivateRoute";

class App extends Component {
  render() {
    return (
      <AuthProvider>
        <Router>
          <AppNav />
          <Switch>
            <Route exact path="/" component={Home} />
            <PrivateRoute exact path="/book-queue" component={BookQueue} />
            <PrivateRoute exact path="/dashboard" component={Dashboard} />
            <PrivateRoute exact path="/api/books" component={Completed} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/forgot-password" component={ForgotPassword} />
            <Route component={NoMatch} />
          </Switch>
        </Router>
      </AuthProvider>
    );
  }
}

export default App;
