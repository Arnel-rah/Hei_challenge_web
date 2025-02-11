

// GESTION DU SCROLL POUR LA NAVBAR
window.addEventListener("scroll", () => {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

// ANIMATION DES NOMBRES STATISTIQUES
document.addEventListener("DOMContentLoaded", () => {
    const statNumbers = document.querySelectorAll(".stat-number");

    const animateNumbers = () => {
        statNumbers.forEach((number) => {
            const targetValue = +number.dataset.value;
            let currentValue = 0;
            const interval = setInterval(() => {
                currentValue += Math.ceil(targetValue / 100);
                number.textContent = currentValue;
                if (currentValue >= targetValue) {
                    number.textContent = targetValue;
                    clearInterval(interval);
                }
            }, 100);
        });
    };
    const handleScroll = () => {
        const statsSection = document.querySelector(".stats");
        if (statsSection) {
            const sectionPosition = statsSection.getBoundingClientRect().top;
            const screenPosition = window.innerHeight;
            if (sectionPosition < screenPosition) {
                animateNumbers();
                window.removeEventListener("scroll", handleScroll);
            }
        }
    };

    window.addEventListener("scroll", handleScroll);
});

// ANIMATION DES SECTIONS AU SCROLL
window.addEventListener("scroll", () => {
    let sections = document.querySelectorAll(".recommend-section, .top-destination, .reservation-section");
    sections.forEach(section => {
        let position = section.getBoundingClientRect().top;
        let screenHeight = window.innerHeight;

        if (position < screenHeight * 0.8) {
            section.classList.add("show-animate");
        } else {
            section.classList.remove("show-animate");
        }
    });
});

// FONCTION POUR SCROLLER UNIQUEMENT VERS LA RESERVATION
function scrollToReservation() {
    const section = document.getElementById("reservation");

    if (section) {
        section.classList.add("show-animate");
        const offset = section.getBoundingClientRect().top + window.scrollY;
        const navbar = document.querySelector(".navbar");
        const navbarHeight = navbar ? navbar.offsetHeight : 0;
        window.scrollTo({
            top: offset - navbarHeight - 10, 
            behavior: "smooth"
        });
    } 
}

// AJOUT DE L'EVENEMENT SUR LE BOUTON RESERVATION APRES CHARGEMENT DU DOM
document.addEventListener("DOMContentLoaded", () => {
    const reservationButton = document.querySelector(".reservation-btn");
    if (reservationButton) {
        reservationButton.addEventListener("click", scrollToReservation);
    } else {
        console.error("tsy hita ilay Bouton !");
    }
});

// CONFIRMATION DU FORMULAIRE DE RÉSERVATION
function showConfirmation() {
    const form = document.querySelector(".reservation-form");
    if (form) {
        const confirmationMessage = form.querySelector(".confirmation-message");
        form.classList.add("show-message");

        setTimeout(() => {
            form.classList.remove("show-message");
        }, 3000);

        form.reset();
    }
}

// GESTION DU FORMULAIRE D'INSCRIPTION A LA NEWSLETTER
document.addEventListener("DOMContentLoaded",  () => {
    const form = document.getElementById("newsletterForm");
    const message = document.getElementById("formMessage");
    if (form && message) {
        form.addEventListener("submit",  (event) => {
            event.preventDefault();
            message.textContent = "Thank you for subscribing!";
            message.classList.add("show");
            form.reset();
            setTimeout(() => {
                message.classList.remove("show");
            }, 3000);
        });
    }
});

document.addEventListener("DOMContentLoaded", () => {
    const burgerMenu = document.querySelector(".burger-menu");
    const navLinks = document.querySelector(".nav-links");

    burgerMenu.addEventListener("click", () =>  {
        navLinks.classList.toggle("active");
        burgerMenu.classList.toggle("open");

        const icon = burgerMenu.querySelector("i");
        if (burgerMenu.classList.contains("open")) {
            icon.classList.remove("fa-bars");
            icon.classList.add("fa-times"); 
        } else {
            icon.classList.remove("fa-times");
            icon.classList.add("fa-bars");
        }
    });

    document.addEventListener("click",  (event) => {
        if (!navLinks.contains(event.target) && !burgerMenu.contains(event.target)) {
            navLinks.classList.remove("active");
            burgerMenu.classList.remove("open");
            burgerMenu.querySelector("i").classList.remove("fa-times");
            burgerMenu.querySelector("i").classList.add("fa-bars");
        }
    });
});
