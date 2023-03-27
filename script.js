import * as pages from './modules/pages.js';
import AwesomeBooks from './modules/books.js';
import { DateTime } from './modules/luxon.js';

// For the functionality.
const books = new AwesomeBooks();
books.init();

// Time and date implementation

const dateAndTime = document.querySelector('.date-input');
const addBook = document.querySelector('.add');
const contact = document.querySelector('.contact');
const listPage = document.querySelector('.list-page');

setInterval(() => {
  const now = DateTime.now();
  dateAndTime.innerHTML = now.toLocaleString(
    DateTime.DATETIME_MED_WITH_SECONDS,
  );
}, 1000);

// SPA implementation
addBook.style.display = 'none';
contact.style.display = 'none';
listPage.classList.add('active');

pages.listBooksPage();
pages.addBooksPage();
pages.contactBooksPage();
pages.navBooksHeading();
