// Books Array
let books = [];

// Books Class
class Book {
  constructor(name, author, isbn, summary) {
    this.name = name;
    this.author = author;
    this.isbn = isbn;
    this.summary = summary;
  }
}

// Books Div
let booksDiv = document.querySelector("#books");

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
            <p>ISBN: <span class="isbn">${book.isbn}</span></p>
            <button class="button delete-book" title="Delete this book?"><span class="icon"><i class="fas fa-trash"></i></span></button>
          </div>
        </div>
      </div>
    </div>
    `;
  }

  booksDiv.innerHTML = output;
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
