document.addEventListener("DOMContentLoaded", function () {
    const contactButton = document.querySelector("button[onclick='openContactForm()']");
    const contactForm = document.getElementById("contactForm");
    const closeButton = document.querySelector(".close");

    function openContactForm() {
        contactForm.style.display = "flex";
        contactForm.classList.add("fade-in");
    }

    function closeContactForm() {
        contactForm.classList.add("fade-out");
        setTimeout(() => {
            contactForm.style.display = "none";
            contactForm.classList.remove("fade-in", "fade-out");
        }, 300);
    }

    contactButton.addEventListener("click", openContactForm);
    closeButton.addEventListener("click", closeContactForm);

    window.addEventListener("click", function (event) {
        if (event.target === contactForm) {
            closeContactForm();
        }
    });

    // Add animation when scrolling
    const animatedSections = document.querySelectorAll(".animated-section");
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("fade-in");
            }
        });
    }, { threshold: 0.2 });

    animatedSections.forEach(section => observer.observe(section));

    // Make projects clickable
    const projects = [
        { title: "Support Ticket System Automation", url: "https://ticketsystem.com/" },
        { title: "Automated System Backup Script", url: "https://www.hugedomains.com/domain_profile.cfm?d=backupscript.com" },
        { title: "Inventory Management System", url: "https://inventory.com/" }
    ];

    document.querySelectorAll(".project-card").forEach((card, index) => {
        card.addEventListener("click", () => {
            window.open(projects[index].url, "_blank");
        });
    });
});
