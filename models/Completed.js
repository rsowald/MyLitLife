const mongoose = require("mongoose");
const { Schema } = mongoose;

const BookSchema = new Schema({
  userId: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  id: { type: String },
  volumeInfo: {},
  rating: { type: Number },
  notes: { type: String },
  review: { type: String },
  ending: { type: String },
  updated: { type: Date, default: Date.now },
});
BookSchema.index({ userId: 1, id: 1 }, { unique: true });

const Completed = mongoose.model("Completed", BookSchema);

module.exports = Completed;
