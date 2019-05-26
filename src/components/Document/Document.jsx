import React, { Component } from "react";
import "./Document.scss";
import Redactor from "../Redactor/Redactor";

export default class Document extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div className="doc-block">
        <div className="container">
          <div className="doc-block__head">
            <div className="doc-block__emoji">😋</div>
            <div contentEditable={true} className="doc-block__title">
              {this.props.data.name}
            </div>
          </div>
          <div className="doc-block__redactor">
            <Redactor addParagraph={this.props.addParagraph} paragraphs={this.props.data.paragraphs} />
          </div>
        </div>
      </div>
    );
  }
}
