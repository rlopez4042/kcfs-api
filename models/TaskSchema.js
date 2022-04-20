const mongoose = require("../../connection");

const taskSchema = new mongoose.Schema({
  //day of the challenge
  user: { type: Number },
  //user
  user: { type: String },
  //challenge one
  one: { type: Boolean, default: false },
  //challenge two
  two: { type: Boolean, default: false },
  //challenge three
  three: { type: Boolean, default: false },
  //challenge four
  four: { type: Boolean, default: false },
  //challenge five
  image: { type: String },
});
module.exports = mongoose.model("Task", taskSchema);
