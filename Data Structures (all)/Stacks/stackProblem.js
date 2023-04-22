// You have to keep a track of 6 latest books issued by a student. Solve this using a stack where each issue contains the following data points : 1. ID no of student, 2. name of book, 3. Issue date

// Print the stack to display 6 latest books

let books = [];

function storeBook(book) {
  books.push(book);
}

function displayBooks() {
  for (let index = books.length - 1; index > -1; index--) {
    console.log(books[index]);
  }
}

storeBook({ id: 100, nameOfBook: "Narnia", issueDate: new Date() });
storeBook({ id: 200, nameOfBook: "Harry Potter", issueDate: new Date() });
storeBook({ id: 100, nameOfBook: "The 5am club", issueDate: new Date() });
storeBook({ id: 200, nameOfBook: "Sherlock Holmes", issueDate: new Date() });
storeBook({ id: 200, nameOfBook: "The Jungle Book", issueDate: new Date() });
storeBook({ id: 100, nameOfBook: "Jurassic Park", issueDate: new Date() });
displayBooks();
