const mongoose = require("mongoose");
const { Schema } = mongoose;

const BookSchema = new Schema({
  userId: { type: String, required: true },
  id: { type: String },
  volumeInfo: {}
});

const Enqueued = mongoose.model("Enqueued", BookSchema);

module.exports = Enqueued;
