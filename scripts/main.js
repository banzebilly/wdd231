// ========== Mobile Menu ==========
const menuBtn = document.querySelector("#menu");
const navigationLinks = document.querySelector(".navigation");

if (menuBtn && navigationLinks) {
    menuBtn.addEventListener("click", () => {
        menuBtn.classList.toggle("open");
        navigationLinks.classList.toggle("open");
    });
}






const year = new Date().getFullYear();

document.querySelector("#currentyear").textContent = year;

document.querySelector("#lastModified").textContent =
    `Last Modified: ${document.lastModified}`;




 
