const Book = require('../models/BooksModel');
const { verifyBook } = require('../validator/BookValidator');

const getBooks = async (req, res) => {
  try {
    const products = await Book.find();
    return res.json(products);
  } catch (error) {
    return res.status(500).json({ error: `Internal server error : ${error}` });
  }
};

const getBookById = async (req, res) => {
  const book = await Book.findById(req.params.id);
  if (!book) {
    return res.status(404).json({ error: 'Book not found' });
  }
  return res.json(book);
};

const createBook = (req, res) => {
  const newBook = new Book({
    title: req.body.title,
    totalPages: req.body.totalPages,
    description: req.body.description,
    createAt: Date.now(),
    updateAt: Date.now(),
    author: req.user,
  });

  const isBookValid = verifyBook(req);

  if (isBookValid) {
    return res.status(400).json({ error: verifyBook(req, res) });
  }

  newBook
    .save()
    .then((book) => {
      const status = (res.status = 200);
      return res.send({ status, book });
    })
    .catch((err) => {
      res.status = 400;
      return res.send({ error: err.message });
    });
};

const updateBook = async (req, res) => {
  const book = await Book.findById(req.params.id);
  if (!book) {
    return res.status(404).json({ error: 'Book not found' });
  }
  book.title = req.body.title;
  book.totalPages = req.body.totalPages;
  book.description = req.body.description;
  book.updateAt = Date.now();

  book
    .save()
    .then((book) => {
      const status = (res.status = 200);
      return res.send({ status, book });
    })
    .catch((err) => {
      res.status = 400;
      return res.send({ error: err.message });
    });
};

const deleteBook = async (req, res) => {
  const book = await Book.findById(req.params.id);
  if (!book) {
    return res.status(404).json({ error: 'Book not found' });
  }
  book
    .deleteOne()
    .then(() => {
      return res.status(200).json({ message: `Book deleted` });
    })
    .catch((err) => {
      return res.status(400).json({ error: err.message });
    });
};

module.exports = {
  getBooks,
  getBookById,
  createBook,
  updateBook,
  deleteBook,
};
