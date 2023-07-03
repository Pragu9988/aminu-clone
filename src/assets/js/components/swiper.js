import Swiper from "swiper";

// Swiper.use([
//   Navigation,
//   Pagination,
//   Controller,
// ]);

(function () {
  document.addEventListener("DOMContentLoaded", () => {
    const swipers = document.querySelectorAll("[data-swiper]") || [];

    swipers.forEach((elem) => {
      let options =
        elem.dataset && elem.dataset.options
          ? JSON.parse(elem.dataset.options)
          : {};
      var swiper = new Swiper(elem, options);
    });
  });
})();
