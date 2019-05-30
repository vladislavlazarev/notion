import React, { Component } from "react";
import "./Paragraph.scss";

class Paragraph extends Component {

  // function getRandomArbitary(min, max)
  // {
  //   return Math.random() * (max - min) + min;
  // }

  onPressedKey = (event, message = 'enter clicked  ') => {
      if (document.activeElement === this.paragraph) {
        if(event.keyCode === 13) {
            event.preventDefault();
          this.props.addParagraph(5);
        }
        if(event.keyCode === 8) {
          if (this.paragraph.textContent.length === 0) {
            event.preventDefault();
            this.props.removeParagraph(this.props.index);
          }
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
        document.addEventListener("keydown", this.onPressedKey, false);
        this.paragraph.focus();


    }

   setFocus(){
    console.log(this.props.paragraph);
    if (this.props.paragraph.isFocused){
      this.paragraph.focus();
      this.setCaretToEnd(this.paragraph);
    }
  }
    componentWillUnmount(){
        document.removeEventListener("keydown", this.onPressedKey, false);
    }

    generateNewId() {
        this.setState(this.state)
    }

    setCaretToEnd(el) {
      // let selectionRange = window.getSelection().getRangeAt(0);
      // selectionRange.deleteContents();
      // selectionRange.insertNode(el);
      // window.getSelection().collapseToEnd();
      // window.getSelection().removeAllRanges();

      let selectionRange = window.document.createRange();
      selectionRange.selectNode(el);
      window.getSelection().addRange(selectionRange);
      window.getSelection().collapseToEnd();
    }


  render() {
    const { type, content, id, isFocused } = this.props.paragraph;
    if (isFocused){
      this.paragraph.focus();
      this.setCaretToEnd(this.paragraph)
    }

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
