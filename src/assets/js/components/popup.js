(function () {
  document.addEventListener("DOMContentLoaded", function () {
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
  });
})();
