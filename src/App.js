import React, { Component } from "react";
import DocPage from "./pages/DocPage/DocPage";
import { BrowserRouter, Switch, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/:id" component={DocPage} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
