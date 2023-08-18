(function () {
  document.addEventListener("DOMContentLoaded", () => {
    // Get all the tab links
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
  });
})();
