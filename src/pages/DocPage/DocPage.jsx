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
          id: '001',
          name: "Article 1",
          paragraphs: [
            {
              id: 0,
              type: "text",
              content: ["hello world"]
            },
            {
              id: 1,
              type: "text",
              content: ["hello world"]
            },
            {
              id: 2,
              type: "text",
              content: ["hello world"]
            },{
              id: 4,
              type: "text",
              content: ["hello world"]
            }
          ]
        }
      ]
    };
  }

  addParagraph = (index) => {
    const newArticles = this.state.articles;
    newArticles[0].paragraphs.push({
      id: index,
      type: 'text',
      content: [""],
      new: true
    });

    this.setState({articles: newArticles});
    console.log(this.state);

  };

  render() {
    const Doc = this.state.articles.filter(
      article => article.id === this.props.match.params.id
    )[0];

    return (
      <Fragment>
        <div className="page-container">
          <SideBar articles={this.state.articles} />
          <div className="doc-view">
            <Document addParagraph={this.addParagraph} data={Doc} />
          </div>
          {/*<RegistrationHeader/>*/}
          {/*<Registration/>*/}
        </div>
      </Fragment>
    );
  }
}
