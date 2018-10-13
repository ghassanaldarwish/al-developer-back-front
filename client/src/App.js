import React, { Component, Fragment } from "react";
import Navigation from "./containers/Navigation/Navigation";
import Footer from "./containers/Footer/Footer";
import Homepage from "./containers/Homepage/Homepage";
import Profile from "./containers/Profile/Profile";
import { Route, Switch, Redirect } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import "./App.css";

class App extends Component {
  render() {
    return (
      <Fragment>
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
      </Fragment>
    );
  }
}

export default App;
