// Biily

const revealElements = document.querySelectorAll(".scroll-reveal");

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }

    });

}, {
    threshold: 0.20
});

revealElements.forEach(element => {
    observer.observe(element);
});