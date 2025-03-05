document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");
    const nameField = document.getElementById("name");
    const emailField = document.getElementById("email");
    const phoneField = document.getElementById("phone");
    const subjectField = document.getElementById("subject");
    const messageField = document.getElementById("message");

    // Add real-time validation listeners
    nameField.addEventListener("input", () => validateName());
    emailField.addEventListener("input", () => validateEmail());
    phoneField.addEventListener("input", () => validatePhone());
    subjectField.addEventListener("input", () => validateSubject());
    messageField.addEventListener("input", () => validateMessage());

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent default form submission

        if (validateForm()) {
            alert("Form submitted successfully!");
            form.submit(); // Allow form submission after validation
        }
    });

    // Highlight active nav link on scroll
    window.addEventListener("scroll", highlightNav);
});

// Function to highlight active nav link
function highlightNav() {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-link");

    let currentSection = "";

    sections.forEach((section) => {
        const sectionTop = section.offsetTop - 50;
        if (window.scrollY >= sectionTop) {
            currentSection = section.getAttribute("id");
        }
    });

    navLinks.forEach((link) => {
        link.classList.remove("active");
        if (link.getAttribute("href").includes(currentSection)) {
            link.classList.add("active");
        }
    });
}

// Validation Functions
function validateForm() {
    let isValid = true;
    
    if (!validateName()) isValid = false;
    if (!validateEmail()) isValid = false;
    if (!validatePhone()) isValid = false;
    if (!validateSubject()) isValid = false;
    if (!validateMessage()) isValid = false;

    return isValid;
}

function validateName() {
    let name = document.getElementById("name").value.trim();
    let error = document.getElementById("nameError");

    if (name === "") {
        error.innerText = "Name is required";
        return false;
    } else {
        error.innerText = "";
        return true;
    }
}

function validateEmail() {
    let email = document.getElementById("email").value.trim();
    let error = document.getElementById("emailError");
    let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (email === "") {
        error.innerText = "Email is required";
        return false;
    } else if (!email.match(emailPattern)) {
        error.innerText = "Enter a valid email (example@domain.com)";
        return false;
    } else {
        error.innerText = "";
        return true;
    }
}

function validatePhone() {
    let phone = document.getElementById("phone").value.trim();
    let error = document.getElementById("phoneError");
    let phonePattern = /^[0-9]{10}$/;

    if (!phone.match(phonePattern)) {
        error.innerText = "Enter a valid 10-digit phone number";
        return false;
    } else {
        error.innerText = "";
        return true;
    }
}

function validateSubject() {
    let subject = document.getElementById("subject").value.trim();
    let error = document.getElementById("subjectError");

    if (subject === "") {
        error.innerText = "Subject is required";
        return false;
    } else {
        error.innerText = "";
        return true;
    }
}

function validateMessage() {
    let message = document.getElementById("message").value.trim();
    let error = document.getElementById("messageError");

    if (message === "") {
        error.innerText = "Message cannot be empty";
        return false;
    } else {
        error.innerText = "";
        return true;
    }
}
