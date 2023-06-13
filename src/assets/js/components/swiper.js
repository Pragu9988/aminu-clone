import Swiper from "swiper";

// Swiper.use([
//   Navigation,
//   Pagination,
//   Scrollbar,
//   Autoplay,
//   Mousewheel,
//   Keyboard,
//   Parallax,
//   EffectFade,
//   Thumbs,
//   Controller,
// ]);

(function () {
  document.addEventListener("DOMContentLoaded", () => {
    const swipers = document.querySelectorAll("[data-swiper]") || [];
    console.log("swipers", swipers);

    swipers.forEach((elem) => {
      let options =
        elem.dataset && elem.dataset.options
          ? JSON.parse(elem.dataset.options)
          : {};
          console.log(options);
      var swiper = new Swiper(elem, options);
    });
  });
})();
