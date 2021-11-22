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

  display() {
    const stack = JSON.parse(localStorage.getItem('books'));
    if (stack) {
      stack.forEach((item) => {
        const { id, title, author } = item;
        if (stack.length > 0) utilsObj.render(title, author, id);
      });
    }
    document.querySelectorAll('.remove').forEach((elem) => {
      elem.addEventListener('click', (e) => {
        this.remove(e, e.currentTarget.dataset.id);
      });
    });
  },
};

module.exports = helperObj;