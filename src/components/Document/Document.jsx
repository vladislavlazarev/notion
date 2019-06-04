import React, {Component} from "react";
import "./Document.scss";
import Redactor from "../Redactor/Redactor";

export default class Document extends Component {
    componentDidMount() {
        this.nameRedactor.innerText = this.props.data.name;
    }

    render() {
        return (
            <div className="doc-block">
                <div className="container">
                    <div className="doc-block__head">
                        <div className="doc-block__emoji">😋</div>
                        <div contentEditable={true}
                             ref={el => this.nameRedactor = el}
                             className="doc-block__title">
                        </div>
                    </div>
                    <div className="doc-block__redactor">
                        <Redactor addParagraph={this.props.addParagraph}
                                  removeParagraph={this.props.removeParagraph}
                                  paragraphs={this.props.data.paragraphs}
                        />
                    </div>
                </div>
            </div>
        );
    }
}
