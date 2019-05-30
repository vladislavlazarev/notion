import React, { Component, Fragment } from "react";
import ArticlePreview from "./ArticlePreview/ArticlePreview";
import "./Sidebar.scss";
import IconEdit from "../../assets/images/edit.svg";
import IconAdd from "../../assets/images/add.png";
export default class SideBar extends Component {
  render() {
    const ArticlesList = this.props.articles.map((i, index) => {
      return <ArticlePreview key={index} index={index} data={i} removeArticle={this.props.removeArticle}/>;
    });
    return (
      <Fragment>
        <div className="side-bar">
          <h1>Notion</h1>
          <ul>
            {ArticlesList}
            <li>
              <img onClick={this.props.addNewArticle} src={IconAdd} className="addImage" />
            </li>
          </ul>
        </div>
      </Fragment>
    );
  }
}
