// carousel.js

// JavaScript for the image carousel
let currentSlide = 0;

const showSlide = (n) => {
    const slides = document.getElementsByClassName("carousel-item");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    currentSlide = n;
    if (currentSlide < 0) {
        currentSlide = slides.length - 1;
    } else if (currentSlide >= slides.length) {
        currentSlide = 0;
    }
    slides[currentSlide].style.display = "block";
};

const plusSlide = (n) => {
    showSlide(currentSlide + n);
};

showSlide(currentSlide);

const prevButton = document.querySelector(".carousel-left-arrow");
const nextButton = document.querySelector(".carousel-right-arrow");

prevButton.addEventListener("click", () => {
    plusSlide(-1);
});

nextButton.addEventListener("click", () => {
    plusSlide(1);
});