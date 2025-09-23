import ProductData from  './ProductData.mjs';
import ProductList from './ProductList.mjs';
import Alert from './alert.js';
import { loadHeaderFooter } from './utils.mjs';

const alert = new Alert('../public/json/alert.json');
alert.showAlerts();

loadHeaderFooter()



const productData = new ProductData();
const productList = new ProductList();