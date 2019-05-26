let doc = {
  id: 1,
  name: "Article 1",
  paragraphs: [
    {
      type: "text",
      content: [
        "hell<span>o wo</span>rld",
        {
          text: "Vlad",
          color: "#f50",
          strong: false,
          italic: false
        }
      ]
    }
  ]
};

function readerImport(content) {
  console.log(content)
}
