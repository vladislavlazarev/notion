import React, {Component, Fragment} from "react";
import SideBar from "../../components/SideBar/SideBar";
import Document from "../../components/Document/Document";
import "./DocPage.scss";

class DocPage extends Component {
    constructor() {
        super();
        this.state = {
            articles: [
                {
                    id: '001',
                    name: "Article 1",
                    paragraphs: [
                        {
                            id: 0,
                            type: "text",
                            content: ["hello world"]
                        },
                        {
                            id: 1,
                            type: "text",
                            content: ["hello world"]
                        },
                        {
                            id: 2,
                            type: "text",
                            content: ["hello world"]
                        }, {
                            id: 4,
                            type: "text",
                            content: ["hello world"]
                        }
                    ]
                },
                {
                    id: '002',
                    name: "Article 2",
                    paragraphs: [
                        {
                            id: 0,
                            type: "text",
                            content: ["hello world"]
                        },
                        {
                            id: 1,
                            type: "text",
                            content: ["hello world"]
                        },
                        {
                            id: 2,
                            type: "text",
                            content: ["hello world"]
                        }, {
                            id: 4,
                            type: "text",
                            content: ["hello world"]
                        }
                    ]
                }
            ]
        };
    }

    render() {
        const Doc = this.state.articles.filter(article => article.id === this.props.match.params.id)[0];

        return (
            <>
                <div className="page-container">
                    <SideBar articles={this.state.articles}
                             addNewArticle={this.addNewArticle}
                             removeArticle={this.removeArticle}/>
                    <div className="doc-view">
                        <Document addParagraph={this.addParagraph}
                                  removeParagraph={this.removeParagraph}
                                  upArrowClicked={this.upArrowClicked}
                                  data={Doc}/>
                    </div>
                </div>
            </>
        );
    }


    addParagraph = (index) => {
        const newArticles = this.state.articles;
        newArticles[0].paragraphs.push({
            id: index,
            type: 'text',
            content: [""],
            new: true
        });

        this.setState({articles: newArticles});
    };

    removeParagraph = (index) => {
        const newArticles = this.state.articles;
        newArticles[0].paragraphs.splice(index, 1);
        newArticles[0].paragraphs[index - 1].isFocused = true;

        this.setState({articles: newArticles});

    };
    addNewArticle = () => {
        const newArticles = this.state.articles;
        newArticles.push({
            id: this.getNewArticleId(),
            name: "New article",
            paragraphs: [
                {
                    id: 0,
                    type: "text",
                    content: ["hello world"]
                },
                {
                    id: 1,
                    type: "text",
                    content: ["hello world"]
                }
            ]
        });

        this.setState({articles: newArticles});

        console.log(this.state.articles);
    };

    removeArticle = (index) => {
        const newArticles = this.state.articles;
        newArticles.splice(index, 1);
        this.setState({articles: newArticles});
    };

    getNewArticleId = () => {
        const arrLength = this.state.articles.length;
        return `00${arrLength + 1}`;
    };
}

export default DocPage;
