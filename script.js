document.addEventListener("DOMContentLoaded", function () {
    const contactButton = document.querySelector("button[onclick='openContactForm()']");
    const contactForm = document.getElementById("contactForm");
    const closeButton = document.querySelector(".close");

    contactButton.addEventListener("click", function () {
        contactForm.style.display = "block";
    });

    closeButton.addEventListener("click", function () {
        contactForm.style.display = "none";
    });

    window.addEventListener("click", function (event) {
        if (event.target === contactForm) {
            contactForm.style.display = "none";
        }
    });

    document.querySelectorAll(".card").forEach(card => {
        card.addEventListener("mouseover", () => {
            card.style.transform = "scale(1.05)";
            card.style.transition = "transform 0.3s ease-in-out";
        });
        card.addEventListener("mouseout", () => {
            card.style.transform = "scale(1)";
        });
    });

    let lastScrollTop = 0;
    window.addEventListener("scroll", function () {
        let navbar = document.querySelector(".navbar");
        let st = window.pageYOffset || document.documentElement.scrollTop;
        if (st > lastScrollTop) {
            navbar.style.top = "-60px";
        } else {
            navbar.style.top = "0";
        }
        lastScrollTop = st;
    });
});
