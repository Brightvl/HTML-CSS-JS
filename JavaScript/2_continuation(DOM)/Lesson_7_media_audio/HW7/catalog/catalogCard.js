import { fetchData } from '../resource/json/json.js';

export async function displayAllCatalogCard(url, classEl) {
    const data = await fetchData(url);

    if (data) {
        data.forEach(el => {
            classEl.insertAdjacentHTML('beforeend', `
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
    }
}
