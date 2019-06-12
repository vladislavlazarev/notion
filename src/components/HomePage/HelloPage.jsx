import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default class HelloPage extends Component{
  render() {
    return(
      <>
        <h1>Type the name of your project</h1>
        <input placeholder="your name here"/>
        <Link className='start-btn' to={'/Env'}>
          Go
        </Link>
      </>
    )
  }
}
