const express = require("express");
const http = require("http");
const app = express();
const socketIO = require("socket.io");
const ejs = require("ejs");

app.set("view engine", "ejs");

// Search route
app.get('/search', (req, res) => {
  const searchTerm = req.query.q.toLowerCase();

  const results = books.filter(book =>
    book.title.toLowerCase().includes(searchTerm) ||
    book.author.toLowerCase().includes(searchTerm) ||
    book.year.toString().includes(searchTerm)
  );

  res.render('search', { searchTerm, results });
});

app.listen(3000, () => {
  console.log("server is runing..");
});
