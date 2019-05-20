import React, { Component, Fragment } from "react";
import "./Redactor.scss";

export default class Paragraph extends Component {
  render() {
    return (
      <div className="redactor-view" contentEditable={true}>
        {this.props.data}
      </div>
    );
  }
}
