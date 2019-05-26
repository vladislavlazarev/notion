import React, { Component } from "react";
import Paragraph from "./Paragraph/Paragraph";
import "./Redactor.scss";

class Redactor extends Component {
  render() {
    return (
      <div className="redactor-view">
        {this.props.paragraphs.map((paragraph, index) => {
          return <Paragraph key={index} paragraph={paragraph} addParagraph={this.props.addParagraph} />;
        })}
      </div>
    );
  }
}

export default Redactor;
