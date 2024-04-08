// Задание 1.1
// Получите ссылку на первый абзац из дива с id,
// равным block, выведите его в консоль

const div11 = document.querySelector('#block p:first-child');
console.log(div11);

// Получите ссылку на первый абзац с классом www. и вывести его в консоль
const div12 = document.querySelectorAll('p');
console.log(div12[1]);

// перебор всех параграфов и поиск внутри текста
const div = document.querySelectorAll('p');
div.forEach((el) => {
    console.log(el.innerText); // именно текст достаем
    // el.innerText = 'текст'; // заменить текст
});

const classP = document.querySelectorAll('.www');
console.log(classP[0]);

//задание 2
const link = document.querySelector('.link');
const img = document.querySelector('.photo');

// задание 2.1
// Вам необходимо поменять текст внутри ссылки на “link text js”
link.textContent = 'link text js';
// Заменить href, на значение https://developer.mozilla.org/ru/
// link.href = 'https://developer.mozilla.org/ru/'; //1 вариант
link.setAttribute('href', 'https://developer.mozilla.org/ru/') //2 вариант

// задание 2.2
// Вам необходимо с помощью js поменять значение src на любое изображение из интернета
// img.src = 'https://th.bing.com/th/id/R.d94321c9d76ba1810cd2e4883b5b2e20?rik=Yxo9TcLklYI6nA&pid=ImgRaw&r=0/'; //1 вариант
img.width = 300;
img.setAttribute('src', 'https://th.bing.com/th/id/R.d94321c9d76ba1810cd2e4883b5b2e20?rik=Yxo9TcLklYI6nA&pid=ImgRaw&r=0/'); //2 вариант

// Задание 3
// 1. Дан тег <div class="content"></div>
// 2. Создайте новый элемент p
// 3. Добавьте в него текст “Новый текстовый элемент”
// 4. Добавьте созданный элемент внутри <div class="content"></div>
// 5. Удалите добавленный узел
const div2 = document.querySelector('.content');
const newTxt = document.createElement('p');
newTxt.innerHTML = '<span>Новый текстовой элемент</span>'; // inHTML когда нужно вписать теги HTML
// newTxt.textContent = 'Новый текстовой элемент'; // есть смысл просто так писать
div2.appendChild(newTxt);
newTxt.remove();

// Задание 4
// 1. Создать элемент button, добавить в блок <div class="content"></div>
const but = document.querySelector('.button');
div2.appendChild(but);

let count = 0;

but.addEventListener('click', () => {
    count++;
    console.log(`Количество нажатий ${count}`)
})

// 2. При клике на который в консоль выводится сколько раз
// пользователь нажал на данную кнопку
const newBtn = document.createElement('button');
newBtn.textContent = 'Обнулить';
div2.appendChild(newBtn);
newBtn.onclick = clickReset;

function clickReset() {
    count = 0;
    console.log(`Счетчик обнулен`)
}

// Задание 5
// 1. Дан тег <div class="content"></div>
// 2. Создайте с помощью javascript новый элемент button
// 3. Добавьте текст для кнопки “Отправить”
// 4. При клике на данную кнопку необходимо чтобы текст
// поменялся на “Текст отправлен”

const textBtn = document.createElement('button');
textBtn.textContent = 'Отправить';
div2.appendChild(textBtn);
textBtn.addEventListener('click', () => {

    setTimeout(
        () => {
            textBtn.textContent = 'Текст отправлен';
        },
        1000);
});



