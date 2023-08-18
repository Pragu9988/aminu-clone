(function () {
  const searchLink = document.querySelector(".header-search-link");
  const searchContainer = document.querySelector(".main-search");
  const searchOverlay = document.querySelector(".cart-drawer__bg-overlay");
  const searchClose = document.querySelector(".main-search__close");

  if (searchLink) {
    searchLink.addEventListener("click", (e) => {
      console.log("clicked");
      e.preventDefault();
      searchContainer.classList.toggle("active");
      searchOverlay.classList.toggle("active");
    });
  }

  if (searchOverlay) {
    searchOverlay.addEventListener("click", () => {
      closeSearch();
    });
  }

  if (searchClose) {
    searchClose.addEventListener("click", () => {
      closeSearch();
    });
  }

  const closeSearch = () => {
    if (searchContainer && searchOverlay) {
      searchContainer.classList.remove("active");
      searchOverlay.classList.remove("active");
    }
  };
})();
