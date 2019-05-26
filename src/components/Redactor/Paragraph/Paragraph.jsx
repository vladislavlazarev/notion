import React, { Component } from "react";
import "./Paragraph.scss";

class Paragraph extends Component {


    onEnterPress = (event, message = 'enter clicked  ') => {
        if(event.keyCode === 13) {
            event.preventDefault();
            this.props.addParagraph(5 );

        }
    };
    componentDidMount(){
        this.paragraph.focus();
        document.addEventListener("keydown", this.onEnterPress, false);
    }
    componentWillUnmount(){
        document.removeEventListener("keydown", this.onEnterPress, false);
    }
    generateNewId() {
        this.setState(this.state)
    }

  render() {
    const { type, content, id } = this.props.paragraph;

    const paragraphHTML = content.map(item => {
      return item;
    });

    return (
      <div className="paragraph" data-paragraph={id} data-type={type}>
        <div
          className={"paragraph__content -" + type}
          contentEditable={true}
          ref={event => {
            this.paragraph = event;
          }}
          onBlur={e => {
            console.log("Change Paragraph : ", e.target.value);
          }}
        >
          {paragraphHTML}
        </div>
      </div>
    );
  }
}

export default Paragraph;
