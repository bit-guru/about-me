// script_photo.js

let slider = document.getElementById('slider');
let slideIndex = 0;

function slideLeft() {
  const slides = document.querySelectorAll('.slide');
  const slideWidth = slides[0].offsetWidth;

  if (slideIndex > 0) {
    slideIndex--;
  } else {
    slideIndex = slides.length - 1; // loop to last slide
  }

  slider.style.transform = `translateX(-${slideWidth * slideIndex}px)`;
}

function slideRight() {
  const slides = document.querySelectorAll('.slide');
  const slideWidth = slides[0].offsetWidth;

  if (slideIndex < slides.length - 1) {
    slideIndex++;
  } else {
    slideIndex = 0; // loop back to first slide
  }

  slider.style.transform = `translateX(-${slideWidth * slideIndex}px)`;
}
