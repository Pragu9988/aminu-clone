(function () {
  document.addEventListener("DOMContentLoaded", function () {
    const filterDrawer = document.querySelector(".product-filter");
    const filterToggle = document.querySelector(".toggle-btn");
    const filterClose = document.querySelector(".filters__close");

    if (filterToggle) {
      filterToggle.addEventListener("click", () => {
        filterDrawer.classList.toggle("active");
      });
    }

    if (filterClose) {
      filterClose.addEventListener("click", () => {
        closeNavDrawer();
      });
    }

    const closeNavDrawer = () => {
      if (filterDrawer) {
        filterDrawer.classList.remove("active");
      }
    };
  });
})();
