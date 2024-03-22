const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const PollsSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  choices: {
    type: [{ id: Number, value: String }],
    required: true,
  },
  fid: {
    type: Number,
    required: true,
  },
});
module.exports = Item = mongoose.model("poll", PollsSchema);
