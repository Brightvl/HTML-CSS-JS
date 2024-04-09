// Задание 1
// 1. В html создать кнопку button
// 2. После загрузки страницы вывести в консоль текст “страница загрузилась”
// 3. Добавить событие onclick которое выводит в консоль текст “событие onclick”
// 4. Добавить событие addEventListener которое выводит в консоль текст “событие addEventListener”

const myBtn = document.querySelector('#myButton');
window.addEventListener('load', () => {
    console.log('страница загрузилась');
    myBtn.onclick = () => console.log('событие onclick');
    myBtn.addEventListener('click', () => console.log('событие onclick'));
});

// Задание 2
// 1. Создать в html три кнопки button с нумерацией (1, 2, 3 соответственно)
// 2. Добавить клик на кнопку, чтобы в консоль выводилась именно та кнопка на которую мы нажали
// document.querySelector('#btn1')
//     .addEventListener('click', (e) => console.log(e.target.id));
// document.querySelector('#btn2')
//     .addEventListener('click', (e) => console.log(e.target.id));
// document.querySelector('#btn3')
//     .addEventListener('click', (e) => console.log(e.target.id));

// или
document.querySelectorAll('.button_click')
    .forEach(el => el
        .addEventListener('click', () => console.log(el.innerHTML)));


// 3. Добавить кнопку button с текстом 4, которая считает сколько раз на нее нажали и количество нажатий на эту
// кнопку выводит в консоль
let count = 0;
document.querySelector('#btn4').addEventListener('click', (e) => {
    count++;
    console.log(`Кнопка ${e.target.textContent} нажата ${count}`)
});
// 4. Создать кнопку button с текстом 5, При клике на которую, меняется текст данной кнопки на “Вы нажали на эту
// кнопку”
document.querySelector('#btn5').addEventListener('click', function () {
    this.innerText = 'вы нажали на эту кнопку' //this это контекст
    this.style.backgroundColor = 'black';
    this.style.color = 'white';
    this.style.transition = 'all 1s ease-in-out';
    let x = Math.random() * window.innerWidth;
    let y = Math.random() * window.innerHeight;
    this.style.transform = `translate(${x}px, ${y}px)`;
    this.disabled = false;
    setTimeout(() => {
        this.style.transform = `translate(${0}px, ${0}px)`;
    },1000);
});

// Задание 3
// 1. Создать кнопку, которая добавляем заголовок h1 с текстом,
// "Новый заголовок", данный элемент нужно расположить после кнопки
// const but = document.createElement('button');
// but.innerText = 'Кнопка';
// document.createElement('h1').nextElementSibling(but)
// but.addEventListener('click', function () {
//     this.appendChild(document.createElement('h1').innerText = 'Новый заголовок');
// })


// 2. Создать вторую кнопку, которая будет удалять созданный
// заголовок h1

// 3. Создать третью кнопку, при наведении на которую в
// консоль будет выводиться текст “вы навели на данную
// кнопку” , как только вы убираем курсор мыши с кнопки, в
// консоли должен появиться текст “Наведения на кнопку
// больше нет”