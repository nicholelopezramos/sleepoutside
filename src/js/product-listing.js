import ProductData from  './ProductData.mjs';
import ProductList from './ProductList.mjs';
import Alert from './alert.js';
import { loadHeaderFooter } from './utils.mjs';
import { getParam } from './utils.mjs';

const alert = new Alert('../public/json/alert.json');
alert.showAlerts();

loadHeaderFooter();

const category = getParam('category');
// first create an instance of the ProductData class.
const dataSource = new ProductData();
// then get the element you want the product list to render in
const listElement = document.querySelector('.product-list');
// then create an instance of the ProductList class and send it the correct information.
const myList = new ProductList(category, dataSource, listElement);
// finally call the init method to show the products
myList.init();


const searchTerm = getParam('search');

const titleElement = document.querySelector('#category-title');

if (titleElement) {
  if (searchTerm) {
    titleElement.textContent = `Search Results: "${searchTerm}"`;
  } else if (category) {
    const categoryName = category.charAt(0).toUpperCase() + category.slice(1).replace('-', ' ');
    titleElement.textContent = `Top Products: ${categoryName}`;
  } else {
    titleElement.textContent = 'All Products';
  }
}


// Set search term if it exists
if (searchTerm) {
  myList.searchTerm = searchTerm;
}

// Finally call the init method to show the products
myList.init();

// const productData = new ProductData();
// const productList = new ProductList();