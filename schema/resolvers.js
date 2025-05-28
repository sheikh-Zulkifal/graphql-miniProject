const Author = require("../models/Author");
const Book = require("../models/Book");

const resolvers = {
  Query: {
    author: (parent, args) => {
      return Author.findById(args.id);
    },
    books: () => Book.find(),
    authors: () => Author.find(),
  },

  Mutation: {
    addAuthor: (_, { name, age }) => {
      const author = new Author({ name, age });
      return author.save();
    },
    addbook: (_, { title, genre, authorId }) => {
      const book = new Book({ title, genre, authorId });
      return book.save();
    },
  },

  Book: {
    author: async (parent) => await Author.findById(parent.authorId),
  },

  Author: {  // <-- Change from "author" to "Author"
    books: (parent) => Book.find({ authorId: parent.id }),
  },
};

module.exports = resolvers;
