import helperObj from "./helpers.js";

helperObj.display();

const addBtn = document.querySelector("#add-btn");

addBtn.addEventListener("click", (e) => {
  let title = document.querySelector("#title").value;
  let author = document.querySelector("#author").value;
  if (title === "" || author === "") {
    alert("Please input a valid input");
  } else {
    add(title, author);
    clearInput();
  }
  document.querySelectorAll(".remove").forEach((elem) => {
    elem.addEventListener("click", (e) =>
      remove(e, e.currentTarget.dataset.id)
    );
  });
});
