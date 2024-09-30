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
    document.querySelectorAll(".nav-links a").forEach((el) => {
      el.dataset.active = 0;
    });
    selectActiveNavItem(element);
  });
});
