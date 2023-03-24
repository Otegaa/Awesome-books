const date = document.querySelector('.date');
const time = document.querySelector('.time');
const dateAndTime = document.querySelector('.date-input');
const displayedBooks = document.querySelector('.list');
const addBook = document.querySelector('.add');
const contact = document.querySelector('.contact');
const listPage = document.querySelector('.list-page');
const addPage = document.querySelector('.add-page');
const contactPage = document.querySelector('.contact-page');
const navHeading = document.querySelector('.nav-heading');

class AwesomeBooks {
  constructor() {
    this.title = document.querySelector('.book-title');
    this.author = document.querySelector('.book-author');
    this.books = 'books';
    this.getStorage = JSON.parse(localStorage.getItem(this.books)) || [];
    this.bookSection = document.querySelector('.book-container');
    this.form = document.querySelector('.form');
    this.document = document;
  }

  displayBooks() {
    this.bookSection.innerHTML = '';
    if (this.getStorage.length === 0) {
      const msg = this.document.createElement('h3');
      msg.textContent = 'No books yet! Add some!';
      msg.classList.add('display-msg');
      this.bookSection.appendChild(msg);
    } else {
      this.getStorage.forEach((book) => {
        this.bookSection.innerHTML += `
        <div class="highlighted-books">
          <div class="added-book">
            <h3 class="added-book-item"> "${book.title}" by ${book.author}</h3>
          </div>
          <button class="remove-book" id = ${book.id}>Remove</button>
        </div>
    `;
      });
    }
  }

  setStorage() {
    localStorage.setItem(this.books, JSON.stringify(this.getStorage));
  }

  addBooks() {
    const book = {};
    const title = this.title.value;
    const author = this.author.value;
    const id = Math.floor(Math.random() * 10000000);
    book.id = id;
    book.title = title;
    book.author = author;

    if (title && author) {
      this.getStorage.push(book);
      this.setStorage();
      this.displayBooks();
    }

    this.title.value = '';
    this.author.value = '';
  }

  removeBooks(id) {
    this.getStorage = this.getStorage.filter((book) => book.id !== Number(id));
    this.displayBooks();
    this.setStorage();
  }

  getBooks() {
    this.form.addEventListener('submit', () => this.addBooks());
    this.displayBooks();
  }

  deleteBooks() {
    this.document.addEventListener('click', (e) => {
      const target = e.target.closest('.remove-book');
      if (!target) return;
      this.removeBooks(target.id);
    });
  }

  init() {
    this.getBooks();
    this.deleteBooks();
  }
}

const books = new AwesomeBooks();
books.init();

date.innerHTML = new Date().toDateString();
time.innerHTML = new Date().toLocaleTimeString();
dateAndTime.innerHTML = `${date.innerHTML}, ${time.innerHTML}`;

addBook.style.display = 'none';
contact.style.display = 'none';
listPage.classList.add('active');

listPage.addEventListener('click', (e) => {
  e.preventDefault();
  displayedBooks.style.display = 'block';
  addBook.style.display = 'none';
  contact.style.display = 'none';
  listPage.classList.add('active');
  addPage.classList.remove('active');
  contactPage.classList.remove('active');
});

addPage.addEventListener('click', (e) => {
  e.preventDefault();
  addBook.style.display = 'block';
  displayedBooks.style.display = 'none';
  contact.style.display = 'none';
  addPage.classList.add('active');
  listPage.classList.remove('active');
  contactPage.classList.remove('active');
});

contactPage.addEventListener('click', (e) => {
  e.preventDefault();
  contact.style.display = 'block';
  displayedBooks.style.display = 'none';
  addBook.style.display = 'none';
  contactPage.classList.add('active');
  listPage.classList.remove('active');
  addPage.classList.remove('active');
});

navHeading.addEventListener('click', (e) => {
  e.preventDefault();
  displayedBooks.style.display = 'block';
  addBook.style.display = 'none';
  contact.style.display = 'none';
  listPage.classList.add('active');
  addPage.classList.remove('active');
  contactPage.classList.remove('active');
});
