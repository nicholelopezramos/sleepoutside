import ProductData from "./ProductData.mjs";
import ProductList from "./ProductList.mjs";

// dataSource for the tents
const dataSource = new ProductData("tents");

const listElement = document.querySelector(".product-list");

// list of products for the tents
// I use diff variable name here
const productList = new ProductList("tents", dataSource, listElement);
productList.init()

