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
                 data-type={type} ref={el => this.parent = el}>
                <div
                    className={"paragraph__content -" + type}
                    onKeyDown={this.onPressedKey}
                    contentEditable
                    id={`input${this.props.index}`}
                    ref={event => this.paragraph = event}

                    onKeyPress={this.onPressedKey}
                    onSelect={this.onSelect}/>
                    <button onClick={this.setCaret}>Set Carret</button>
            </div>
        );
    }

    setCaret = () => {

        const start = this.paragraph.firstChild;
        console.log('START', start);

        const rng = document.createRange();
        rng.setStart(start, 3);
        rng.setEnd(this.paragraph.firstChild, 3);


        // console.dir(this.paragraph);
        // if (this.paragraph.setSelectionRange) {
        //     console.log('YEAH!!!');
        // }


        // this.paragraph.setSelectionRange(5, 5);
    };

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
        const caretPosition = this.getCaretPosition();

        if (caretPosition.start === 0 && caretPosition.end === caretPosition.start) {
            e.preventDefault();
            const currentCaretPosition = window.getSelection().getRangeAt(0);
            const previousInput = document.getElementById(`input${this.props.index - 1}`);
            previousInput.focus();
        }
    }
    onRightArrowPressed(e) {
        const caretPosition = this.getCaretPosition();

        if (caretPosition.start === this.paragraph.innerText.length && caretPosition.end === caretPosition.start) {
            e.preventDefault();
            const currentCaretPosition = window.getSelection().getRangeAt(0);
            const previousInput = document.getElementById(`input${this.props.index + 1}`);
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
                    const previousInput = document.getElementById(`input${this.props.index - 1}`).focus();
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
                this.onRightArrowPressed(event);
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

    getCaretPosition() {
       return {
            start: window.getSelection().anchorOffset,
            end:  window.getSelection().extentOffset
        }
    }


    onSelect = () => {
        const currentPosition = this.getCaretPosition();
        console.log(this.props.index);
    };
}

export default Paragraph;
