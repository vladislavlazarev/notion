import React, {Component, Fragment} from 'react';
export default class ArticlePreview extends Component{
  render(){
    return(
      <Fragment>
        <li>
          {this.props.data}
        </li>
      </Fragment>
    )
  }
}