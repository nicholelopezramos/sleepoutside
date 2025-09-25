import { getLocalStorage, setLocalStorage } from "./utils.mjs";

function cartItemTemplate(item) {
  return `
  <li class="cart-card divider">
    <a href="#" class="cart-card__image">
      <img src="${item.Image}" alt="${item.Name}" />
    </a>
    <a href="#"><h2 class="card__name">${item.Name}</h2></a>
    <p class="cart-card__color">${item.Colors?.[0]?.ColorName ?? ""}</p>
    <p class="cart-card__quantity">qty: ${item.Quantity ?? 1}</p>
    <p class="cart-card__price">$${item.FinalPrice}</p>
    <button class="remove-item" data-id="${item.Id}">X</button>
  </li>`;
}

// New function to remove an item from the cart
function removeItemFromCart(productId) {
  const cart = getLocalStorage("so-cart") || [];
  // Filter out the item with the matching ID
  const updatedCart = cart.filter((item) => item.Id !== productId);
  // Save the new, updated array back to localStorage
  setLocalStorage("so-cart", updatedCart);
  // Re-render the cart to show the changes
  renderCartContents();
}

function renderCartContents() {
  const cartItems = getLocalStorage("so-cart") ?? [];
  const listElement = document.querySelector(".product-list");

  if (cartItems.length > 0) {
    const htmlItems = cartItems.map((item) => cartItemTemplate(item));
    listElement.innerHTML = htmlItems.join("");

    // Add event listeners to the new remove buttons
    const removeButtons = document.querySelectorAll(".remove-item");
    removeButtons.forEach((button) => {
      button.addEventListener("click", (e) => {
        const productId = e.target.dataset.id;
        removeItemFromCart(productId);
      });
    });
  } else {
    listElement.innerHTML = `<li class="cart-card divider"><p>Your cart is empty.</p></li>`;
  }
}

renderCartContents(); 