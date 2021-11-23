/* eslint-disable class-methods-use-this */
/**
 * @object utilsObj to hold all utils methods
 */
export default class Utils {
  /**
   * @function displayHTML
   * @param {string} title - The title of the book to be added
   * @param {string} author - The author of the book to be added
   * @param {number} id - The id assigned to the button
   * @returns - The HTML structure of each book component
   */
  displayHTML(title, author, id) {
    return `
      <li class="book" style="list-style:none;">
        <p>${title}</p>
        <p>${author}</p>
        <button class="remove" data-id=${id}>Remove</button>
        <hr>
      </li>
    `;
  }

  /**
   * @function render - helper function to render HTML on page
   * @param {string} title - The title of the book to be added
   * @param {string} author - The author of the book to be added
   * @param {number} id - The id assigned to the button
   */
  render(title, author, id) {
    document
      .querySelector('#lists')
      .insertAdjacentHTML('beforeend', this.displayHTML(title, author, id));
  }

  /**
   * @function clearInput - helper function to clear inputs on add
   */
  clearInput() {
    document.querySelector('#title').value = '';
    document.querySelector('#author').value = '';
  }
}
