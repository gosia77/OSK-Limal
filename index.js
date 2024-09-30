// navigation on a page

document.querySelectorAll('.nav-link').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);
      window.scrollTo({
          top: targetSection.offsetTop,
          behavior: 'smooth'
      });
  });
});

// Galery swiper

var swiper = new Swiper(".mySwiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  // SCROLL BUTTON

const scrollArrowClass = '.scroll-arrow'
const scrollButton = document.querySelector(scrollArrowClass)

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
  scrollFunction()
};

const scrollFunction = () => {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    scrollButton.style.display = "block";
  } else {
    scrollButton.style.display = "none";
  }
}

scrollButton.addEventListener('click', () => {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
})



// reCaptacha


  function onClick(e) {
    e.preventDefault();
    grecaptcha.enterprise.ready(async () => {
      const token = await grecaptcha.enterprise.execute('6LfHaU4qAAAAAPEpVprtAxYbi-r_zXJJtGtyMkGh', {action: 'LOGIN'});
    });
  }
