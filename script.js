const bookSection = document.querySelector('.book-container');
const form = document.querySelector('.form');
const search = document.querySelector('.search');

let collection = [];

const awesomeBooks = () => {
  bookSection.innerHTML = '';
  collection.map((book) => {
    bookSection.innerHTML += `
      <div class="highlighted-books">
          <div class="added-book">
            <h3 class="added-book-title">${book.title}</h3>
            <h3 class="added-book-author">${book.author}</h3>
          </div>
          <button class="remove-book" onclick=removeBook(${book.id})>Remove</button>
          <hr />
        </div>
    `;
    return book;
  });
};

if (localStorage.books) {
  collection = JSON.parse(localStorage.getItem('books'));
}

const setStorage = () => {
  localStorage.setItem('books', JSON.stringify(collection));
};

const addBook = (e) => {
  e.preventDefault();
  const book = {};
  book.id = Math.floor(Math.random() * 10000000);
  book.title = document.querySelector('.book-title').value;
  book.author = document.querySelector('.book-author').value;

  if (book.title && book.author) {
    collection.push(book);
    setStorage();
    awesomeBooks();
  }

  document.querySelector('.book-title').value = '';
  document.querySelector('.book-author').value = '';
};

awesomeBooks();

form.addEventListener('submit', addBook);

const removeBook = (id) => {
  collection = collection.filter((item) => item.id !== id);
  awesomeBooks();
  setStorage();
};

search.addEventListener('click', removeBook);
