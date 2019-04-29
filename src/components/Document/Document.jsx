import React, {Component, Fragment} from 'react';
import Line from './Line/Line';
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
        'Hello world!',
        'Hello world!',
        'Hello world!',
        'Hello world!',
        'Hello world!',
        'Hello world!',
        'Hello world!',
        'Hello world!',
        'Hello world!',
        'Hello world!',
        'Hello world!',
        'Hello world!',
        'Hello world!',
        'Hello world!'
      ]
    }
  }
  render() {
    const genLines = this.state.lines.map((line, index) => {
      return <Line key={index} data={line}/>
    });
     return(
       <Fragment>
         <div className="linesContainer">
          {genLines}
         </div>
       </Fragment>
     )
  }
}