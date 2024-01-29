window.addEventListener("click", (e) => {
    e.preventDefault();
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
    const modal = document.querySelector(".modal");

    btnModal.addEventListener("click", showModal);
    hideModal.addEventListener("click", hideModal);

    function showModal() {}

    function hideModal() {}

    // *** modal ***
});