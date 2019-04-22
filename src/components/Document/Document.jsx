import React, {Component, Fragment} from 'react';
import Line from './Line/Line';
export default class Document extends Component{
  constructor(){
    super();
    this.state = {
      name: "Vlad",
      author: "",
      id: "",
      createDate: "",
      lines: [
        '<p>Hello world!</p>',
        '<p>Hello world!</p>',
        '<p>Hello world!</p>',
        '<p>Hello world!</p>'
      ]
    }
  }
  render() {
    const genLines = this.state.lines.map((line, index) => {
      return <Line key={index} data={line}/>
    });
     return(
       <Fragment>
        {genLines}
       </Fragment>
     )
  }
}