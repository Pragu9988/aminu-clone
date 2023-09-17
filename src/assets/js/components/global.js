(function () {
  document.addEventListener("DOMContentLoaded", () => {
    /**
     * Accordion.js
     */
    // Get all the accordion titles
    const titles = document.querySelectorAll(".accordion-item__title");
    console.log("title", titles);

    if (titles && titles.length > 0) {
      // Add a click event listener to each title
      titles.forEach(function (title) {
        title.addEventListener("click", function (e) {
          e.preventDefault();
          const isExpanded = this.getAttribute("aria-expanded") === "true";
          // Toggle the expanded state
          this.setAttribute("aria-expanded", !isExpanded);

          // Toggle the visibility of the menu
          const menu = this.nextElementSibling;
          console.log("menu", menu, isExpanded);
          if (isExpanded) {
            menu.style.maxHeight = "0";
          } else {
            menu.style.maxHeight = menu.scrollHeight + "px";
          }
        });
      });
    }

    /**
     * Cart.js
     */
    const cartLink = document.querySelector(".cart-link");
    const cartDrawerWrapper = document.querySelector(".cart-drawer__popup");
    const cartOpenBgOverlay = document.querySelector(
      ".cart-drawer__bg-overlay"
    );
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

    /**
     * Customer.js
     */
    const forgetPasswordLink = document.querySelector(".forget-your-password");
    const cancelRecoverPasswordForm = document.querySelector(".cancel-recover");
    const recoverPasswordElement = document.getElementById("recover-password");
    const customerElement = document.getElementById("customer");

    if (forgetPasswordLink) {
      forgetPasswordLink.addEventListener("click", () => {
        showRecoverPasswordForm();
      });
    }

    if (cancelRecoverPasswordForm) {
      cancelRecoverPasswordForm.addEventListener("click", () => {
        hideRecoverPasswordForm();
      });
    }

    function showRecoverPasswordForm() {
      if (recoverPasswordElement && customerElement) {
        document.getElementById("recover-password").style.display = "block";
        document.getElementById("customer").style.display = "none";
      }
    }

    function hideRecoverPasswordForm() {
      if (recoverPasswordElement && customerElement) {
        document.getElementById("recover-password").style.display = "none";
        document.getElementById("customer").style.display = "block";
      }
    }

    /**
     * Dropdown.js
     */
    // Hide all dropdown-menu elements
    const dropdownMenus = document.querySelectorAll(".dropdown-menu");

    if (dropdownMenus) {
      dropdownMenus.forEach(function (dropdownMenu) {
        dropdownMenu.style.display = "none";
      });
    }

    // Function to handle hover events on the custom-menu dropdown
    function handleDropdownHover(event) {
      const dropdown = event.currentTarget;
      const dropdownMenu = dropdown.querySelector(".dropdown-menu");

      if (dropdown && dropdownMenu) {
        if (event.type === "mouseenter") {
          dropdown.classList.add("open");
          dropdownMenu.style.display = "grid";
        } else if (event.type === "mouseleave") {
          dropdown.classList.remove("open");
          dropdownMenu.style.display = "none";
        }
      }
    }

    // Add event listeners for hover events on the custom-menu dropdown
    const customMenuDropdowns = document.querySelectorAll(
      ".custom-menu .dropdown"
    );

    if (customMenuDropdowns) {
      customMenuDropdowns.forEach(function (dropdown) {
        dropdown.addEventListener("mouseenter", handleDropdownHover);
        dropdown.addEventListener("mouseleave", handleDropdownHover);
      });
    }

    // Get references to the necessary elements
    const dropdownButton = document.querySelector(".link-dropdown__button");
    const dropdownOptions = document.querySelector(".link-dropdown__options");

    // Add a click event listener to the dropdown button
    if (dropdownButton) {
      dropdownButton.addEventListener("click", () => {
        console.log("click", dropdownButton.getAttribute("aria-expanded"));
        const isExpanded =
          dropdownButton.getAttribute("aria-expanded") === "true";

        // Toggle the "aria-expanded" attribute
        dropdownButton.setAttribute("aria-expanded", !isExpanded);

        // Toggle the visibility of the dropdown options
        dropdownOptions.style.display = isExpanded ? "none" : "block";
      });
    }

    // Close the dropdown when clicking outside of it
    document.addEventListener("click", (event) => {
      if (dropdownButton && !dropdownButton.contains(event.target)) {
        dropdownButton.setAttribute("aria-expanded", "false");
        dropdownOptions.style.display = "none";
      }
    });

    // Get references to the necessary elements
    const sortButton = document.querySelector(".select-dropdown__button");
    const sortOptions = document.querySelector(".select-dropdown__options");
    console.log("dd", sortButton);

    // Add a click event listener to the dropdown button
    if (sortButton) {
      sortButton.addEventListener("click", () => {
        console.log("click", sortButton.getAttribute("aria-expanded"));
        const isExpanded = sortButton.getAttribute("aria-expanded") === "true";

        // Toggle the "aria-expanded" attribute
        sortButton.setAttribute("aria-expanded", !isExpanded);

        // Toggle the visibility of the dropdown options
        sortOptions.style.opacity = isExpanded ? 0 : 1;
        sortOptions.style.visibility = isExpanded ? "hidden" : "visible";
      });
    }

    // Close the dropdown when clicking outside of it
    document.addEventListener("click", (event) => {
      if (sortButton && !sortButton.contains(event.target)) {
        sortButton.setAttribute("aria-expanded", "false");
        // Toggle the visibility of the dropdown options
        sortOptions.style.opacity = 0;
        sortOptions.style.visibility = "hidden";
      }
    });

    /**
     * Filter.js
     */
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
        closeFilterDrawer();
      });
    }

    const closeFilterDrawer = () => {
      if (filterDrawer) {
        filterDrawer.classList.remove("active");
      }
    };
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

    /**
     * Popup.js
     */
    const popupTriggers = document.querySelectorAll(".popup-trigger");
    const closeButtons = document.querySelectorAll(".popup__btn-close");

    // Open the popup when a trigger button is clicked
    if (popupTriggers && popupTriggers.length > 0) {
      popupTriggers.forEach(function (trigger) {
        trigger.addEventListener("click", function () {
          const target = document.querySelector(
            trigger.getAttribute("data-target")
          );
          if (target) {
            target.style.display = "block";
          }
        });
      });
    }

    // Close the popup when a close button is clicked
    if (closeButtons && closeButtons.length > 0) {
      closeButtons.forEach(function (button) {
        button.addEventListener("click", function () {
          const popup = button.closest(".popup");
          if (popup) {
            popup.style.display = "none";
          }
        });
      });
    }

    /**
     * Qty-counter.js
     */
    // Get references to the necessary DOM elements
    const minusButton = document.querySelector(".cart-item__qty-btn--minus");
    const plusButton = document.querySelector(".cart-item__qty-btn--plus");
    const quantityInput = document.querySelector(".cart-item__input");
    const priceElement = document.querySelector(".cart-item__price .money");

    if (quantityInput && priceElement) {
      // Get the initial quantity value from the data attribute
      let quantity = parseInt(quantityInput.dataset.value);

      // Get the price from the money element
      const price = parseFloat(
        priceElement.textContent.match(/\d+\.{0,1}\d*/)[0]
      );

      // Function to update the quantity and price display
      function updateQuantityDisplay() {
        quantityInput.value = quantity;
        priceElement.textContent = `Rs. ${price * quantity}`;
      }

      // Event listener for the minus button
      if (minusButton) {
        minusButton.addEventListener("click", () => {
          if (quantity > 1) {
            quantity--;
            updateQuantityDisplay();
          }
        });
      }

      // Event listener for the plus button
      if (plusButton) {
        plusButton.addEventListener("click", () => {
          quantity++;
          updateQuantityDisplay();
        });
      }

      // Function to update the quantity if the input value changes manually
      quantityInput.addEventListener("change", () => {
        const newQuantity = parseInt(quantityInput.value);
        if (!isNaN(newQuantity) && newQuantity >= 1) {
          quantity = newQuantity;
        } else {
          quantityInput.value = quantity;
        }
        updateQuantityDisplay();
      });
    }

    /**
     * Search.js
     */
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

    /**
     * Tabs.js
     */
    const tabLinks = Array.from(document.querySelectorAll("#tabs-nav a"));
    console.log("tabl", tabLinks);

    // Get the tab content containers
    const tabContentContainers =
      document.getElementById("tabs-content")?.children;

    if (tabLinks && tabLinks.length > 0) {
      // Add click event listener to each tab link
      tabLinks.forEach((tabLink) => {
        tabLink.addEventListener("click", (e) => {
          e.preventDefault();

          // Remove the active class from all tab links
          tabLinks.forEach((link) =>
            link.parentElement.classList.remove("active")
          );

          // Add the active class to the clicked tab link
          tabLink.parentElement.classList.add("active");

          // Hide all tab content
          Array.from(tabContentContainers).forEach((content) => {
            content.style.display = "none";
          });

          // Show the corresponding tab content
          const tabId = tabLink.getAttribute("href");
          document.querySelector(tabId).style.display = "block";
        });
      });
    }
    /**
     * Utils.js
     */
    // Get the announcement elements
    const announcements = document.querySelectorAll(".announcement");

    // Initialize index and timer variables
    let currentAnnouncementIndex = 0;
    let timer;

    // Function to display the next announcement
    function displayNextAnnouncement() {
      // Hide the current announcement
      if (announcements) {
        announcements[currentAnnouncementIndex]?.classList.add(
          "announcement--inactive"
        );
      }

      // Increment the index for the next announcement
      currentAnnouncementIndex =
        (currentAnnouncementIndex + 1) % announcements.length;

      // Show the next announcement
      if (announcements) {
        announcements[currentAnnouncementIndex]?.classList.remove(
          "announcement--inactive"
        );
      }

      // Start the timer for the next announcement
      timer = setTimeout(displayNextAnnouncement, 5000);
    }
    // Start the timer for the first announcement
    timer = setTimeout(displayNextAnnouncement, 5000);

    // Get all the accordion titles
    const footerTitles = document.querySelectorAll(
      ".footer-main__title.accordion-header"
    );

    if (footerTitles && footerTitles.length > 0) {
      // Add a click event listener to each title
      footerTitles.forEach(function (title) {
        title.addEventListener("click", function () {
          const isExpanded = this.getAttribute("aria-expanded") === "true";
          // Toggle the expanded state
          this.setAttribute("aria-expanded", !isExpanded);

          // Toggle the visibility of the menu
          const menu = this.nextElementSibling;
          console.log("menu", menu, isExpanded);
          if (isExpanded) {
            menu.style.maxHeight = "0";
          } else {
            menu.style.maxHeight = menu.scrollHeight + "px";
          }
        });
      });
    }
  });

  AOS.init({
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
    initClassName: "aos-init", // class applied after initialization
    animatedClassName: "aos-animate", // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 120, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 500, // values from 0 to 3000, with step 50ms
    easing: "ease-in-sine", // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
  });

  Fancybox.bind("[data-fancybox]", {
    Thumbs: {
      type: "classic",
    },
    Toolbar: {
      display: {
        left: ["infobar"],

        right: ["close"],
      },
    },
  });

  const videos = document.querySelectorAll(".al-video-player");

  if (videos) {
    videos.forEach((video) => {
      const options = video.dataset.plyr ? JSON.parse(video.dataset.plyr) : {};
      const playr = new Plyr(video, options);

      // Update thumbnail
      playr.on("ready", (event) => {
        const thumbnailUrl = event.target.getAttribute("data-thumbnail-url");
        const thumbnailElement = event.detail.plyr.elements.poster;

        if (thumbnailElement && thumbnailUrl) {
          thumbnailElement.style.backgroundImage = `url(${thumbnailUrl})`;
        }
      });
    });
  }
})();
