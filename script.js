// ===================================
// FRESHROUTE WEBSITE JAVASCRIPT
// ===================================


// MOBILE NAVIGATION

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});


// CLOSE MOBILE MENU WHEN A LINK IS CLICKED

const navigationLinks = document.querySelectorAll(".nav-links a");

navigationLinks.forEach((link) => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});


// AUTOMATIC COPYRIGHT YEAR

const yearElement = document.getElementById("year");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}


// SCROLL REVEAL ANIMATION

const revealElements = document.querySelectorAll(
    ".problem-card, .step-card, .business-card, .milestone, .gtm-card, .team-role"
);

const revealObserver = new IntersectionObserver(
    (entries, observer) => {
        entries.forEach((entry) => {

            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                observer.unobserve(entry.target);

            }

        });
    },
    {
        threshold: 0.12
    }
);

revealElements.forEach((element) => {
    element.classList.add("reveal");
    revealObserver.observe(element);
});


// NAVIGATION SCROLL EFFECT

window.addEventListener("scroll", () => {

    const header = document.querySelector(".header");

    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }

});