import React, { Component, Fragment } from "react";
import { NavLink } from "react-router-dom";
import "./ArticlePreview.scss";
import IconEdit from "../../../assets/images/edit.svg";
import IconClose from "../../../assets/images/close.svg";

export default class ArticlePreview extends Component {
  render() {
    return (
      <Fragment>
        <NavLink className="article-preview" to={"/" + this.props.data.id}>
          <li>
            <div className="name-container">
              <p>{this.props.data.name}</p>
              <div className="image-container">
                <img src={IconEdit} alt="" className="close-icon" />
                <img src={IconClose} alt="" />
              </div>
            </div>
          </li>
        </NavLink>
      </Fragment>
    );
  }
}
