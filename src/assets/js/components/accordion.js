document.addEventListener("DOMContentLoaded", () => {
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
});
