const slides = [{
    srcset:`
      gallery/skoda-320w.jpg,
      gallery/skoda-480w.jpg,
      gallery/skoda-640w.jpg`,
    path: 'gallery/skoda.jpg',
    alt: 'Ośrodek Szkolenia Kierowców LimaL'
  },
  {
    srcset:`
      gallery/skoda2-320w.jpg,
      gallery/skoda2-480w.jpg,
      gallery/skoda2-640w.jpg`,
    path: 'gallery/skoda2.jpg',
    alt: 'Ośrodek Szkolenia Kierowców LimaL'
  },
  {
    srcset:`
      gallery/plac-320w.jpg,
      gallery/plac-480w.jpg,
      gallery/plac-640w.jpg`,
    path: 'gallery/plac.jpg',
    alt: 'Ośrodek Szkolenia Kierowców LimaL'
  },
  {
    srcset:`
      gallery/plac2-320w.jpg,
      gallery/plac2-480w.jpg,
      gallery/plac2-640w.jpg`,
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

    imgNode.onerror = () => {
      imgNode.src = 'gallery/default.jpg';
    }

    slideNode.appendChild(imgNode)

    swiperWrapper.appendChild(slideNode);
}

