const mongoose = require("mongoose");
const BookSchema = new mongoose.model({
  title: String,
  genre: String,
  authorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Author",
  },
});

module.exports = mongoose.model("Book", BookSchema);
