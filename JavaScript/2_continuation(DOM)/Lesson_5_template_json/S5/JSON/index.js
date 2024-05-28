import {dataInfo} from "./data.js";

const div = document.querySelector('.content');
const data = JSON.parse(dataInfo);
console.log(data);

data.forEach(({id, name, firstname, age, photo}) => {
    const divCard = document.createElement('div');
    divCard.classList.add('card');
    div.appendChild(divCard);

    const img = document.createElement('img');
    img.classList.add('img-profile');
    img.width = 400;
    img.src = photo;
    divCard.appendChild(img)

    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body');
    divCard.appendChild(cardBody);

    const title = document.createElement('h5');
    title.classList.add('card-title');
    title.textContent = `${name} ${firstname}`;
    cardBody.appendChild(title);

    const subtitle = document.createElement('h6');
    subtitle.classList.add('card-subtitle');
    subtitle.textContent = age;
    cardBody.appendChild(subtitle);

    const idPara = document.createElement('p');
    idPara.classList.add('card-text');
    idPara.textContent = `id ${id}`;
    cardBody.appendChild(idPara);
});