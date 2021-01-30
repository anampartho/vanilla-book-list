// Books Array
let books = [
  {
    name: "The Godfather",
    author: "Mario Pujo",
    isbn: 9780330024570,
    id: 1611995696990,
    summary:
      "As Michael Corleone ages, he finds that being the head of the Corleone crime family isn't getting any easier. He wants his family out of the Mafia.",
  },
  {
    name: "রবীন্দ্রনাথ এখানে কখনও খেতে আসেননি",
    author: "মোহাম্মদ নাজিম উদ্দিন",
    isbn: 9789848729755,
    id: 1611995800557,
    summary:
      "মফশ্বল শহর সুন্দরপুর ছবির মতোই সুন্দর। প্রকৃতির শোভা ছাড়া উল্লেখযোগ্য কিছু নেই বললেই চলে কিন্তু সবাই জানে রবীন্দ্র এখানে কখনও খেতে আসেন নি! কেন আসেন নি তারচেয়েও বড় কথা কেন অনেকেই সেখানে ছুটে আসে! এক আগন্তুক এসে হাজির হলো সেই সুন্দরপুরে।",
  },
  {
    name: "The Da Vinci Code",
    author: "Dan Brown",
    isbn: 385504209,
    id: 1611995910256,
    summary:
      "A murder in Paris' Louvre Museum and cryptic clues in some of Leonardo da Vinci's most famous paintings lead to the discovery of a religious mystery. For 2,000 years a secret society closely guards information that -- should it come to light -- could rock the very foundations of Christianity.",
  },
  {
    name: "ইছামতি",
    author: "বিভূতিভূষণ বন্দ্যোপাধ্যায়",
    isbn: 9848261400,
    id: 1611996387586,
  },
  {
    name: "The Da Vinci Code",
    author: "Dan Brown",
    isbn: 385504209,
    id: 1611995910256,
    summary:
      "A murder in Paris' Louvre Museum and cryptic clues in some of Leonardo da Vinci's most famous paintings lead to the discovery of a religious mystery. For 2,000 years a secret society closely guards information that -- should it come to light -- could rock the very foundations of Christianity.",
  },
];

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
