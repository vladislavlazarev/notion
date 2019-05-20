import React, { Component, Fragment } from "react";
import SideBar from "../../components/SideBar/SideBar";
import Document from "../../components/Document/Document";
import "./DocPage.scss";
export default class DocPage extends Component {
  constructor() {
    super();
    this.state = {
      articles: [
        {
          id: 1,
          name: "Article 1",
          paragraphs: [
            {
              type: "text",
              content: [
                "hello world",
                {
                  text: "Vlad",
                  color: "#f50",
                  strong: false,
                  italic: false
                }
              ]
            },
            {
              type: "text",
              content: ["hello world"]
            },
            {
              type: "text",
              content: ["hello world"]
            }
          ]
        }
      ]
    };
  }
  render() {
    console.log(this.props.match.params.id);

    const Doc = this.state.articles.filter(
      article => article.id === Number(this.props.match.params.id)
    )[0];

    return (
      <Fragment>
        <SideBar articles={this.state.articles} />
        <div className="doc-view">
          <Document data={Doc} />
        </div>
      </Fragment>
    );
  }
}
