// Galery swiper

var swiper = new Swiper(".mySwiper", {
  effect: "coverflow",
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// SCROLL BUTTON

const scrollArrowClass = ".scroll-arrow";
const scrollButton = document.querySelector(scrollArrowClass);

scrollButton.addEventListener("click", () => {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
});

