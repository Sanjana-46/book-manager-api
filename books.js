let books = [];

function getAllBooks() {
    return books;
}

function addBook(book) {
    books.push(book);
    return book;
}

function getBookById(id) {
    return books.find(book => book.id === id);
}

function deleteBook(id) {
    books = books.filter(book => book.id !== id);
}

module.exports = {
    getAllBooks,
    addBook,
    getBookById,
    deleteBook
};
