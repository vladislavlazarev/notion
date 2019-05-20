import React, { Component, Fragment } from "react";
import SideBar from "../../components/SideBar/SideBar";
import Document from "../../components/Document/Document";
import Registration from "../../components/Registration/Registration";
import "./DocPage.scss";
import RegistrationHeader from "../../components/Registration/RegistrationHeader/RegistrationHeader";
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
              id: "paragraph-1",
              type: "text",
              content: ["hello world"]
            },
            {
              id: "paragraph-2",
              type: "text",
              content: ["hello world"]
            },
            {
              id: "paragraph-3",
              type: "text",
              content: ["hello world"]
            }
          ]
        }
      ]
    };
  }
  render() {
    const Doc = this.state.articles.filter(
      article => article.id === Number(this.props.match.params.id)
    )[0];

    return (
      <Fragment>
        <div className="page-container">
        {/*<SideBar articles={this.state.articles} />*/}
        {/*<div className="doc-view">*/}
          {/*<Document data={Doc} />*/}
        {/*</div>*/}
          <RegistrationHeader/>
          <Registration/>
        </div>
      </Fragment>
    );
  }
}
