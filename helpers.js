/* eslint-disable class-methods-use-this */

import Utils from './utils.js';

const utilsObj = new Utils();
const noBook = document.querySelector('#no-data');
/**
 * @object helperObj to hold all helper methods
 */
export default class Helper {
  /**
   * @function add - helper method for addition of books to localStorage
   * @param {string} title - The title of the book to be added
   * @param {string} author - The author of the book to be added
   */
  add(title, author) {
    const books = JSON.parse(localStorage.getItem('books')) || [];
    let id;
    if (books.length === 0) {
      id = 0;
    } else {
      id = books.length;
    }
    books.push({ id, title, author });
    localStorage.setItem('books', JSON.stringify(books));
    utilsObj.render(title, author, id);
    utilsObj.clearInput();
    document.querySelector('#title').focus();
    noBook.textContent = '';
  }

  /**
   * @function
   * @param {Object} e - The event object
   * @param {string} id - The string id of the button dataset
   */
  remove(e, id) {
    id = parseInt(id, 10);
    const stack = JSON.parse(localStorage.getItem('books'));
    const remStack = stack.filter((item) => item.id !== id);
    localStorage.setItem('books', JSON.stringify(remStack));
    e.currentTarget.parentElement.remove();
    if (remStack.length === 0) noBook.textContent = 'No book added yet';
  }

  /**
   * @function display - helper function to display books on load
   */
  display() {
    const stack = JSON.parse(localStorage.getItem('books'));
    if (stack.length > 0) {
      stack.forEach((item) => {
        const { id, title, author } = item;
        utilsObj.render(title, author, id);
        document.querySelector('#title').focus();
        noBook.textContent = '';
      });
    } else {
      noBook.textContent = 'No book added yet';
    }
    document.querySelectorAll('.remove').forEach((elem) => {
      elem.addEventListener('click', (e) => {
        this.remove(e, e.currentTarget.dataset.id);
      });
    });
  }
}
