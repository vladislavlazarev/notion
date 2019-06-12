import React from 'react';

const ArticleContext = React.createContext({
    currentArticle: 0,
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
});
