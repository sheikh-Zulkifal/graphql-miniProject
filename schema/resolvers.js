const Author = require("../models/Author");
const Book = require("../models/Book");

const resolvers = {
  Query: {
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
    author: (parent) => Author.findById(parent.authorId),
  },
  author: {
    books: (parent) =>
      Book.find({
        authorId: parent.id,
      }),
  },
};
module.exports = resolvers;
