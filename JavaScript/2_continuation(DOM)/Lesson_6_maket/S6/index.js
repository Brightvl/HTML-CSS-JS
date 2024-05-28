const url = './data.json';

async function fetchData() {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Не удалось получить сведения из data.json`)
        }
        const data = await response.json();
        console.log(data);

        const productBox = document.querySelector('.product__box');

        data.forEach(({name, image, price, color, size, quantity,max}) => {
            const productEl = `
            <div class="product">
                <button class="btn__del" type="button">удалить</button>
                <div class="product__content">
                    <img class="product__img" src="${image}" alt="${name}">
                    <div class="product__desc">
                        <h2 class="product__name">${name}</h2>
                        <p class="product__price_label">Price: <span class="product__price">$${price}</span></p>
                        <p class="product__color">Color: ${color}</p>
                        <p class="product__size">Size: ${size}</p>
                        <div class="product__qty">
                            <label class="input__label">Quantity: </label>
                            <input class="input__quantity" type="number" min="0" max="${max}" value="${quantity}">
                        </div>
                    </div>
                </div>
            </div>`;
            productBox.insertAdjacentHTML('beforeend', productEl);
        });

    } catch (error) {
        console.error(error);
    }
}

fetchData();