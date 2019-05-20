import React, { Component, Fragment } from "react";
import "./Document.scss";
import ArticlePreview from "../SideBar/ArticlePreview/ArticlePreview";
import Line from "../../components/Document/Line/Line";
import Redactor from "../Redactor/Redactor";

export default class Document extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    const text = this.props.data.paragraphs.map((i, index) => {
      return <Redactor key={index} data={i.content } />;
      // console.log(i);
    });

    console.log(text);
    return (
      <Fragment>
        <div className="container">
          <div className="emojiContainer">
            😋
          </div>
          <div contentEditable={true} className="linesContainer">
            {this.props.data.name}
          </div>
          {text}
        </div>
      </Fragment>
    );
  }
}
