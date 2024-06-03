import {fetchData} from '../resource/json/json.js'

export async function displayProductCard(url, classEl) {
    const data = await fetchData(url);
    if (data) {
        data.forEach(el => {
            const productBox = document.querySelector(classEl);
            productBox.insertAdjacentHTML('beforeend', `
            <div class="product">
                <button class="btn__del" type="button">удалить</button>
                <div class="product__content">
                    <img class="product__img" src="${el.image}" alt="${el.name}">
                    <div class="product__desc">
                        <h2 class="product__name">${el.name}</h2>
                        <p class="product__price_label">Price: <span class="product__price" data-unit-price="${el.price}">$${(el.price * el.quantity).toFixed(2)}</span></p>
                        <p class="product__color">Color: ${el.color}</p>
                        <p class="product__size">Size: ${el.size}</p>
                        <div class="product__qty">
                            <label class="input__label">Quantity: </label>
                            <input class="input__quantity" type="number" min="0" max="${el.max}" value="${el.quantity}">
                        </div>
                    </div>
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
