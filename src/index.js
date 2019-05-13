import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import  { BrowserRouter, Route, Switch } from 'react-router-dom';
import { createStore, applyMiddleware } from "redux/es/redux";
import thunk from 'redux-thunk';
import {Provider} from 'react-redux'
import {composeWithDevTools} from "redux-devtools-extension";
import rootReducers from './reducers';
import DocPage from "./pages/DocPage/DocPage";
const store = createStore( rootReducers, composeWithDevTools(applyMiddleware(thunk)));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route path="/:id" component={DocPage}/>
      </Switch>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
