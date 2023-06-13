(function () {
  // Get the announcement elements
  const announcements = document.querySelectorAll(".announcement");

  // Initialize index and timer variables
  let currentAnnouncementIndex = 0;
  let timer;

  // Function to display the next announcement
  function displayNextAnnouncement() {
    // Hide the current announcement
    announcements[currentAnnouncementIndex].classList.add(
      "announcement--inactive"
    );

    // Increment the index for the next announcement
    currentAnnouncementIndex =
      (currentAnnouncementIndex + 1) % announcements.length;

    // Show the next announcement
    announcements[currentAnnouncementIndex].classList.remove(
      "announcement--inactive"
    );

    // Start the timer for the next announcement
    timer = setTimeout(displayNextAnnouncement, 5000);
  }

  // Start the timer for the first announcement
  timer = setTimeout(displayNextAnnouncement, 5000);

  // Get all the accordion titles
  const titles = document.querySelectorAll(
    ".footer-main__title.accordion-header"
  );

  // Add a click event listener to each title
  titles.forEach(function (title) {
    title.addEventListener("click", function () {
      const isExpanded = this.getAttribute("aria-expanded") === "true";

      // Toggle the expanded state
      this.setAttribute("aria-expanded", !isExpanded);

      // Toggle the visibility of the menu
      const menu = this.nextElementSibling;
      if (isExpanded) {
        menu.style.maxHeight = "0";
      } else {
        menu.style.maxHeight = menu.scrollHeight + "px";
      }
    });
  });
})();
