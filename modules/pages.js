const displayedBooks = document.querySelector('.list');
const addBook = document.querySelector('.add');
const contact = document.querySelector('.contact');
const listPage = document.querySelector('.list-page');
const addPage = document.querySelector('.add-page');
const contactPage = document.querySelector('.contact-page');
const navHeading = document.querySelector('.nav-heading');

export const addBooksPage = () => {
  addPage.addEventListener('click', (e) => {
    e.preventDefault();
    addBook.style.display = 'block';
    displayedBooks.style.display = 'none';
    contact.style.display = 'none';
    addPage.classList.add('active');
    listPage.classList.remove('active');
    contactPage.classList.remove('active');
  });
};

export const listBooksPage = () => {
  listPage.addEventListener('click', (e) => {
    e.preventDefault();
    displayedBooks.style.display = 'block';
    addBook.style.display = 'none';
    contact.style.display = 'none';
    listPage.classList.add('active');
    addPage.classList.remove('active');
    contactPage.classList.remove('active');
  });
};

export const navBooksHeading = () => {
  navHeading.addEventListener('click', (e) => {
    e.preventDefault();
    displayedBooks.style.display = 'block';
    addBook.style.display = 'none';
    contact.style.display = 'none';
    listPage.classList.add('active');
    addPage.classList.remove('active');
    contactPage.classList.remove('active');
  });
};

export const contactBooksPage = () => {
  contactPage.addEventListener('click', (e) => {
    e.preventDefault();
    contact.style.display = 'block';
    displayedBooks.style.display = 'none';
    addBook.style.display = 'none';
    contactPage.classList.add('active');
    listPage.classList.remove('active');
    addPage.classList.remove('active');
  });
};
