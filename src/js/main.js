import ProductData from  './ProductData.mjs';
import ProductList from './ProductList.mjs';
import Alert from './alert.js';

const alert = new Alert('../public/json/alert.json');
alert.showAlerts();




const productData = new ProductData();
const productList = new ProductList();