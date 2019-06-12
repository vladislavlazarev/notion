import React, { Component } from "react";
import DocPage from "./pages/DocPage/DocPage";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HelloPage from "./pages/HelloPage/HelloPage";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HelloPage} />
          <Route path="/:id" component={DocPage} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
