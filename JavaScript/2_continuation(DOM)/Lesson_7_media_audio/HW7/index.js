import { displayAllCatalogCard } from './catalog/catalogCard.js';
import { displayProductCard } from './product-card/productCard.js';

/**
 * Отображение появится при полной загрузке DOM структуры
 */
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
            color: 'Default',
            size: 'Default',
            quantity: 1,
            max: 10
        };

        displayProductCard(productData, cartBox);
    }
});
