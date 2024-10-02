const slides = [{
  path: 'gallery/skoda.jpg',
  alt: 'Ośrodek Szkolenia Kierowców LimaL',
  srcset: 'gallery/skoda-small.png 400w, gallery/skoda-medium.png 800w, gallery/skoda-large.png 1200w',
  sizes: '(max-width: 400px) 400px, (max-width: 800px) 800px, 1200px'
},
{
  path: 'gallery/skoda2.jpg',
  alt: 'Ośrodek Szkolenia Kierowców LimaL',
  srcset: 'gallery/skoda2-small.png 400w, gallery/skoda2-medium.png 800w, gallery/skoda2-large.png 1200w',
  sizes: '(max-width: 400px) 400px, (max-width: 800px) 800px, 1200px',
},
{
  path: 'gallery/plac.jpg',
  alt: 'Ośrodek Szkolenia Kierowców LimaL',
  srcset: 'gallery/plac-small.jpg 400w, gallery/plac-medium.jpg 800w, gallery/plac-large.jpg 1200w',
  sizes: '(max-width: 400px) 400px, (max-width: 800px) 800px, 1200px',
},
{
  path: 'gallery/plac2.jpg',
  alt: 'Ośrodek Szkolenia Kierowców LimaL',
  srcset: 'gallery/plac2-small.jpg 400w, gallery/plac2-medium.jpg 800w, gallery/plac2-large.jpg 1200w',
  sizes: '(max-width: 400px) 400px, (max-width: 800px) 800px, 1200px',
},

];

const swiperWrapper = document.querySelector('.swiper-wrapper');

for (const slide of slides) {
  const slideNode = document.createElement('div');
  slideNode.classList.add('swiper-slide')

  const imgNode = document.createElement('img')
  imgNode.src = slide.path;
  imgNode.alt = slide.alt;
  imgNode.srcset = slide.srcset;
  imgNode.sizes = slide.sizes;

  slideNode.appendChild(imgNode)

  swiperWrapper.appendChild(slideNode);
}

