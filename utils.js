/* eslint-disable import/prefer-default-export */

/**
 * @object utilsObj to hold all utils methods
 */
export class Utils {
	constructor(title, author, id) {
		this.title = title;
		this.author = author;
		this.id = id;
	}

	/**
	 * @function displayHTML
	 * @param {string} title - The title of the book to be added
	 * @param {string} author - The author of the book to be added
	 * @param {number} id - The id assigned to the button
	 * @returns - The HTML structure of each book component
	 */
	displayHTML() {
		return `
  <li class="book" style="list-style:none;">
    <p>${this.title}</p>
    <p>${this.author}</p>
    <button class="remove" data-id=${this.id}>Remove</button>
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
render (title, author, id) {
    document.querySelector('#lists').insertAdjacentHTML('beforeend', this.displayHTML(title, author, id));
}

	/**
	 * @function clearInput - helper function to clear inputs on add
	 */
	clearInput() {
		document.querySelector('#title').value = '';
		document.querySelector('#author').value = '';
	}
}
