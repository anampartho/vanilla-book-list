// Books Array
let books = [];

// Books Class
class Book {
  constructor(name, author, isbn, summary) {
    this.name = name;
    this.author = author;
    this.isbn = isbn;
    this.summary = summary;
    this.id = Date.now();
  }
}

// Books Div
let booksDiv = document.querySelector("#books");

// Form
let form = document.getElementById("add-book");
form.addEventListener("submit", formSubmitHandler);

// Delete Button EventListener
document.addEventListener(
  "click",
  function (e) {
    for (
      var target = e.target;
      target && target != this;
      target = target.parentNode
    ) {
      // loop parent nodes from the target to the delegation node
      if (target.matches(".delete-book")) {
        removeBook.call(target, e);
        break;
      }
    }
  },
  false
);

// Form Submit Handler
function formSubmitHandler(e) {
  e.preventDefault();
  let formData = new FormData(e.target);
  let bookName = formData.get("title");
  let bookAuthor = formData.get("author");
  let bookIsbn = formData.get("isbn");
  let bookSummary = formData.get("summary");

  addBook(bookName, bookAuthor, bookIsbn, bookSummary);

  form.reset();
}

// Add book
function addBook(name, author, isbn = undefined, summary = undefined) {
  let book = new Book(name, author, isbn, summary);
  books.push(book);

  updateLocalStorage();
  showBooks();
}

// Update Local Storage
function updateLocalStorage() {
  localStorage.setItem("books", JSON.stringify(books));
}

// Show Books
function showBooks() {
  let output = "";
  for (const book of books) {
    output += `
    <div class="column is-6 tile">
      <div class="card">
        <div class="card-content">
          <div class="media">
            <div class="media-content">
              <p class="title is-4">${book.name}</p>
              <p class="subtitle is-6">${book.author}</p>
            </div>
          </div>

          <div class="content">
            ${book.summary ? `<p>${book.summary}</p>` : ""}
            ${
              book.isbn
                ? `<p>ISBN: <span class="isbn">${book.isbn}</span></p>`
                : ""
            }
            <button class="button delete-book" title="Delete this book?" data-bookid="${
              book.id
            }"><span class="icon"><i class="fas fa-trash"></i></span></button>
          </div>
        </div>
      </div>
    </div>
    `;
  }

  booksDiv.innerHTML = output;
}

// Remove Book
function removeBook(e) {
  let bookId = Number(this.dataset.bookid);

  for (let i = books.length - 1; i >= 0; i--) {
    if (books[i].id === bookId) {
      books.splice(i, 1);
    }
  }
  updateLocalStorage();
  showBooks();
}

// Init Function
function init() {
  if (localStorage.getItem("books")) {
    books = JSON.parse(localStorage.getItem("books"));
  } else {
    localStorage.setItem("books", JSON.stringify(books));
  }

  showBooks();
}

init();
