const mongoose = require("mongoose");
const { Schema } = mongoose;

const BookSchema = new Schema({
  title: { type: String, required: true },
  pages: { type: Number },
  isComplete: { type: Boolean, default: false },
  id: { type: String },
  volumeInfo: {}
});

const Book = mongoose.model("Book", BookSchema);

module.exports = Book;
