(function () {
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
})();
