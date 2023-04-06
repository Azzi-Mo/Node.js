const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const ejs = require('ejs');

// Array of books
const books = [
  { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 },
  { title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 },
  { title: '1984', author: 'George Orwell', year: 1949 }
];

// Set up middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

// Render the book list page
app.get('./books.ejs', (req, res) => {
  res.render('./books.ejs', { books });
});

// // Render the new book form page
// app.get('/books/new', (req, res) => {
//   res.render('new-book');
// });

// // Add a new book to the array
// app.post('./books.ejs', (req, res) => {
//   const { title, author, year } = req.body;
//   books.push({ title, author, year });
//   res.redirect('./books.ejs');
// });

// // Search for a book by title, author, or year
// app.post('/books/search', (req, res) => {
//   const { searchTerm } = req.body;
//   const results = books.filter(book =>
//     book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     book.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     book.year.toString().includes(searchTerm)
//   );
//   res.render('search-results', { results, searchTerm });
// });

// Start the server
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});