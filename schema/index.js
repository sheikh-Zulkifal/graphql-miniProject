const { gql } = require("apollo-server-express");
const resolvers = require("./resolvers");
const typeDefs = gql`
  type Book {
    id: ID!
    title: String!
    genre: String!
    author: Author
  }

  type Author {
    id: ID!
    name: String!
    age: Int!
    books: [Book]
  }

  type Query {
  author(id:ID!): Author
    books: [Book]
    authors: [Author]
  }

  type Mutation {
    addAuthor(name: String!, age: Int!): Author
    addbook(title: String!, genre: String!, authorId: ID!): Book
  }
`;

module.exports = typeDefs;
