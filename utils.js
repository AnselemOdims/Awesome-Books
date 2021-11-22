export const displayHTML = (title, author, id) => `
  <li class="book" style="list-style:none;">
    <p>${title}</p>
    <p>${author}</p>
    <button class="remove" data-id=${id}>Remove</button>
    <hr>
  </li>
  `;