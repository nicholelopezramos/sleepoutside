// src/js/product-listing.js
import ProductData from "./ProductData.mjs";
import ProductList from "./ProductList.mjs";
import { getParam } from "./utils.mjs";

const category = getParam('category');
const dataSource = new ProductData(category);
const listElement = document.querySelector('.product-list');

const productList = new ProductList(category, dataSource, listElement);
productList.init();