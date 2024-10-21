//Task 1:Create Book class with properties and methods
class Book {
    constructor(title,author,ISBN,) {
        this.title = title //the title of the book
        this.author = author //the name of the author
        this.ISBN = ISBN //the ISBN number of the book
        this._isAvailable = true //books are initially available
    } 
    get details () {
        return `Title: ${this.title}
     Author: $${this.author}
     ISBN: ${this.ISBN}`};

     //getter for book availability status
     get isAvailable() {
     return this._isAvailable; //return whether book is available
    };
    set isAvailable(status) {
        if (typeof status === 'boolean') {
            this._isAvailable = status; //set available status if boolean is passed
        } else {console.log("Invalid status. Must be true or false.");}
    };
}

//Task 2: Create Section class to manage books and availability
class Section {
    constructor(name,books) {
    this.name = name //The name of the section (e.g., “Fiction”, “Science”)
    this.books = [] //array of Book objects
}
addBook(book){
    this.books.push(book)
    }; //Adds a Book object to the books array.
    getAvailableBooks() {
        return this.books.reduce((total,book)=>
        total + book,0) //Returns the total number of available books in the section
    };
    listBooks() {
        return this.books.map(book=>{
            return {
                title: book.title,
                available: book.isAvailable ? "Available" : "Borrowed"
            };
        });
    }
}

//Task 3: Create a Patron Class
class Patron {
    constructor(name) {
        this.name = name; 
        this.borrowedBooks = [];}

        borrowBook(book) {
        if (book.isAvailable) {
                book.isAvailable = false; // Update the book's status 
                this.borrowedBooks.push(book); 
                console.log(`${this.name} borrowed ${book.title}`);
            } else {
                console.log(`Sorry, "${book.title}" is not available.`);
            }
        }
        returnBook(book) {
        const borrowedBook = this.borrowBook.find(b=>b===book);
        if (borrowedBook) {
            borrowedBook.isAvailable = true;
            this.borrowedBooks = this.borrowedBooks.filter(b => b !== book);
            console.log(`${this.name} returned ${book.title}`);}
    else {
        console.log(`${book.title} is not in the list of borrowed books`);
    };
};
}
