let button = document.querySelector(".button");
let body = document.querySelector(".body");
let themeName = document.querySelector(".themeName");

button.addEventListener("click", () => {
  body.classList.toggle("dark");
  if (body.classList.contains("dark")) {
    themeName.innerText = "jasny";
  } else {
    themeName.innerText = "ciemny";
  }
});

button.addEventListener("click", () => {
  body.classList.toggle("dark");
  themeName.innerText = body.classList.contains("dark") ? "jasny" : "ciemny";
});
