const mongoose = require("mongoose");
const { Schema } = mongoose;

const BookSchema = new Schema({
  userId: { type: String, required: true },
  id: { type: String },
  volumeInfo: {},
  rating: { type: Number },
  notes: { type: String },
  review: { type: String },
  ending: { type: String },
  updated: { type: Date, default: Date.now },
});

const Enqueued = mongoose.model("Enqueued", BookSchema);

module.exports = Enqueued;
