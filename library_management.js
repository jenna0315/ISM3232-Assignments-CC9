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
    