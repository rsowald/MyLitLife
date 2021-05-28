const mongoose = require("mongoose");
const { Schema } = mongoose;

const BookSchema = new Schema({
  userId: { type: String, required: true },
  createdAt: {type: Date, default:Date.now },
  id: { type: String },
  volumeInfo: {}
});

const Completed = mongoose.model("Completed", BookSchema);

module.exports = Completed;
