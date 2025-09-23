import { getLocalStorage, setLocalStorage } from "./utils.mjs";


export default class ProductDetails {
  constructor(productId, dataSource) {
    // Save the product id from the URL and the data source (ProductData)
    this.productId = productId;

    // This will hold the actual product object once we fetch it
    this.product = {};

    // The data source knows how to load product info from JSON
    this.dataSource = dataSource;
  }

  async init() {
    // use the datasource to get the details for the current product. 
    // findProductById will return a promise! use await or .then() to process it
    this.product = await this.dataSource.findProductById(this.productId);

    // the product details are needed before rendering the HTML
    this.renderProductDetails();

    // once the HTML is rendered, add a listener to the Add to Cart button
    // Notice the .bind(this). This callback will not work if the bind(this) is missing. 
    // Review the readings from this week on 'this' to understand why.
    document
      .getElementById('addToCart')
      .addEventListener('click', this.addProductToCart.bind(this));
  }


  addProductToCart() {
    const cartItems = getLocalStorage("so-cart") || [];
    cartItems.push(this.product);
    setLocalStorage("so-cart", cartItems);
  }

  renderProductDetails() {
    productDetailsTemplate(this.product);
  }
}
// returns the exact HTML structure required by /product_pages/index.html
function productDetailsTemplate(product) {
  document.querySelector("h2").textContent = product.Brand.Name;
  document.querySelector("h3").textContent = product.NameWithoutBrand;

  const productImage = document.getElementById("productImage");
  productImage.src = product.Image;
  productImage.alt = product.NameWithoutBrand;

  document.getElementById("productPrice").textContent = product.FinalPrice;
  document.getElementById("productColor").textContent = product.Colors[0].ColorName;
  document.getElementById("productDesc").innerHTML = product.DescriptionHtmlSimple;

  document.getElementById("addToCart").dataset.id = product.Id;
}

  return `
    <h3>${brand}</h3>

    <h2 class="divider">${nameNoBrand}</h2>

    <img
      class="divider"
      src="${imgSrc}"
      alt="${nameNoBrand}"
    />

    <p class="product-card__price">$${priceText}</p>

    <p class="product__color">${color}</p>

    <p class="product__description">
      ${descHtml}
    </p>

    <div class="product-detail__add">
      <button id="addToCart" data-id="${product.Id}">Add to Cart</button>
    </div>
  `;



