const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const ejs = require('ejs');
const port = 3000;

// Array of books
const books = [
  { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925, reviews: [] },
  { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960, reviews: [] },
  { id: 3, title: '1984', author: 'George Orwell', year: 1949, reviews: [] }
];

// Render the book detail page with reviews
app.get('/books/:id', (req, res) => {
  const book = books.find(b => b.id === parseInt(req.params.id));
  res.render('book', { book });
});

// Handle review form submissions
app.post('/books/:id/reviews', (req, res) => {
  const book = books.find(b => b.id === parseInt(req.params.id));
  const { reviewerName, reviewText, rating } = req.body;
  const review = { reviewerName, reviewText, rating };
  book.reviews.push(review);
  res.redirect(`/books/${book.id}`);
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});