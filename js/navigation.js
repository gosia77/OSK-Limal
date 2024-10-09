const hamburger = document.querySelector(".hamburger");

hamburger.addEventListener("click", () => {
  toggleNav(hamburger);
});

const toggleNav = (hamburger) => {
  const nav = document.querySelector(".navigation");
  nav.classList.toggle("navigation--open");
  hamburger.classList.toggle("hamburger--open");
};

const selectActiveNavItem = (element) => {
  const hash = window.location.hash;

  console.log(hash);
  if (!hash) {
    return;
  }

  if (!element) {
    element = document.querySelector(`.nav-links a[href="${hash}"]`);
  }

  console.log(element);
  element.dataset.active = 1;
};

selectActiveNavItem();

document.querySelectorAll(".nav-links a").forEach((element) => {
  element.addEventListener("click", () => {
    toggleNav(hamburger);
    document.querySelectorAll(".nav-links a").forEach((el) => {
      el.dataset.active = 0;
    });
    selectActiveNavItem(element);
  });
});
