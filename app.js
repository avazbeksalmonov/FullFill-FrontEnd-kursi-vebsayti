// navbar
const openBtn = document.getElementById("open-btn"),
  closeBtn = document.getElementById("close-btn");
const navbar = document.querySelector(".navbar");
const nav = document.querySelector("nav");

openBtn.addEventListener("click", () => {
  navbar.classList.add("open");
});
closeBtn.addEventListener("click", () => {
  navbar.classList.remove("open");
});
// navbar

// *** modal ***
const btnModal = document.querySelector(".btn-modal");
const hideModal = document.querySelector(".btn-hide");
const modal = document.querySelector(".modal-i");
const btnStart = document.querySelector(".btn-start");

btnStart.addEventListener("click", () => {
  alert("Kechirasiz,darslarga qabul hali boshlanmadi");
});
btnModal.addEventListener("click", () => {
  modal.style.display = "block";
});
hideModal.addEventListener("click", () => {
  modal.style.display = "none";
});

// *** modal ***
