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

// reCaptacha

function onClick(e) {
  e.preventDefault();
  grecaptcha.enterprise.ready(async () => {
    const token = await grecaptcha.enterprise.execute(
      "6LfHaU4qAAAAAPEpVprtAxYbi-r_zXJJtGtyMkGh",
      { action: "LOGIN" }
    );
  });
}
