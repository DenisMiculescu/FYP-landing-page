document.addEventListener("DOMContentLoaded", () => {
    console.log("Receiptly Landing Page Loaded!");

    // Typing effect
    const text = "Your smart solution for managing pharmacy receipts";
    const target = document.querySelector(".hero p");
    let i = 0;
    target.textContent = "";
    function typeWriter() {
        if (i < text.length) {
            target.textContent += text.charAt(i);
            i++;
            setTimeout(typeWriter, 40);
        }
    }
    typeWriter();

    // Scroll fade-in observer
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("fade-in-visible");
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll(".fade-in").forEach(el => observer.observe(el));

    // Dark mode toggle
    document.getElementById("theme-toggle").addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");
        const icon = this.querySelector("i");
        icon.classList.toggle("fa-sun");
        icon.classList.toggle("fa-moon");
    });
});
