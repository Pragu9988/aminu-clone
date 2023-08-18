(function () {
  document.addEventListener("DOMContentLoaded", function () {
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
  });
})();
