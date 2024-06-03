import {fetchData} from '../resource/json/json.js'

export async function displayCatalogCard(url, classEl) {
    const data = await fetchData(url);
    if (data) {
        data.forEach(el => {
            const productBox = document.querySelector(classEl);
            productBox.insertAdjacentHTML('beforeend', `
            <div class="catalog-item">
                <a href="#" class="catalog-item__link">
                    <img class="catalog-item__img" src="${el.image}" alt="item">
                    <div class="txt__box">
                        <p class="txt__description">${el.name}</p>
                        <p class="catalog-item__price">$${el.price}</p>
                    </div>
                </a>
                <div class="add-box">
                    <a href="#" class="add-box__link">
                        <img src="./resource/img/svg/cart.svg" alt="cart" class="add-box__img">
                        <p class="add-box__txt">Add to Cart</p>
                    </a>
                </div>
            </div>`);
        });


// Добавление обработчиков событий для изменения количества
        const quantityInputs = document.querySelectorAll('.input__quantity');
        quantityInputs.forEach(input => {
            input.addEventListener('input', function () {
                const quantity = parseInt(this.value);
                const productContent = this.closest('.product__content');
                const priceElement = productContent.querySelector('.product__price');
                const unitPrice = parseFloat(priceElement.dataset.unitPrice);
                const totalPrice = (unitPrice * quantity).toFixed(2);
                priceElement.textContent = `$${totalPrice}`;
            });
        });
    }
}