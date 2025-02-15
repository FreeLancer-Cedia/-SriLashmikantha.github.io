// Handle mobile menu toggle
const menuBar = document.getElementById('menu-bar');
const navbar = document.querySelector('.navbar');

menuBar.addEventListener('click', () => {
    navbar.classList.toggle('active'); // Toggle the 'active' class on the navbar
});
const menuItems = document.querySelectorAll('.navbar a');
menuItems.forEach(item => {
    item.addEventListener('click', () => {
        navbar.classList.remove('active'); // Close the navbar by removing 'active' class
    });
});


// Image Slider
const imgButtons = document.querySelectorAll('.img-btn');
const imgContainer = document.getElementById('img-slider');

// Function to update the image and active button
function updateImage(index) {
    imgButtons.forEach((btn) => btn.classList.remove('active')); // Remove active class from all buttons
    imgButtons[index].classList.add('active'); // Add active class to the clicked button
    const newImage = imgButtons[index].getAttribute('data-src');
    imgContainer.src = newImage; // Change the image based on the button's data-src attribute
}

// Event listener for manual image navigation (click on buttons)
imgButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        updateImage(index);
        currentImageIndex = index; // Update the currentImageIndex to the clicked image
    });
});

// Auto slide function to change image every 3 seconds
let currentImageIndex = 0;
const totalImages = imgButtons.length;

function autoSlide() {
    currentImageIndex = (currentImageIndex + 1) % totalImages; // Loop back to the first image after the last one
    updateImage(currentImageIndex);
}

// Start auto sliding every 3 seconds
setInterval(autoSlide, 3000); // Change image every 3 seconds

// Initialize the first image and active button
updateImage(currentImageIndex);

// Stats Counter (Optional: Assuming it's for some number counting animation)
document.addEventListener("DOMContentLoaded", function () {
    const stats = document.querySelectorAll('.stat-value');
    stats.forEach(stat => {
        const target = +stat.getAttribute('data-target');
        let count = 0;
        const interval = setInterval(() => {
            stat.textContent = count;
            if (count >= target) {
                clearInterval(interval);
            } else {
                count++;
            }
        }, 50); // Adjusted speed to 50ms for smoother effect
    });
});

AOS.init({
    duration: 1000, // Animation duration in milliseconds
    easing: 'ease', // Easing for the animation
    once: true, // Animation occurs only once
});
