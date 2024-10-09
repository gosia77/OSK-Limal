const slides = [
  {
    srcset1280: "gallery/skoda.jpg",
    srcset768: "gallery/skoda-640w.jpg",
    defaultPath: "gallery/skoda-480w.jpg",
    alt: "Ośrodek Szkolenia Kierowców LimaL",
  },
  {
    srcset1280: "gallery/skoda2.jpg",
    srcset768: "gallery/skoda2-640w.jpg",
    defaultPath: "gallery/skoda2-480w.jpg",
    alt: "Ośrodek Szkolenia Kierowców LimaL",
  },
  {
    srcset1280: "gallery/plac.jpg",
    srcset768: "gallery/plac-640w.jpg",
    defaultPath: "gallery/plac-480w.jpg",
    alt: "Ośrodek Szkolenia Kierowców LimaL",
  },
  {
    srcset1280: "gallery/plac2.jpg",
    srcset768: "gallery/plac2-640w.jpg",
    defaultPath: "gallery/plac2-480w.jpg",
    alt: "Ośrodek Szkolenia Kierowców LimaL",
  },
];

const swiperWrapper = document.querySelector(".swiper-wrapper");

for (const { srcset1280, srcset768, defaultPath, alt } of slides) {
  const slideNode = document.createElement("picture");
  slideNode.classList.add("swiper-slide");

  const source1 = document.createElement("source");
  const source2 = document.createElement("source");

  source1.media = "(min-width: 1280px)";
  source1.srcset = srcset1280;
  source2.media = "(min-width: 768px)";
  source2.srcset = srcset768;

  const imgNode = document.createElement("img");
  imgNode.src = defaultPath;
  imgNode.alt = alt;
  imgNode.sizes = "(max-width:320px) 280px, (max-width: 480px) 440px, 640px";
  imgNode.loading = "lazy";

  imgNode.onerror = () => {
    imgNode.src = "gallery/default.jpg";
  };

  slideNode.appendChild(source1);
  slideNode.appendChild(source2);
  slideNode.appendChild(imgNode);

  swiperWrapper.appendChild(slideNode);
}
