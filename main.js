import Helper from './helpers.js';

const helperObj = new Helper();

// display the books in the localStorage on load
helperObj.display();

// Event listener for the addition to localStorage and rendering of HTML to page
document.querySelector('#add-btn').addEventListener('click', () => {
  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;
  if (title === '' || author === '') return;
  helperObj.add(title, author);
  document.querySelectorAll('.remove').forEach((elem) => {
    elem.addEventListener('click', (e) => helperObj.remove(e, e.currentTarget.dataset.id));
  });
});
