const bookSection = document.querySelector('.book-container');
const form = document.querySelector('.form');

let collection = [];

const awesomeBooks = () => {
  collection.map((book) => {
    bookSection.innerHTML += `
      <div class="highlighted-books">
          <div class="added-book">
            <h3 class="added-book-title">${book.title}</h3>
            <h3 class="added-book-author">${book.author}</h3>
          </div>
          <button class="remove-book">Remove</button>
          <hr />
        </div>
    `;
    return book;
  });
};

if (localStorage.books) {
  collection = JSON.parse(localStorage.getItem('books'));
}

const addBook = (e) => {
  e.preventDefault();
  const book = {};
  book.title = document.querySelector('.book-title').value;
  book.author = document.querySelector('.book-author').value;

  if (book.title && book.author) {
    collection.push(book);
    localStorage.setItem('books', JSON.stringify(collection));
    awesomeBooks();
  }

  document.querySelector('.book-title').value = '';
  document.querySelector('.book-author').value = '';
};

form.addEventListener('submit', addBook);

// const removeBook = (book) => {
//   collection.filter((item) => item !== book);
//   localStorage.setItem("books", JSON.stringify(collection));
// };

awesomeBooks();
