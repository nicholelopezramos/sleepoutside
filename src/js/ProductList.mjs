import { loadHeaderFooter, renderListWithTemplate } from "./utils.mjs";
import { getParam } from "./utils.mjs";
import ProductData from "./ProductData.mjs";

loadHeaderFooter();

export default class ProductList {
    constructor(category, dataSource, listElement){
        this.category = category;
        this.dataSource = dataSource;
        this.listElement = listElement;
    }

    async init() {
        const list = await this.dataSource.getData(this.category);

    }
    productCardTemplate(product) {
        return `<li class="product-card">
            <a href="product_pages/?product=">
              <img src="${product.Image}" alt="${product.name}"/>
              <h3 class="card__brand">${product.brand.name}</h3>
              <h2 class="card__name">${product.nameWithoutBrand}</h2>
              <p class="product-card__price">$${product.ListPrice}</p>
            </a>
          </li>
        `;
    }

    renderList(list) {
        renderListWithTemplate(this.productCardTemplate.bind(this), this.listElement, list);
    }

     async init() {
    let list;
    
    // Check if we're doing a search or category listing
    if (this.searchTerm) {
      list = await this.dataSource.searchProducts(this.searchTerm);
    } else if (this.category) {
      list = await this.dataSource.getData(this.category);
    } else {
      // Default to showing all products or handle as needed
      list = [];
    }
    
    this.renderList(list);
  }

  renderList(list) {
    if (list && list.length > 0) {
      renderListWithTemplate(productCardTemplate, this.listElement, list);
    } else {
      // Show no results message
      this.listElement.innerHTML = `
        <li class="no-results">
          <p>No products found${this.searchTerm ? ` for "${this.searchTerm}"` : ''}.</p>
        </li>
      `;
    }
  }
}
    
)

