import React, { Component } from "react";
import Navigation from "./containers/Navigation/Navigation";
import Footer from "./containers/Footer/Footer";
import Homepage from "./containers/Homepage/Homepage";
import Profile from "./containers/Profile/Profile";
import { Route, Switch, Redirect } from "react-router-dom";
import { spring, AnimatedSwitch } from "react-router-transition";

import "./App.css";
function mapStyles(styles) {
  return {
    opacity: styles.opacity,
    transform: `scale(${styles.scale})`
  };
}

function bounce(val) {
  return spring(val, {
    stiffness: 330,
    damping: 22
  });
}

// child matches will...
const bounceTransition = {
  // start in a transparent, upscaled state
  atEnter: {
    opacity: 0,
    scale: 1.2
  },
  // leave in a transparent, downscaled state
  atLeave: {
    opacity: bounce(0),
    scale: bounce(0.8)
  },
  // and rest at an opaque, normally-scaled state
  atActive: {
    opacity: bounce(1),
    scale: bounce(1)
  }
};

class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <AnimatedSwitch
          atEnter={bounceTransition.atEnter}
          atLeave={bounceTransition.atLeave}
          atActive={bounceTransition.atActive}
          mapStyles={mapStyles}
          className="switchWrapper"
        >
          <Route path="/" exact component={Homepage} />
          <Route path="/profile" exact component={Profile} />
          <Redirect to="/" />
        </AnimatedSwitch>
        <Footer />
      </div>
    );
  }
}

export default App;
