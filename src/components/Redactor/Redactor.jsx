import React from "react";
import Paragraph from "./Paragraph/Paragraph";
import "./Redactor.scss";

const Redactor = ({
                      paragraphs,
                      removeParagraph,
                      addParagraph
                  }) => {

    return (
        <div className="redactor-view">
            {paragraphs.map((paragraph, index) => {
                return <Paragraph key={index}
                                  index={index}
                                  paragraph={paragraph}
                                  removeParagraph={removeParagraph}
                                  addParagraph={addParagraph}
                />;
            })}
        </div>
    );
};

export default Redactor;
