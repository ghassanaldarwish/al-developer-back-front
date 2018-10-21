import React, { Component, Fragment } from "react";
import Navigation from "./containers/Navigation/Navigation";
import Footer from "./containers/Footer/Footer";
import Homepage from "./containers/Homepage/Homepage";
import Profile from "./containers/Profile/Profile";
import Post from "./containers/Post/Post";
import EditPprofile from "./components/editProfile/editProfile";
import Experience from "./components/experience/experience";
import Education from "./components/education/education";

import Dashboard from "./containers/Dashboard/Dashboard";
import PrivateRoute from "./containers/PrivateRoute/PrivateRoute";
import { Route, Switch, Redirect } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import "./App.css";

class App extends Component {
  render() {
    return (
      <Fragment>
        <Navigation>
          <Route
            render={({ location }) => (
              <TransitionGroup>
                <CSSTransition
                  key={location.key}
                  timeout={450}
                  classNames="fade"
                >
                  <Fragment>
                    <Switch location={location}>
                      <Route path="/" exact component={Homepage} />
                      <PrivateRoute
                        path="/dashboard"
                        exact
                        component={Dashboard}
                      />

                      <PrivateRoute path="/post" exact component={Post} />
                      <PrivateRoute
                        path="/create-profile"
                        exact
                        component={Profile}
                      />
                      <PrivateRoute
                        path="/edit-profile"
                        exact
                        component={EditPprofile}
                      />
                      <PrivateRoute
                        path="/add-experience"
                        exact
                        component={Experience}
                      />
                      <PrivateRoute
                        path="/add-education"
                        exact
                        component={Education}
                      />

                      <Redirect to="/" />
                    </Switch>
                    <Footer />
                  </Fragment>
                </CSSTransition>
              </TransitionGroup>
            )}
          />
        </Navigation>
      </Fragment>
    );
  }
}

export default App;
