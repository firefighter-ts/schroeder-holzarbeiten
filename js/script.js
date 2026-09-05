// Sticky Navbar
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
    if (window.scrollY > 80) {
        navbar.classList.add("glass");
    } else {
        navbar.classList.remove("glass");
    }
});

// Fade-Up Animation
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, {
    threshold: 0.15
});

document.querySelectorAll("section, .project-card, .stat, .contact-box").forEach(el => {
    el.classList.add("fade-up");
    observer.observe(el);
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

// Aktiven Menüpunkt markieren
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

}); 
/* ==========================
   COOKIE BANNER
========================== */

const cookieBanner = document.getElementById("cookie-banner");
const acceptCookies = document.getElementById("acceptCookies");
const declineCookies = document.getElementById("declineCookies");

// Prüfen, ob bereits eine Entscheidung gespeichert wurde
if (localStorage.getItem("cookieConsent")) {
    cookieBanner.style.display = "none";
}

acceptCookies.addEventListener("click", () => {
    localStorage.setItem("cookieConsent", "accepted");
    cookieBanner.style.display = "none";
});

declineCookies.addEventListener("click", () => {
    localStorage.setItem("cookieConsent", "necessary");
    cookieBanner.style.display = "none";
}); 