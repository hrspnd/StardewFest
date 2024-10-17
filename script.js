document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        // Get the ID of the target section
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        // Get the height of the navbar
        const navbarHeight = document.querySelector('.navbar').offsetHeight;

        // Set extra padding (adjust this value for more space)
        const extraPadding = 25; // value is in px

        // Scroll to the target section, accounting for navbar height and extra padding
        window.scrollTo({
            top: targetElement.offsetTop - navbarHeight - extraPadding,
            behavior: 'smooth'
        });
    });
});

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// JavaScript to toggle mobile menu
document.getElementById('burger').addEventListener('click', () => {
    const navLinks = document.querySelector('.navbar ul'); // Select the correct element
    navLinks.classList.toggle('active'); // Toggle the 'active' class
});

const audio = document.getElementById("myAudio");
const playBtn = document.getElementById("playBtn");
const pauseBtn = document.getElementById("pauseBtn");
const progressBar = document.querySelector(".progress");
const progressContainer = document.querySelector(".progress-container");

// Play and pause functionality
playBtn.addEventListener("click", () => {
    audio.play();
});

pauseBtn.addEventListener("click", () => {
    audio.pause();
});

// Update the progress bar as the audio plays
audio.addEventListener("timeupdate", () => {
    const progress = (audio.currentTime / audio.duration) * 100;
    progressBar.style.width = progress + "%";
});

// Make the progress bar clickable to seek through the audio
progressContainer.addEventListener("click", (e) => {
    // Calculate where the user clicked as a percentage of the container width
    const rect = progressContainer.getBoundingClientRect();
    const offsetX = e.clientX - rect.left;
    const newTime = (offsetX / rect.width) * audio.duration;

    // Update the audio current time
    audio.currentTime = newTime;
});

document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('contactForm');
    const resetButton = document.getElementById('resetButton');
    const submitButton = document.querySelector('.submit');

    // Initial reset button color
    resetButton.style.backgroundColor = '#ecb27b';

    // Function to check if form has any input
    function checkForm() {
        const isFormFilled = checkFormFilled(form);
        if (isFormFilled) {
            resetButton.style.backgroundColor = getComputedStyle(submitButton).backgroundColor; // Match submit button color
        } else {
            resetButton.style.backgroundColor = '#ecb27b'; // Default color when form is empty
        }
    }

    // Check if any input in the form is filled
    function checkFormFilled(form) {
        return Array.from(form.elements).some(input => input.value.trim() !== '');
    }

    // Listen for input changes in the form
    form.addEventListener('input', checkForm);
});

function redirectTo(anchorId) {
    // Get the target section element
    const targetElement = document.querySelector(anchorId);

    if (targetElement) {
        // Get the height of the navbar
        const navbarHeight = document.querySelector('.navbar').offsetHeight;

        // Set extra padding (adjust this value for more space)
        const extraPadding = 25; // value is in px

        // Scroll to the target section, accounting for navbar height and extra padding
        window.scrollTo({
            top: targetElement.offsetTop - navbarHeight - extraPadding,
            behavior: 'smooth'
        });
    }
}