"use strict";
window.addEventListener("load", initApp);

const newToDo = document.querySelector("#input-new-to-do");
const list = document.querySelector("#to-do-list");

function initApp() {
  document.querySelector("#btn-add-item").addEventListener("click", addToDo);
}

//   const listText = document.createElement("li");
//   const span = document.createElement("span");
//   const button = document.createElement("button");

//   span.textContent = newToDo.value;
//   button.textContent = "Delete";

//   listText.appendChild(span);
//   listText.appendChild(button);
//   list.appendChild(listText);

//   button.addEventListener("click", removeToDo);
// }

// // function removeToDo() {
// //   this.parentNode.remove();
// / }/

function addToDo() {
  const myHTML = /*html*/ `
<li> 
  <span>${newToDo.value}</span>
    <button>Delete</button>
 </li>
`;
  list.insertAdjacentHTML("beforeend", myHTML);

  list.querySelector("li:last-child button").addEventListener("click", removeToDo);
}

function removeToDo () {
    this.parentNode.remove();
}