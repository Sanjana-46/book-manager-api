const express = require('express');
const app = express();
const bookFunctions = require('./books');

// Middleware to parse JSON bodies
app.use(express.json());

// Root route
app.get('/', (req, res) => {
    res.send('Welcome to the Book Manager API!');
});

// Get all books
app.get('/books', (req, res) => {
    res.json(bookFunctions.getAllBooks());
});

// Add a new book
app.post('/books', (req, res) => {
    const book = req.body;
    const result = bookFunctions.addBook(book);
    res.status(201).json(result);
});

// Get a book by ID
app.get('/books/:id', (req, res) => {
    const book = bookFunctions.getBookById(req.params.id);
    book ? res.json(book) : res.sendStatus(404);
});

// Delete a book by ID
app.delete('/books/:id', (req, res) => {
    bookFunctions.deleteBook(req.params.id);
    res.sendStatus(204);
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
