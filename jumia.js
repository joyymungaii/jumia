// Get all the "Add to Cart" buttons
const addToCartButtons = document.querySelectorAll('.bla button');

// Get the cart count element
const cartCountElement = document.querySelector('.account a span');

// Initialize the cart count to 0
let cartCount = 0;

// Add an event listener to each "Add to Cart" button
addToCartButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Increment the cart count
    cartCount++;

    // Update the cart count element
    cartCountElement.textContent = cartCount;
  });
});