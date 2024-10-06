const slides = [{
    srcset:`
      gallery/skoda-320w.jpg 320w,
      gallery/skoda-480w.jpg 480w,
      gallery/skoda-640w.jpg 640w`,
    path: 'gallery/skoda.jpg',
    alt: 'Ośrodek Szkolenia Kierowców LimaL'
  },
  {
    srcset:`
      gallery/skoda2-320w.jpg 320w,
      gallery/skoda2-480w.jpg 480w,
      gallery/skoda2-640w.jpg 640w`,
    path: 'gallery/skoda2.jpg',
    alt: 'Ośrodek Szkolenia Kierowców LimaL'
  },
  {
    srcset:`
      gallery/plac-320w.jpg 320w,
      gallery/plac-480w.jpg 480w,
      gallery/plac-640w.jpg 640w`,
    path: 'gallery/plac.jpg',
    alt: 'Ośrodek Szkolenia Kierowców LimaL'
  },
  {
    srcset:`
      gallery/plac2-320w.jpg 320w,
      gallery/plac2-480w.jpg 480w,
      gallery/plac2-640w.jpg 640w`,
    path: 'gallery/plac2.jpg',
    alt: 'Ośrodek Szkolenia Kierowców LimaL'
  },
  
];

const swiperWrapper = document.querySelector('.swiper-wrapper');

for (const slide of slides) {
    const slideNode = document.createElement('div');
    slideNode.classList.add('swiper-slide');

    const imgNode = document.createElement('img');
    imgNode.srcset = slide.srcset;
    imgNode.src = slide.path;
    imgNode.alt = slide.alt;
    imgNode.sizes = "(max-width:320px) 280px, (max-width: 480px) 440px, 640px";
    imgNode.loading = 'lazy';

    slideNode.appendChild(imgNode)

    swiperWrapper.appendChild(slideNode);
}

