import { renderListWithTemplate } from "./utils.mjs";

<<<<<<< HEAD
export default class ProductList {
    constructor(category, dataSource, listElement){
=======
function productCardTemplate(product) {
    return `
    <li class="product-card">
      <a href="product_pages/?products=${product.Id}">
        <img src="${product.Image}" alt="${product.Name}">
        <h2>${product.Brand.Name}</h2>
        <h3>${product.Name}</h3>
        <p class="product-card__price">$${product.FinalPrice}</p>
      </a>
    </li>
    `;
}

export default class ProductList {
    constructor(category, dataSource, listElement) {
>>>>>>> main
        this.category = category;
        this.dataSource = dataSource;
        this.listElement = listElement;
    }

    async init() {
<<<<<<< HEAD
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
}
=======
        const list = await this.dataSource.getData();
        this.renderList(list);
    }

    renderList(list) {
        // const htmlStrings = list.map(productCardTemplate);
        // this.listElement.insertAdjacentHTML("afterbegin", htmlStrings.join(""));

        // apply use new utility function instead of the commented code above
        renderListWithTemplate(productCardTemplate, this.listElement, list);

    }

}
>>>>>>> main
