// Задание 1
// 1. Поиск в интернете (бесплатные api примеры).
// 2. Найти любые данные, на произвольную тему.
// 3. Создать файл data.js.
// 4. Создать переменную которая будет хранить данные из публичных api.

import {dataUser} from './data.js';
const newData = JSON.parse(dataUser);

const divContentElem = document.querySelector('.content');

newData.forEach(element => {
    divContentElem.insertAdjacentHTML('beforeend', `
        <div class="wrapper">
        <img width="200px" src="https://fikiwiki.com/uploads/posts/2022-02/1644713782_47-fikiwiki-com-p-prikolnie-kartinki-pro-shchenkov-51.jpg" alt="">
            <h2>${element.name}</h2>
            <h3>${element.username}</h3>
            <p>${element.email}</p>
            <p>${element.address.city}</p>
        </div>`);
});

// Задание 2
// 1. Создать файл index.html.
// 2. Подключить data.js.
// 3. Сформировать контент из данных (картинка загловок и параграф).
// 4. Добавить данный контент в вёрстку.
// 5. * Добавить стили при необходимости (по желанию).