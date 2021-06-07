const mongoose = require("mongoose");
const { Schema } = mongoose;

const UserSchema = new Schema({
    userId: { type: String, required: true },
    currentBook: { type: String },
    pageGoal: { type: Number },
    bookGoal: { type: Number }
});

const User = mongoose.model("User", UserSchema);

module.exports = User;