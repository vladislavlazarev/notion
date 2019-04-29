import React, {Component, Fragment} from 'react';
import {connect} from "react-redux";
import HomePage from "./components/HomePage/HomePage";
import { Route } from "react-router-dom";
import Document from "./components/Document/Document";
import SideBar from "./components/SideBar/SideBar";
import './styles/main.scss';
class App extends Component {
  constructor(){
    super();
    this.state = {
      articles: [
        {
          name: 'Article 1',
          content: ''
        },
        {
          name: 'Article 2',
          content: ''
        }
      ]
    }
  }
  componentDidMount() {

  }

  render() {
    console.log(this.props);

    return (
      <Fragment>
        <div className="WorkEnvContainer">
          <SideBar articles={this.state.articles}/>
          <Document/>
        </div>
      </Fragment>
    );
  }
}
const mapStateToProps = state => {
  return {

  }
};

const mapDispatchToProps = dispatch => {
  return {

  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);