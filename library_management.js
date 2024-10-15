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