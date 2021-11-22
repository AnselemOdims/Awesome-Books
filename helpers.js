import utilsObj from './utils.js';

const helperObj = {
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
  },

  remove(e, id) {
    id = parseInt(id, 10);
    const stack = JSON.parse(localStorage.getItem('books'));
    const remStack = stack.filter((item) => item.id !== id);
    localStorage.setItem('books', JSON.stringify(remStack));
    e.currentTarget.parentElement.remove();
  },
};

module.exports = helperObj;