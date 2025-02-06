

window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});


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
            }, 20); 
        });
    };

    const handleScroll = () => {
        const statsSection = document.querySelector(".stats");
        const sectionPosition = statsSection.getBoundingClientRect().top;
        const screenPosition = window.innerHeight;

        if (sectionPosition < screenPosition) {
            animateNumbers();
            window.removeEventListener("scroll", handleScroll); 
        }
    };

    window.addEventListener("scroll", handleScroll);
});
