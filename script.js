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
  