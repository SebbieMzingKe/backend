const mongoose = require('mongoose');

const BlogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please add a title'],
    trim: true,
    maxlength: [100, 'Title cannot be more than 100 characters']
  },
  body: {
    type: String,
    required: [true, 'Please add blog content'],
  },
  author: {
    type: String,
    required: [true, 'Please add an author'],
    default: 'sebbie'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Blog', BlogSchema);