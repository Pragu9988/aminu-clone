import Swiper from "swiper";
import { Navigation, Pagination, Thumbs } from "swiper";

Swiper.use([Navigation, Pagination, Thumbs ]);

(function () {
  document.addEventListener("DOMContentLoaded", () => {
    const swipers = document.querySelectorAll("[data-swiper]") || [];

    swipers.forEach((elem) => {
      let options =
        elem.dataset && elem.dataset.options
          ? JSON.parse(elem.dataset.options)
          : {};

          if(options.thumbs) {
            const thumbsElem = document.querySelector(options.thumbs);
            if (thumbsElem) {
              options.thumbs = {
                swiper: new Swiper(thumbsElem, {})
              }
            }
          }
      var swiper = new Swiper(elem, options);
    });
  });
})();
