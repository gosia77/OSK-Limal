const slides = [{
    path: 'gallery/skoda.jpg',
    alt: 'Ośrodek Szkolenia Kierowców LimaL'
  },
  {
    path: 'gallery/skoda2.jpg',
    alt: 'Ośrodek Szkolenia Kierowców LimaL'
  },
  {
    path: 'gallery/plac.jpg',
    alt: 'Ośrodek Szkolenia Kierowców LimaL'
  },
  {
    path: 'gallery/plac2.jpg',
    alt: 'Ośrodek Szkolenia Kierowców LimaL'
  },
  
];

const swiperWrapper = document.querySelector('.swiper-wrapper');

for (const slide of slides) {
    const slideNode = document.createElement('div');
    slideNode.classList.add('swiper-slide')

    const imgNode = document.createElement('img')
    imgNode.src = slide.path;
    imgNode.alt = slide.alt;

    slideNode.appendChild(imgNode)
    fragment.appendChild(slideNode);

    swiperWrapper.appendChild(fragment);
}

