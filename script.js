// script.js
let books = [];

document.getElementById('add-book-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    let isbn = document.getElementById('isbn').value;
    let title = document.getElementById('title').value;
    let author = document.getElementById('author').value;
    let year = document.getElementById('year').value;
    
    let book = {
        isbn: isbn,
        title: title,
        author: author,
        year: year,
        available: true
    };
    
    books.push(book);
    displayBooks();
});

document.getElementById('borrow-book-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    let isbn = document.getElementById('borrow-isbn').value;
    let book = books.find(b => b.isbn === isbn && b.available);
    
    if (book) {
        book.available = false;
        displayBooks();
        alert('You have borrowed the book: ' + book.title);
    } else {
        alert('Book not available or does not exist.');
    }
});

document.getElementById('return-book-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    let isbn = document.getElementById('return-isbn').value;
    let book = books.find(b => b.isbn === isbn && !b.available);
    
    if (book) {
        book.available = true;
        displayBooks();
        alert('You have returned the book: ' + book.title);
    } else {
        alert('Book is not borrowed or does not exist.');
    }
});

function displayBooks() {
    let bookList = document.getElementById('book-list');
    bookList.innerHTML = '';
    
    books.filter(b => b.available).forEach(book => {
        let li = document.createElement('li');
        li.textContent = `${book.title} by ${book.author} (ISBN: ${book.isbn})`;
        bookList.appendChild(li);
    });
}
