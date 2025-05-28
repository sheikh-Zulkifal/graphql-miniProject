const mongoose = require("mongoose");

const AuthorSchema = new mongoose.Schema({
  name: String,
  age: Number,
});

const Author = mongoose.model("Author", AuthorSchema);

module.exports = Author;
