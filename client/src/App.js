import React, { Component, Fragment } from "react";
import Navigation from "./containers/Navigation/Navigation";
import Footer from "./containers/Footer/Footer";
import Homepage from "./containers/Homepage/Homepage";
import CreateProfile from "./containers/Profile/CreateProfile/CreateProfile";
// import Post from "./containers/Post/Post";
import EditPprofile from "./components/editProfile/editProfile";
import Experience from "./components/experience/experience";
import Education from "./components/education/education";
import Profiles from "./containers/Profiles/Profiles";
import PostsPrivate from "./containers/PostsPrivate/PostsPrivate";
import PostsPublic from "./containers/PostsPublic/PostsPublic";

import ProfileHandle from "./containers/ProfileHandle/ProfileHandle";

import Dashboard from "./containers/Dashboard/Dashboard";
import PrivateRoute from "./containers/PrivateRoute/PrivateRoute";
import MyOwnPosts from "./containers/MyOwnPosts/MyOwnPosts";

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
                      <Route
                        path="/posts-public"
                        exact
                        component={PostsPublic}
                      />
                      <PrivateRoute
                        path="/dashboard"
                        exact
                        component={Dashboard}
                      />

                      <PrivateRoute
                        path="/posts-private"
                        exact
                        component={PostsPrivate}
                      />
                      <PrivateRoute
                        path="/create-profile"
                        exact
                        component={CreateProfile}
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
                      <PrivateRoute
                        path="/profiles"
                        exact
                        component={Profiles}
                      />
                      <PrivateRoute
                        path="/my-own-posts"
                        exact
                        component={MyOwnPosts}
                      />
                      <PrivateRoute
                        path="/profile/:handle"
                        exact
                        component={ProfileHandle}
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
