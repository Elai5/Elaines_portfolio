/** @format */

// Navbar Toggle
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active"); // Toggle 'active' class
});
// Close nav on link click (mobile)
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
});

// Test Section Toggle
const btn = document.getElementById("btn");
const cancel = document.getElementById("cancel");

// Open Modal
function openModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.style.display = "flex";
  }
}

// Close Modal
function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  if (modal) {
    modal.style.display = "none";
  }
}

// Close Modal on Outside Click
window.onclick = function (event) {
  const modals = document.querySelectorAll(".modal");
  modals.forEach((modal) => {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
};

function toggleText() {
  const hiddenText = document.querySelector(".hidden-text");
  const toggleText = document.querySelector(".toggle-text");

  if (hiddenText.style.display === "none" || hiddenText.style.display === "") {
    hiddenText.style.display = "block";
    toggleText.textContent = "... Read Less";
  } else {
    hiddenText.style.display = "none";
    toggleText.textContent = "... Read More";
  }
}
const form = document.getElementById("contactForm");

form.addEventListener("submit", async function (e) {
  e.preventDefault(); // Prevent default submit

  const formData = new FormData(form);

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    if (response.ok) {
      Toastify({
        text: "✅ Message sent successfully!",
        duration: 3000,
        gravity: "bottom", // or "top"
        position: "right",
        backgroundColor: "#28a745",
      }).showToast();

      form.reset(); // Reset the form
    } else {
      Toastify({
        text: "❌ Something went wrong. Try again.",
        duration: 3000,
        gravity: "bottom",
        position: "right",
        backgroundColor: "#dc3545",
      }).showToast();
    }
  } catch (error) {
    Toastify({
      text: "⚠️ Network error. Check connection.",
      duration: 3000,
      gravity: "bottom",
      position: "right",
      backgroundColor: "#ffc107",
    }).showToast();
  }
});
