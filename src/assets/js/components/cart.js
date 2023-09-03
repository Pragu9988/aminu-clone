(function () {
  const cartLink = document.querySelector(".cart-link");
  const cartDrawerWrapper = document.querySelector(".cart-drawer__popup");
  const cartOpenBgOverlay = document.querySelector(".cart-drawer__bg-overlay");
  const cartCloseIcon = document.querySelector(".cart-drawer-header__close");
  const cartPopupTriggers = document.querySelectorAll("[data-cart-popup]");
  const cartPopup = document.querySelector(".cart-drawer-popup");
  const cartDrawerOverlay = document.querySelector(
    ".cart-drawer-popup__overlay"
  );

  if (cartLink) {
    cartLink.addEventListener("click", () => {
      cartDrawerWrapper.classList.toggle("active");
      cartOpenBgOverlay.classList.toggle("active");
    });
  }

  if (cartOpenBgOverlay) {
    cartOpenBgOverlay.addEventListener("click", () => {
      closeCart();
      closeCartPopup();
    });
  }

  if (cartCloseIcon) {
    cartCloseIcon.addEventListener("click", () => {
      closeCart();
    });
  }

  if (cartDrawerOverlay) {
    cartDrawerOverlay.addEventListener("click", () => {
      closeCartPopup();
    });
  }

  const closeCart = () => {
    if (cartOpenBgOverlay) {
      cartDrawerWrapper.classList.remove("active");
      cartOpenBgOverlay.classList.remove("active");
    }
  };

  const closeCartPopup = () => {
    if (cartDrawerOverlay) {
      cartPopup.classList.remove("active");
      cartDrawerOverlay.classList.remove("active");
    }
  };

  if (cartPopupTriggers) {
    cartPopupTriggers.forEach((popupTrigger) => {
      popupTrigger.addEventListener("click", (e) => {
        e.preventDefault();
        cartPopup.classList.add("active");
        cartOpenBgOverlay.classList.add("active");
        cartDrawerOverlay.classList.add("active");
      });
    });
  }
})();
