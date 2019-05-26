import React, {Component, Fragment} from "react";
import ArticlePreview from './ArticlePreview/ArticlePreview';
import './Sidebar.scss';
export default class SideBar extends Component{
  render() {
    const ArticlesList = this.props.articles.map((i, index) => {
      return <ArticlePreview key={index} data={i}/>
    });

    return(
      <Fragment>
        <div className="side-bar">
          <ul>
            {ArticlesList}
          </ul>
        </div>
      </Fragment>
    )
  }
}