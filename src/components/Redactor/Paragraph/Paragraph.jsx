import React, { Component } from "react";
import "./Paragraph.scss";

export default class Paragraph extends Component {
  render() {
    return <div className="paragraph-item" contentEditable={true} />;
  }
}
