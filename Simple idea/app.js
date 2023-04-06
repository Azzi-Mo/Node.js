const express = require('express');
const app = express();

// set the view engine to ejs
app.set('view engine', 'ejs');


// Route for home page
app.get('/', (req, res) => {
  res.render('./view/home');
});

// // Route for about page
// app.get('/about', (req, res) => {
//   res.render('about');
// });

// // Route for contact page
// app.get('/contact', (req, res) => {
//   res.render('contact');
// });

// // Route for services page
// app.get('/services', (req, res) => {
//   res.render('services');
// });

// Start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});