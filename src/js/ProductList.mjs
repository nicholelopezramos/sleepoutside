import { renderListWithTemplate } from "./utils.mjs";

export default class ProductList {
    constructor(category, dataSource, listElement){
        this.category = category;
        this.dataSource = dataSource;
        this.listElement = listElement;
    }

    async init() {
        const list = await this.dataSource.getData()

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
}
