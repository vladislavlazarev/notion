import React, { Component } from 'react';
export default class Line extends Component{
  render() {
    return(
      <div contentEditable={true}>
        {this.props.data}
      </div>
    )
  }
}