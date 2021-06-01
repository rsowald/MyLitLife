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
import Login from "./components/authentication/Login";
import Signup from "./components/authentication/Signup";
import ForgotPassword from './components/authentication/ForgotPassword'
// import Logout from "./components/Logout";
import { AuthProvider } from "./components/authentication/context/AuthContext";
import PrivateRoute from "./components/authentication/PrivateRoute";
import UpdatePassword from "./components/authentication/UpdatePassword";


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

export default App;
