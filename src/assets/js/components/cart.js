(function () {
  const cartLink = document.querySelector(".cart-link");
  const cartDrawerWrapper = document.querySelector(".cart-drawer__popup");
  const cartDrawerOverlay = document.querySelector(".cart-drawer__bg-overlay");
  const cartCloseIcon = document.querySelector(".cart-drawer-header__close");

  if (cartLink) {
    cartLink.addEventListener("click", () => {
      cartDrawerWrapper.classList.toggle("active");
      cartDrawerOverlay.classList.toggle("active");
    });
  }

  if (cartDrawerOverlay) {
    cartDrawerOverlay.addEventListener("click", () => {
      closeCart();
    });
  }

  if (cartCloseIcon) {
    cartCloseIcon.addEventListener("click", () => {
      closeCart();
    });
  }

  const closeCart = () => {
    if (cartDrawerOverlay && cartDrawerOverlay) {
      cartDrawerWrapper.classList.remove("active");
      cartDrawerOverlay.classList.remove("active");
    }
  };
})();
