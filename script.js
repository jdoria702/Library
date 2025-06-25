const myLibrary = [];

// Book constructor
function Book(id, title, author, year, pageCount, hasRead) {
  this.id = id;
  this.title = title;
  this.author = author;
  this.year = year;
  this.pageCount = pageCount;
  this.hasRead = hasRead;
}

// Add book to array and return it
function addBookToLibrary(id, title, author, year, pageCount, hasRead) {
  const newBook = new Book(id, title, author, year, pageCount, hasRead);
  myLibrary.push(newBook);
  console.log(myLibrary);
  return newBook;
}

// Create and insert a new card into the DOM
function createCard(book) {
  const newCard = document.createElement("div");
  newCard.classList.add("card");
  newCard.dataset.id = book.id;

  newCard.innerHTML = `
    <div class="book_ID">
      <p>#${book.id.slice(0, 6)}</p>
    </div>
    <div class="book_title"><p>${book.title}</p></div>
    <div class="book_author"><p>${book.author}</p></div>
    <div class="book_year"><p>${book.year}</p></div>
    <div class="book_pageCount"><p>${book.pageCount} pages</p></div>
    <div class="book_hasRead">
      <p>Completed:</p>
      <input type="checkbox" class="checkmark" ${
        book.hasRead ? "checked" : ""
      } />
    </div>
    <button class="book_remove">X</button>
  `;

  // Remove handler
  newCard.querySelector(".book_remove").addEventListener("click", () => {
    const index = myLibrary.findIndex((b) => b.id === book.id);
    if (index !== -1) myLibrary.splice(index, 1);
    newCard.remove();
  });

  // Insert before the "add" card
  grid.insertBefore(newCard, document.getElementById("show-dialog"));
}

// --- DOM REFS ---
const dialog = document.getElementById("dialog");
const showBtn = document.getElementById("show-dialog");
const closeBtn = document.querySelector(".close");
const form = dialog.querySelector("form");
const grid = document.querySelector(".grid-container");

// Show dialog on + click
showBtn.addEventListener("click", () => {
  dialog.showModal();
});

// Close dialog on Cancel click
closeBtn.addEventListener("click", () => {
  dialog.close();
});

// Handle form submission
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const title = form.title.value;
  const author = form.author.value;
  const year = form.year.value;
  const pageCount = form.page_count.value;
  const completed = form.completion_status.value === "true";

  const book = addBookToLibrary(
    crypto.randomUUID(),
    title,
    author,
    year,
    pageCount,
    completed
  );
  createCard(book);

  form.reset();
  dialog.close();
});

// --- Initial Demo Books ---
createCard(
  addBookToLibrary(crypto.randomUUID(), "Book A", "Author A", "2025", "5", true)
);
createCard(
  addBookToLibrary(
    crypto.randomUUID(),
    "Book B",
    "Author B",
    "2024",
    "55",
    false
  )
);
createCard(
  addBookToLibrary(
    crypto.randomUUID(),
    "Book C",
    "Author C",
    "2023",
    "555",
    true
  )
);
