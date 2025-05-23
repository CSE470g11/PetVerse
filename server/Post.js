const mongoose = require('mongoose');

const commentSchema = new mongoose.Schema({
  user: { type: String, required: true },
  content: { type: String, required: true, maxlength: 280 },
  timestamp: { type: Date, default: Date.now },
});

const postSchema = new mongoose.Schema({
  user: { type: String, required: true },
  content: { type: String, required: true, maxlength: 280 },
  timestamp: { type: Date, default: Date.now },
  likes: [{ type: String }], 
  comments: [commentSchema],
  image: { type: String }, 
});

module.exports = mongoose.model('Post', postSchema);
