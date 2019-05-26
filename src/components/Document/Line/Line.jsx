import React, { Component } from "react";

export default class Line extends Component {
  render() {
    return <div className="line" contentEditable={true}>{this.props.data}</div>;
  }
}
