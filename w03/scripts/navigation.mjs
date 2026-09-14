// navigation menu 

export function setupNavigation() {
    const btnMenu = document.querySelector("#menu");
    const navLinks = document.querySelector(".navigation");

    if (btnMenu && navLinks) {
        btnMenu.addEventListener("click", () => {
            btnMenu.classList.toggle("open");
            navLinks.classList.toggle("open");
        });
    }
}