(function () {
  document.addEventListener("DOMContentLoaded", function () {
    const minInput = document.getElementById("CCPriceRangeMin");
    const maxInput = document.getElementById("CCPriceRangeMax");
    const minControl = document.querySelector(
      ".filter-price-range__control--min"
    );
    const maxControl = document.querySelector(
      ".filter-price-range__control--max"
    );
    const activeBar = document.querySelector(".filter-price-range__bar-active");

    const minValue = parseInt(minInput.min);
    const maxValue = parseInt(maxInput.max);

    function updatePriceValues() {
      const min = parseInt(minInput.value);
      const max = parseInt(maxInput.value);

      if (min >= minValue && max <= maxValue && min <= max) {
        const minPercent = ((min - minValue) / (maxValue - minValue)) * 100;
        const maxPercent = ((max - minValue) / (maxValue - minValue)) * 100;

        minControl.style.left = minPercent + "%";
        maxControl.style.left = maxPercent + "%";
        activeBar.style.left = minPercent + "%";
        activeBar.style.right = 100 - maxPercent + "%";
      }
    }

    minInput.addEventListener("input", updatePriceValues);
    maxInput.addEventListener("input", updatePriceValues);

    if (minControl) {
      minControl.addEventListener("mousedown", function (event) {
        const startX = event.clientX;
        const startLeft = parseFloat(minControl.style.left) || 0;

        function onMouseMove(event) {
          const offsetX = event.clientX - startX;
          const newLeft = Math.max(
            0,
            Math.min(
              100,
              startLeft + (offsetX / minControl.parentElement.offsetWidth) * 100
            )
          );
          minControl.style.left = newLeft + "%";
          activeBar.style.left = newLeft + "%";

          const minValue =
            Math.round((newLeft / 100) * (maxValue - minValue)) + minValue;
          minInput.value = minValue;
        }

        function onMouseUp() {
          document.removeEventListener("mousemove", onMouseMove);
          document.removeEventListener("mouseup", onMouseUp);
        }

        document.addEventListener("mousemove", onMouseMove);
        document.addEventListener("mouseup", onMouseUp);
      });
    }

    if (maxControl) {
      maxControl.addEventListener("mousedown", function (event) {
        const startX = event.clientX;
        const startLeft = parseFloat(maxControl.style.left) || 100;

        function onMouseMove(event) {
          const offsetX = event.clientX - startX;
          const newLeft = Math.max(
            0,
            Math.min(
              100,
              startLeft + (offsetX / maxControl.parentElement.offsetWidth) * 100
            )
          );
          maxControl.style.left = newLeft + "%";
          activeBar.style.right = 100 - newLeft + "%";

          const maxValue =
            Math.round((1 - newLeft / 100) * (maxValue - minValue)) + minValue;
          maxInput.value = maxValue;
        }

        function onMouseUp() {
          document.removeEventListener("mousemove", onMouseMove);
          document.removeEventListener("mouseup", onMouseUp);
        }

        document.addEventListener("mousemove", onMouseMove);
        document.addEventListener("mouseup", onMouseUp);
      });
    }
  });
})();
