import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./ArticlePreview.scss";

import IconEdit from "../../../assets/images/edit.svg";
import IconClose from "../../../assets/images/close.svg";

class ArticlePreview extends Component {
  render() {
    return (
      <>
        <NavLink className="article-preview" to={"/" + this.props.data.id}>
          <li>
            <div className="name-container">
              <p>{this.props.data.name}</p>
              <div className="image-container">
                <img src={IconEdit} alt="" className="close-icon" />
                <img src={IconClose} alt="" onClick={this.onRemoveClick}/>
              </div>
            </div>
          </li>
        </NavLink>
      </>
    );
  }

  onRemoveClick = (e) => {
    e.stopPropagation();
    e.preventDefault();
    this.props.removeArticle(this.props.index);
  };
}

export default ArticlePreview;
