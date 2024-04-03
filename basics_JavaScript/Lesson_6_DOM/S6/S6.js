//Задание 1
// получили ссылку
// найти первого ребенка
// const div = document.querySelector('#block p:first-child');
// console.log(div);

//получили абзац
// найти из всех по индексу
// const div = document.querySelectorAll('p');
// console.log(div[1]);

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
link.textContent = 'link text js';
// link.href = 'http'; //1 вариант
link.setAttribute('href', 'http') //2 вариант

// задание 2.2
// img.src = 'https://th.bing.com/th/id/R.d94321c9d76ba1810cd2e4883b5b2e20?rik=Yxo9TcLklYI6nA&pid=ImgRaw&r=0/'; //1 вариант
img.width = 300;
img.setAttribute('src', 'https://th.bing.com/th/id/R.d94321c9d76ba1810cd2e4883b5b2e20?rik=Yxo9TcLklYI6nA&pid=ImgRaw&r=0/'); //2 вариант

// Задание 3