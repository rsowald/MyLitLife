import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AppNav from "./components/Navbar";
import Home from "./components/pages/Home";
import Dashboard from "./components/pages/Dashboard";
import BookQueue from "./components/pages/BookQueue";
import Completed from "./components/pages/Completed";
import NoMatch from "./components/pages/NoMatch";
import Glossary from "./components/Glossary";
import "./App.css";
import ForgotPassword from './components/authentication/ForgotPassword'
import { AuthProvider } from "./components/authentication/context/AuthContext";
import PrivateRoute from "./components/authentication/PrivateRoute";
import UpdatePassword from "./components/authentication/UpdatePassword";
import { AuthContext } from './components/authentication/context/AuthContext';


class App extends Component {
  render() {
    let currentUser = this.context;
    return (
      <AuthProvider>
        <Router>
          <AppNav />
          <Switch>
            <Route exact path="/" component={!currentUser ? Home : Dashboard} />
            <PrivateRoute exact path="/book-queue" component={BookQueue} />
            <PrivateRoute exact path="/dashboard" component={Dashboard} />
            <PrivateRoute exact path="/completed" component={Completed} />
            <PrivateRoute exact path="/glossary" component={Glossary} />
            <Route exact path="/forgot-password" component={ForgotPassword} />
            <PrivateRoute path="/update-password" component={UpdatePassword} />

            <Route component={NoMatch} />
          </Switch>
        </Router>
      </AuthProvider>
    );
  }
}

App.contextType = AuthContext;

export default App;
