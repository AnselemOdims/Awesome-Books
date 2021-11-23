/* eslint-disable import/prefer-default-export */
import { Utils } from "./utils.js";

const utilsObj = new Utils();
/**
 * @object helperObj to hold all helper methods
 */
export class Helper {
  constructor() {}

  /**
   * @function add - helper method for addition of books to localStorage
   * @param {string} title - The title of the book to be added
   * @param {string} author - The author of the book to be added
   */
  add(title, author) {
    const books = JSON.parse(localStorage.getItem("books")) || [];
    let id;
    if (books.length === 0) {
      id = 0;
    } else {
      id = books.length;
    }
    books.push({ id, title, author });
    localStorage.setItem("books", JSON.stringify(books));
    utilsObj.render(title, author, id);
    utilsObj.clearInput();
  }

  /**
   * @function
   * @param {Object} e - The event object
   * @param {string} id - The string id of the button dataset
   */
  remove(e, id) {
    id = parseInt(id, 10);
    const stack = JSON.parse(localStorage.getItem("books"));
    const remStack = stack.filter((item) => item.id !== id);
    localStorage.setItem("books", JSON.stringify(remStack));
    e.currentTarget.parentElement.remove();
  }

  /**
   * @function display - helper function to display books on load
   */
  display() {
    const stack = JSON.parse(localStorage.getItem("books"));
    if (stack) {
      stack.forEach((item) => {
        const { id, title, author } = item;
        if (stack.length > 0) utilsObj.render(title, author, id);
      });
    }
    document.querySelectorAll(".remove").forEach((elem) => {
      elem.addEventListener("click", (e) => {
        this.remove(e, e.currentTarget.dataset.id);
      });
    });
  }
}
