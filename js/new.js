// Navbar Toggle
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active"); // Toggle 'active' class
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
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
};

function toggleText() {
    const hiddenText = document.querySelector('.hidden-text');
    const toggleText = document.querySelector('.toggle-text');

    if (hiddenText.style.display === 'none' || hiddenText.style.display === '') {
        hiddenText.style.display = 'block';
        toggleText.textContent = '... Read Less';
    } else {
        hiddenText.style.display = 'none';
        toggleText.textContent = '... Read More';
    }
}
