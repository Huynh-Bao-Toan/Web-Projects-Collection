const container = document.querySelector(".container");
const closeIcon = document.querySelector("#close");
const openIcon = document.querySelector("#open");

openIcon.addEventListener("click", () => {
  container.classList.add("showNav");
});

closeIcon.addEventListener("click", () => {
  container.classList.remove("showNav");
});
