import { displayProductCard } from './product-card/productCard.js';
import { displayCatalogCard } from './catalog/catalogCard.js';

const data = [];



document.addEventListener("DOMContentLoaded", () => {
    displayCatalogCard('./resource/json/data.json', '.catalog__box');
});

displayProductCard('./resource/json/data.json', '.cart__box');


