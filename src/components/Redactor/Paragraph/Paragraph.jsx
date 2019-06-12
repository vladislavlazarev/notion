import React, {Component} from "react";
import "./Paragraph.scss";

class Paragraph extends Component {
    componentDidMount() {
        // document.addEventListener('keydown', , false);
        this.paragraph.innerText = this.props.paragraph.content.map(item => item);
        this.paragraph.focus();
    }

    render() {
        const {
            type,
            id
        } = this.props.paragraph;

        return (
            <div className="paragraph"
                 data-paragraph={id}
                 data-type={type}>
                <div
                    className={"paragraph__content -" + type}
                    onKeyDown={this.onPressedKey}
                    contentEditable
                    id={`input${this.props.index}`}
                    ref={event => this.paragraph = event}

                    onKeyPress={this.onPressedKey}
                    onSelect={this.onSelect}/>
            </div>
        );
    }


    onUpArrowPressed(e) {
        if (this.props.index > 0){
            e.preventDefault();
            const currentCaretPosition = window.getSelection().getRangeAt(0);
            const previousInput = document.getElementById(`input${this.props.index - 1}`);
            previousInput.focus();
        }
    }

    onDownArrowPressed(e) {
        if (this.props.index < document.getElementsByClassName("paragraph").length - 1){
            e.preventDefault();
            e.stopPropagation();
            // const currentCaretPosition = window.getSelection().getRangeAt(0);
            const nextInput = document.getElementById(`input${this.props.index + 1}`);

            console.log('INDEX INDEX', this.props.index);
            // console.log('INPUT INPUT', nextInput);

            nextInput.focus();
        }
    }
    onLeftArrowPressed(e) {
        if (this.paragraph.innerText.length < 1){
            e.preventDefault();
            const currentCaretPosition = window.getSelection().getRangeAt(0);
            const previousInput = document.getElementById(`input${this.props.index - 1}`);
            previousInput.focus();
        }
    }

    onPressedKey = (event) => {
        if (document.activeElement === this.paragraph) {
            if (event.keyCode === 13) {
                event.preventDefault();
                this.props.addParagraph(5);
            }
            if (event.keyCode === 8) {
                if (this.paragraph.textContent.length === 0) {
                    event.preventDefault();
                    this.props.removeParagraph(this.props.index);
                }
            }

            // left arrow
            if (event.keyCode === 37) {
                this.onLeftArrowPressed(event);
            }

            // up arrow
            if (event.keyCode === 38) {
                this.onUpArrowPressed(event);
            }

            // right arrow
            if (event.keyCode === 39) {
                this.onUpArrowPressed(event);
            }

            // down arrow
            if (event.keyCode === 40) {
                this.onDownArrowPressed(event);
            }

        }
    };

    setFocus = () => {
        if (this.props.paragraph.isFocused) {
            this.paragraph.focus();
            this.setCaretToEnd(this.paragraph);
        }
    };


    onSelect = () => {
        const start = window.getSelection().anchorOffset;
        const end =  window.getSelection().extentOffset;
        console.log(this.props.index);
    };
}

export default Paragraph;
