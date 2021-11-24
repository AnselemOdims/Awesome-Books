// import { DateTime } from 'luxon';
import Helper from './helpers.js';

const helperObj = new Helper();

// display the books in the localStorage on load
helperObj.display();

// Event listener for the addition to localnow(M)L to page
document.querySelector('#add-btn').addEventListener('click', () => {
  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;
  if (title === '' || author === '') {
    document.querySelector('.error').innerText = 'Kindly make sure title and author are filled';
    return;
  }
  document.querySelector('.error').innerText = '';
  helperObj.add(title, author);
  document.querySelectorAll('.remove').forEach((elem) => {
    elem.addEventListener('click', (e) => helperObj.remove(e, e.currentTarget.dataset.id));
  });
});

// Handle single page functionality
document.querySelectorAll('.links').forEach((link) => {
  link.addEventListener('click', helperObj.navHandler);
});

setInterval(helperObj.dateHandler, 1000);
