import { displayAllCatalogCard } from './catalog/catalogCard.js';
import { displayProductCard } from './product-card/productCard.js';

document.addEventListener("DOMContentLoaded", () => {
    const catalogBox = document.querySelector('.catalog__box');
    const cartBox = document.querySelector('.cart__box');

    displayAllCatalogCard('./resource/json/data.json', catalogBox);

    // Добавляем обработчик событий после отображения карточек каталога
    catalogBox.addEventListener('click', (event) => {
        if (event.target.closest('.add-box__link')) {
            event.preventDefault();
            const catalogItem = event.target.closest('.catalog-item');
            addProductToCart(catalogItem);
        }
    });

    function addProductToCart(catalogItem) {
        const productData = {
            name: catalogItem.querySelector('.txt__description').innerText,
            image: catalogItem.querySelector('.catalog-item__img').src,
            price: parseFloat(catalogItem.querySelector('.catalog-item__price').innerText.replace('$', '')),
            color: 'Default', // Замените на соответствующее значение, если имеется
            size: 'Default', // Замените на соответствующее значение, если имеется
            quantity: 1,
            max: 10 // Замените на соответствующее значение, если имеется
        };

        displayProductCard(productData, cartBox);
    }
});
