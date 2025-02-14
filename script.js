// Handle mobile menu toggle
const menuBar = document.getElementById('menu-bar');
const navbar = document.querySelector('.navbar');

menuBar.addEventListener('click', () => {
    navbar.classList.toggle('active'); // Toggle the 'active' class on the navbar
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

// Get the box container
const boxContainer = document.querySelector('.packages .box-container');
const totalPackages = document.querySelectorAll('.packages .box').length;
const visiblePackages = 5; // Number of packages visible at a time
let currentIndexPackages = 0; // Current index for packages

// Function to slide the packages
function slidePackages() {
    // Calculate the new scroll position to show the next 5 packages (each package takes 20% of the width)
    const scrollPosition = (currentIndexPackages * (boxContainer.scrollWidth / totalPackages));

    // Smoothly scroll to the new position
    boxContainer.scrollTo({
        left: scrollPosition,
        behavior: 'smooth'
    });

    // Update the current index to show the next 5 packages
    currentIndexPackages = (currentIndexPackages + visiblePackages) % totalPackages; // Wrap around if index exceeds total packages
}

// Auto slide every 5 seconds (for packages)
setInterval(slidePackages, 5000); // Change every 5 seconds

// Manual slide buttons
document.querySelector('.scroll-btn-left').addEventListener('click', () => {
    currentIndexPackages = (currentIndexPackages - visiblePackages + totalPackages) % totalPackages; // Move back 5 packages
    slidePackages();
});

document.querySelector('.scroll-btn-right').addEventListener('click', () => {
    slidePackages(); // Move forward 5 packages
});

// Carousel for packages: Show 4 visible at once and auto-slide every 5 seconds
document.addEventListener("DOMContentLoaded", function() {
    const boxContainer = document.querySelector('.packages .box-container');
    const boxes = document.querySelectorAll('.packages .box');
    let currentIndex = 0;
    const totalBoxes = boxes.length;
    const visibleCount = 4; // Number of visible images initially

    // Function to show a specific box
    function showBox(index) {
        boxes.forEach((box, i) => {
            if (i >= index && i < index + visibleCount) {
                box.classList.add('visible');
            } else {
                box.classList.remove('visible');
            }
        });
    }

    // Initially show the first 4 boxes
    showBox(currentIndex);

    // Automatic slide (after 5 seconds, shift by 1)
    setInterval(function() {
        currentIndex = (currentIndex + 1) % (totalBoxes - visibleCount + 1);
        showBox(currentIndex);
    }, 5000); // Every 5 seconds

    // Manual navigation buttons
    const nextBtn = document.createElement('button');
    nextBtn.textContent = 'Next';
    nextBtn.classList.add('scroll-btn');
    nextBtn.onclick = function() {
        currentIndex = (currentIndex + 1) % (totalBoxes - visibleCount + 1);
        showBox(currentIndex);
    };

    const prevBtn = document.createElement('button');
    prevBtn.textContent = 'Prev';
    prevBtn.classList.add('scroll-btn');
    prevBtn.onclick = function() {
        currentIndex = (currentIndex - 1 + totalBoxes - visibleCount + 1) % (totalBoxes - visibleCount + 1);
        showBox(currentIndex);
    };

   
});
