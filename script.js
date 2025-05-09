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
  });
  
// Screenshot lightbox
const lightboxModal = document.getElementById("lightboxModal");
const lightboxImg = document.getElementById("lightboxImg");
const lightboxClose = document.getElementById("lightboxClose");

document.querySelectorAll(".screenshot-thumbnail").forEach(img => {
  img.addEventListener("click", () => {
    lightboxImg.src = img.src;
    lightboxModal.style.display = "flex";
  });
});

lightboxClose.addEventListener("click", () => {
  lightboxModal.style.display = "none";
});

window.addEventListener("click", e => {
  if (e.target === lightboxModal) {
    lightboxModal.style.display = "none";
  }
});

// Scroll to top functionality
const scrollTopBtn = document.getElementById("scrollTopBtn");

window.onscroll = function () {
  scrollTopBtn.style.display = window.scrollY > 200 ? "block" : "none";
};

scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});


// Reveal sections on scroll
const reveals = document.querySelectorAll('.reveal');

function revealOnScroll() {
  reveals.forEach(el => {
    const windowHeight = window.innerHeight;
    const elementTop = el.getBoundingClientRect().top;
    const revealPoint = 100;

    if (elementTop < windowHeight - revealPoint) {
      el.classList.add('active');
    }
  });
}

window.addEventListener('scroll', revealOnScroll);
revealOnScroll(); // Trigger on load for visible elements
