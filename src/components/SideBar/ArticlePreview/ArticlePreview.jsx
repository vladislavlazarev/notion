import React, {Component, Fragment} from 'react';
import { Link } from 'react-router-dom';
import "./ArticlePreview.scss";
export default class ArticlePreview extends Component{
  render(){
    return(
      <Fragment>
        <li >
          <Link className="article-preview" to={'/' + this.props.data.id}>
            {this.props.data.name}
          </Link>
        </li>
      </Fragment>
    )
  }
}