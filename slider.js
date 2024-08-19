const slides = [{
    path: 'gallery/image 1.png',
    alt: 'Ośrodek Szkolenia Kierowców LimaL'
  },
  {
    path: 'gallery/image 1.png',
    alt: 'Ośrodek Szkolenia Kierowców LimaL'
  },
  {
    path: 'gallery/image 1.png',
    alt: 'Ośrodek Szkolenia Kierowców LimaL'
  },
  {
    path: 'gallery/image 1.png',
    alt: 'Ośrodek Szkolenia Kierowców LimaL'
  },
  {
    path: 'gallery/image 1.png',
    alt: 'Ośrodek Szkolenia Kierowców LimaL'
  }];

const swiperWrapper = document.querySelector('.swiper-wrapper');

for (const slide of slides) {
    const slideNode = document.createElement('div');
    slideNode.classList.add('swiper-slide')

    const imgNode = document.createElement('img')
    imgNode.src = slide.path;
    imgNode.alt = slide.alt;

    slideNode.appendChild(imgNode)

    swiperWrapper.appendChild(slideNode);
}

