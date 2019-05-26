import React, { Component } from "react";
import "./Paragraph.scss";

class Paragraph extends Component {


    onPressedKey = (event, message = 'enter clicked  ') => {
      if (document.activeElement == this.paragraph) {
        if(event.keyCode === 13) {
            event.preventDefault();
            this.props.addParagraph(5);
        }

        // up arrow
        if(event.keyCode === 38) {

        }
        
        // down arrow
        if(event.keyCode === 40) {

        }
      }
    };

    componentDidMount(){
        console.log(this.props.state);
        this.paragraph.focus();
        document.addEventListener("keydown", this.onPressedKey, false);
    }

    componentWillUnmount(){
        document.removeEventListener("keydown", this.onPressedKey, false);
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
