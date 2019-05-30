import React, { Component } from "react";
import Paragraph from "./Paragraph/Paragraph";
import "./Redactor.scss";

class Redactor extends Component {
  render() {
    return (
      <div className="redactor-view">
        {this.props.paragraphs.map((paragraph, index) => {
          return <Paragraph key={index}
                            index={index}
                            paragraph={paragraph}
                            removeParagraph={this.props.removeParagraph}
                            addParagraph={this.props.addParagraph}
          />;
        })}
      </div>
    );
  }
}

export default Redactor;
