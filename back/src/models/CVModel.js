const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = Schema({
  title: {
    type: String,
    required: true,
  },
  totalPages: {
    type: Number,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  creationAt: {
    type: Date,
    default: Date.now,
  },
  updateAt: {
    type: Date,
    default: Date.now,
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
});

const Book = mongoose.model('Book', bookSchema);

module.exports = Book;
