const mongoose = require("mongoose");

const AuthorSchema = new mongoose.model({
  name: String,
  age: Number,
});
module.exports = mongoose.model("Author", AuthorSchema);
