import utilsObj from "../utils.js";

const helperObj = {
  add(title, author) {
    let books = JSON.parse(localStorage.getItem("books")) || [];
    let id;
    if (books.length === 0) {
      id = 0;
    } else {
      id = books.length;
    }
    books.push({ id, title, author });
    localStorage.setItem("books", JSON.stringify(books));
    render(title, author, id);
  },
};
