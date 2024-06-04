export function displayProductCard(data, DOMel) {
    if (data) {
        DOMel.insertAdjacentHTML('beforeend', `
            <div class="product">
                <button class="btn__del" type="button">удалить</button>
                <div class="product__content">
                    <img class="product__img" src="${data.image}" alt="${data.name}">
                    <div class="product__desc">
                        <h2 class="product__name">${data.name}</h2>
                        <p class="product__price_label">Price: <span class="product__price" data-unit-price="${data.price}">$${(data.price * data.quantity).toFixed(2)}</span></p>
                        <p class="product__color">Color: ${data.color}</p>
                        <p class="product__size">Size: ${data.size}</p>
                        <div class="product__qty">
                            <label class="input__label">Quantity: </label>
                            <input class="input__quantity" type="number" min="0" max="${data.max}" value="${data.quantity}">
                        </div>
                    </div>
                </div>
            </div>`);

        // Добавление обработчиков событий для изменения количества
        const quantityInputs = DOMel.querySelectorAll('.input__quantity');
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
