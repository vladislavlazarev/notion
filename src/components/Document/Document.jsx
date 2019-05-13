import React, {Component, Fragment} from 'react';
import './Document.scss';

export default class Document extends Component{
  constructor(){
    super();
    this.state = {
      name: "",
      author: "",
      id: "",
      createDate: "",
      lines: [
        'Hello world!'
      ]
    }
  }
  render() {

     return(
       <Fragment>
         <div className="linesContainer">
          {this.props.data.name}
         </div>
       </Fragment>
     )
  }
}