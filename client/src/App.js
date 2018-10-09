import React, { Component } from "react";
import Navigation from "./containers/Navigation/Navigation";
import Footer from "./containers/Footer/Footer";
import Homepage from "./containers/Homepage/Homepage";
import { Route, Switch } from "react-router-dom";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <Switch>
          <Route path="/" exact component={Homepage} />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default App;
