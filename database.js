const books = [{
    ISBN: "12345Book",
    title: "Getting started with MERN",
    pubDate: "2021-11-29",
    language: "en",
    numPage: 250,
    author: [1, 2],
    publications: [1],
    category: ["tech", "programming", "education"]
}];

const author = [{
        id: 1,
        name: "Shubham",
        books: ["12345Book", "MyBook"]
    },
    {
        id: 2,
        name: "Elon Musk",
        books: ["12345Book"]
    }
];

const publication = [{
        id: 1,
        name: "Writex",
        book: ["12345Book"]
    },
    {
        id: 2,
        name: "Readex",
        book: ["12256Book"]
    }
];

module.exports = { books, author, publication };

//monoose -> validation
