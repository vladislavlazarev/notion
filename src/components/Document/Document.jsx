import React, { Component, Fragment } from "react";
import "./Document.scss";
import ArticlePreview from "../SideBar/ArticlePreview/ArticlePreview";
import Line from "../../components/Document/Line/Line";

export default class Document extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      author: "",
      id: "",
      createDate: "",
      lines: ["Hello world!"]
    };
  }
  render() {
    const text = this.props.data.content.map((i, index) => {
      return <Line key={index} data={i} />;
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
