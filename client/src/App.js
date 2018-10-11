import React, { Component } from "react";
import Navigation from "./containers/Navigation/Navigation";
import Footer from "./containers/Footer/Footer";
import Homepage from "./containers/Homepage/Homepage";
import Profile from "./containers/Profile/Profile";
import { Route, Switch, Redirect } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import axios from "axios";

import "./App.css";

class App extends Component {
  componentDidMount() {
    axios
      .get("/api/user/current_user")

      .then(res => console.log("current_user App", res.data));
    axios
      .get("/api/profile")

      .then(res => console.log("profile App", res.data));
  }
  render() {
    return (
      <div>
        <Navigation />
        <Route
          render={({ location }) => (
            <TransitionGroup>
              <CSSTransition key={location.key} timeout={450} classNames="fade">
                <Switch location={location}>
                  <Route path="/" exact component={Homepage} />
                  <Route path="/profile" exact component={Profile} />
                  <Redirect to="/" />
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          )}
        />

        <Footer />
      </div>
    );
  }
}

export default App;
