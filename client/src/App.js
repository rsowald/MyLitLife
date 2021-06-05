import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import AppNav from "./components/Navbar";
import Home from "./components/pages/Home";
import Dashboard from "./components/pages/Dashboard";
import BookQueue from "./components/pages/BookQueue";
import Completed from "./components/pages/Completed";
import NoMatch from "./components/pages/NoMatch";
import Glossary from "./components/Glossary";
import DetailModal from "./components/DetailModal";
import "./App.css";
import ForgotPassword from './components/authentication/ForgotPassword'
import { AuthProvider } from "./components/authentication/context/AuthContext";
import PrivateRoute from "./components/authentication/PrivateRoute";
import UpdatePassword from "./components/authentication/UpdatePassword";
import { ModalProvider } from "./context/ModalContext";

function App() {
  return (
    <AuthProvider>
      <ModalProvider>
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
        <DetailModal />
      </ModalProvider>
    </AuthProvider>
  );
}

export default App;
