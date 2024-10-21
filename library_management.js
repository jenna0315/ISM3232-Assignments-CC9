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
        return this.books.filter(book => book.isAvailable).length; 
    }
    listBooks() {
        return this.books.map(book=>{
            return {
                Title: book.title,
                Availability: book.isAvailable ? "Available" : "Borrowed"
            };
        });
    }
    //Task 5: calculateTotalBooksAvailable
    calculateTotalBooksAvailable() {
        return this.books.reduce((total, book) => {
            return total + (book.isAvailable ? 1 : 0);
        }, 0);
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
        const borrowedBook = this.borrowedBooks.find(b=>b===book);
        if (borrowedBook) {
            borrowedBook.isAvailable = true;
            this.borrowedBooks = this.borrowedBooks.filter(b => b !== book);
            console.log(`${this.name} returned ${book.title}`);}
    else {
        console.log(`${book.title} is not in the list of borrowed books`);
    };
};
}

//Task 4: Create a VIPPatron Class that Inherits from Patron
class VIPPatron extends Patron {
    constructor(name) {
        super(name);
        this.priority = true;
    }

    borrowBook(book) {
        if (book.isAvailable) {
            book.isAvailable = false; 
            this.borrowedBooks.push(book); 
            console.log(`${this.name} VIP borrowed ${book.title}`);
        } else {
            console.log(`Sorry! ${book.title} is not available at this time.`);
        }
    }
}

//Task 5: Calculate total available books in the section

//Task 6: Create and Manage Sections and Patrons
//Create sections
const fictionSection = new Section("Fiction");
const scienceSection = new Section("Science");

//Create books
const book1 = new Book("Pride and Prejudice", "Jane Austen", "123456789");
const book2 = new Book("The Catcher in the Rye", "J.D. Salinger", "234567891");
const book3 = new Book("A Brief History of Time", "Stephen Hawking", "345678912");
const book4 = new Book("The Selfish Gene", "Richard Dawkins", "456789123");

//Add books to sections
fictionSection.addBook(book1);
fictionSection.addBook(book2);
scienceSection.addBook(book3);
scienceSection.addBook(book4);

//Create patrons
const regularPatron = new Patron("Bob");
const vipPatron = new VIPPatron("Alice");

//List books in each section
console.log("Books in Fiction Section:", fictionSection.listBooks());
console.log("Books in Science Section:", scienceSection.listBooks());

//Patrons borrow books
regularPatron.borrowBook(book1); 
vipPatron.borrowBook(book1); 
vipPatron.borrowBook(book3); 

//Calculate available books in each section
console.log(`Total available books in ${fictionSection.name}: ${fictionSection.calculateTotalBooksAvailable()}`); 
console.log(`Total available books in ${scienceSection.name}: ${scienceSection.calculateTotalBooksAvailable()}`); 

//Patrons return books
regularPatron.returnBook(book1); 
vipPatron.returnBook(book3); 

//Calculate available books in each section
console.log(`Total available books in ${fictionSection.name}: ${fictionSection.calculateTotalBooksAvailable()}`); 
console.log(`Total available books in ${scienceSection.name}: ${scienceSection.calculateTotalBooksAvailable()}`); 