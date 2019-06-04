import React, {Component} from "react";
import "./Paragraph.scss";

class Paragraph extends Component {
    componentDidMount() {
        this.paragraph.innerText = this.props.paragraph.content.map(item => item);
        this.paragraph.focus();
    }

    render() {
        const {
            type,
            id
        } = this.props.paragraph;

        return (
            <div className="paragraph" data-paragraph={id} data-type={type}>
                <button onClick={() => this.setCaret(10)}>Go go</button>
                <div
                    className={"paragraph__content -" + type}
                    contentEditable
                    ref={event => this.paragraph = event}

                    onKeyPress={this.onPressedKey}
                    onSelect={this.onSelect}/>
            </div>
        );
    }

    setCaret = caretPos => {
        console.dir(this.paragraph);

        if (this.paragraph.createTextRange) {
            var range = this.paragraph.createTextRange();
            range.move('character', caretPos);
            range.select();
        } else {
            if (this.paragraph.selectionStart) {
                this.paragraph.focus();
                this.paragraph.setSelectionRange(caretPos, caretPos);
            } else
                this.paragraph.focus();
        }
    };

    onPressedKey = (event, message = 'enter clicked  ') => {
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

            // up arrow
            if (event.keyCode === 38) {

            }

            // down arrow
            if (event.keyCode === 40) {

            }

        }
    };

    setCaretToEnd = el => {
        // let selectionRange = window.getSelection().getRangeAt(0);
        // selectionRange.deleteContents();
        // selectionRange.insertNode(el);
        // window.getSelection().collapseToEnd();
        // window.getSelection().removeAllRanges();

        let selectionRange = window.document.createRange();
        selectionRange.selectNode(el);
        window.getSelection().addRange(selectionRange);
        window.getSelection().collapseToEnd();
    };

    setFocus = () => {
        console.log(this.props.paragraph);
        if (this.props.paragraph.isFocused) {
            this.paragraph.focus();
            this.setCaretToEnd(this.paragraph);
        }
    };


    onSelect = () => {
        const start = window.getSelection().anchorOffset;
        const end =  window.getSelection().extentOffset;

        if (start < end) {
            console.log(window.getSelection().baseNode.data.substring(start, end));
        } else {
            console.log(window.getSelection().baseNode.data.substring(end, start));
        }
    };
}

export default Paragraph;
