// обработка JSON с помощью асинхронного запроса
async function fetchData(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Не удалось получить сведения из data.json`)
        }
        return await response.json();
    } catch (error) {
        console.error(error)
        return null;
    }
}


async function displayCard(url, classEl) {
    const data = await fetchData(url);
    if (data) {
        data.forEach(el => {
            const productBox = document.querySelector(classEl);
            console.log(el)
            productBox.insertAdjacentHTML('beforeend', `
            <div class="product">
                <button class="btn__del" type="button">удалить</button>
                <div class="product__content">
                    <img class="product__img" src="${el.image}" alt="${el.name}">
                    <div class="product__desc">
                        <h2 class="product__name">${el.name}</h2>
                        <p class="product__price_label">Price: <span class="product__price">$${el.price}</span></p>
                        <p class="product__color">Color: ${el.color}</p>
                        <p class="product__size">Size: ${el.size}</p>
                        <div class="product__qty">
                            <label class="input__label">Quantity: </label>
                            <input class="input__quantity" type="number" min="0" max="${el.max}" value="${el.quantity}">
                        </div>
                    </div>
                </div>
            </div>`)
        });
    }
}

const url = './data.json';
displayCard(url, '.product__box');