const myLibrary = [];

function Book(id, title, author, year, pageCount, hasRead) {
  this.id = id;
  this.title = title;
  this.author = author;
  this.year = year;
  this.pageCount = pageCount;
  this.hasRead = hasRead;
}

function addBookToLibrary(id, title, author, year, pageCount, hasRead) {
  newBook = new Book(id, title, author, year, pageCount, hasRead);
  myLibrary.push(newBook);
}

function displayLibrary() {}

addBookToLibrary(crypto.randomUUID, "A", "B", "2025", "5", true);
addBookToLibrary(crypto.randomUUID, "C", "D", "2024", "55", false);
addBookToLibrary(crypto.randomUUID, "E", "F", "2023", "555", true);
console.log(myLibrary);

const showBtn = document.getElementById("show-dialog");

showBtn.addEventListener("click", () => {
  dialog.showModal();
});
