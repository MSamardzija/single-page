const open = document.getElementById("open");
const close = document.querySelectorAll(".close");
const modal = document.getElementById("modal_container");
const menuBtn = document.getElementById("menu-btn");
const headerCenter = document.querySelector(".header__center");

open.addEventListener("click", () => {
  modal.classList.add("show");
});

close.forEach((element) => {
  element.addEventListener("click", () => {
    modal.classList.remove("show");
  });
});

menuBtn.addEventListener("click", () => {
  if (headerCenter.style.display == "flex") headerCenter.style.display = "none";
  else headerCenter.style.display = "flex";
});
