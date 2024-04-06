// // Задание 1
// const blockDiv = document.querySelector('.block'); //нашли blockDiv
// const itemDiv = document.createElement('div'); // создали itemDiv
//
// // добавили класс itemDiv
// itemDiv.classList.add('item'); // 1 вариант добавляет атрибут
// itemDiv.setAttribute('class', 'block item');//2 вариант перезаписывает атрибут
// itemDiv.textContent = 'Элемент внутри'; // добавили внутрь текст
// blockDiv.appendChild(itemDiv); // добавили в block созданный item
//
// //style
// itemDiv.style.color = 'blue';
// itemDiv.style.border = '1px solid black';
// itemDiv.style.backgroundColorborder = 'f8f8f8';
// itemDiv.style.padding = '16px';
// itemDiv.style.width = '300px';
//
// console.log(itemDiv.style);

// Задание 2
// 1. Необходимо с помощью querySelector найти параграф с классом text
const textElem = document.querySelector('.text');
// 2. Вывести в консоль соседний элемент h2
console.log(textElem.previousElementSibling)
// 3. Вывести в консоль родительский элемент content
console.log(textElem.parentElement);
// 4. Вывести в консоль картинку
console.log(textElem.parentElement.previousElementSibling)
// 5. Вывести в консоль родительский элемент elem
console.log(textElem.parentElement.parentElement);

console.log(textElem.closest('body')); // вырезает фрагмент от и до

// Задание 3
// С помощью querySelector найти элемент h2 и вывести в консоль всех его родителей
const h2 = document.querySelector('.info h2');
const parentEls = [];
let parent = h2.parentNode;
console.log(parent);

while (parent !== null) {
    parentEls.push(parent);
    parent = parent.parentNode;
}

console.log(parentEls)

// Задание 4
// 1. Дано поле ввода и кнопка отправить, необходим
// реализовать функционал, если пользователь нажимает на
// кнопку отправить, а поле ввода пустое, то под полем ввода
// и кнопкой должен появиться заголовок h2 с текстом вы не
// заполнили поле ввода
// 2. Цвет у рамки сделать красным
const form = document.querySelector('form');
const input = document.querySelector('input');
const btn = document.querySelector('.btn');

// input.addEventListener('input', (event) => {
//     console.log(event.target);
//     console.log(event.type);
//     // event указывает на событие
//     // target/отсылка показывает какой html фрагмент будет участвовать в событии
//     // value какое то значение
//     // type тип события
//
// });

// function clickBtn() {
//     if (input.value.trim() === '') {
//         const error = document.createElement('h2');
//         error.textContent = 'Вы не заполнили поле';
//         error.style.border = '2px solid red';
//         form.appendChild(error);
//     }
// }

form.addEventListener('submit', (e) => {
    e.preventDefault(); //важно убрать отправку формы по умолчанию
    const error = document.createElement('h2');
    if (input.value.trim() === '') {
        error.textContent = 'Вы не заполнили поле';
        error.style.border = '2px solid red';
    } else {
        error.textContent = 'Вы заполнили поле успешно';
        error.style.border = '2px solid green';
    }
    form.appendChild(error);
    setTimeout(() => {
        error.remove()
    }, 1000);

});

