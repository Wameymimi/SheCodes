window.addEventListener("load", addlisteners);

function buy() {
  let name = prompt("What is your name");
  let email = prompt("What is your email");
}

let buyGreek = document.querySelector("button");
buyGreek.addEventListener("click", buy);
