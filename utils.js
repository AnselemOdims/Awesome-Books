const lists = document.querySelector('#lists');

const utilsObj = {

  displayHTML(title, author, id) {
    return `
  <li class="book" style="list-style:none;">
    <p>${title}</p>
    <p>${author}</p>
    <button class="remove" data-id=${id}>Remove</button>
    <hr>
  </li>
  `;
  },

  render(title, author, id) {
    lists.insertAdjacentHTML('beforeend', this.displayHTML(title, author, id));
  },

  clearInput() {
    document.querySelector('#title').value = '';
    document.querySelector('#author').value = '';
  },
};

module.exports = utilsObj;