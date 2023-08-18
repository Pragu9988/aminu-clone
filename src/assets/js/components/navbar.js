(function () {
  document.addEventListener("DOMContentLoaded", function () {
    const mobileNavDrawer = document.querySelector(".mobile-nav-drawer");
    const tier1NavItem = document.querySelector(".nav__tier-1 .nav__item");
    const tier2NavItem = document.querySelector(".nav__tier-2 .nav_item");
    const navToggle = document.querySelector(".nav-toggle");
    const drawerOverlay = document.querySelector(".cart-drawer__bg-overlay");
    const mobileNavClose = document.querySelector(
      ".nav__mobile-header .mobile-nav-toggle"
    );
    const navItemsWithChildren = Array.from(
      document.querySelectorAll(".nav__item--with-children")
    );
    const backToTier1 = document.querySelector(".mobile-nav-back");
    console.log(navItemsWithChildren);

    if (navToggle) {
      navToggle.addEventListener("click", function () {
        mobileNavDrawer.classList.toggle("active");
        drawerOverlay.classList.toggle("active");
      });
    }

    if (drawerOverlay) {
      drawerOverlay.addEventListener("click", () => {
        closeNavDrawer();
      });
    }

    if (mobileNavClose) {
      mobileNavClose.addEventListener("click", () => {
        closeNavDrawer();
      });
    }

    if (navItemsWithChildren && navItemsWithChildren.length > 0) {
      navItemsWithChildren.forEach((navItem) => {
        navItem.addEventListener("click", () => {
          console.log("clicked", navItem);
          navItem.classList.add("nav__item--open");
          navItem
            .closest(".mobile-nav-drawer")
            .classList.add("child-nav--open");
        });
        if (backToTier1) {
          backToTier1.addEventListener("click", () => {
            navItem.classList.remove("nav__item--open");
            navItem
              .closest(".mobile-nav-drawer")
              .classList.remove("child-nav--open");
          });
        }
      });
    }

    const closeNavDrawer = () => {
      if (mobileNavDrawer && drawerOverlay) {
        mobileNavDrawer.classList.remove("active");
        drawerOverlay.classList.remove("active");
      }
    };
  });
})();
