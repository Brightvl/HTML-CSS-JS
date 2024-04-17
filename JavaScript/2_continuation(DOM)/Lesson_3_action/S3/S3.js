// Задание 1
// 1. В html создать кнопку button
// 2. После загрузки страницы вывести в консоль текст “страница загрузилась”
// 3. Добавить событие onclick которое выводит в консоль текст “событие onclick”
// 4. Добавить событие addEventListener которое выводит в консоль текст “событие addEventListener”


const myBtn = document.querySelector('#myButton');
window.addEventListener('load', () => {
    console.log('страница загрузилась');
    myBtn.onclick = () => console.log('событие onclick');
    myBtn.addEventListener('click', () => console.log('событие addEventListener'));
});

// Задание 2
// 2.1. Создать в html три кнопки button с нумерацией (1, 2, 3 соответственно)
// 2.2. Добавить клик на кнопку, чтобы в консоль выводилась именно та кнопка на которую мы нажали
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


// 2.3. Добавить кнопку button с текстом 4, которая считает сколько раз на нее нажали и количество нажатий на эту
// кнопку выводит в консоль
let count = 0;
document.querySelector('#btn4').addEventListener('click', (e) => {
    count++;
    console.log(`Кнопка ${e.target.textContent} нажата ${count}`)
});
// 2.4. Создать кнопку button с текстом 5, При клике на которую, меняется текст данной кнопки на “Вы нажали на эту
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
    }, 1000);
});

// Задание 3
// 3.1. Создать кнопку, которая добавляем заголовок h1 с текстом,
// "Новый заголовок", данный элемент нужно расположить после кнопки

// 3.2. Создать вторую кнопку(сделал в одной), которая будет удалять созданный
// заголовок h1
const but31 = document.createElement('button');
but31.innerText = 'add h1';
document.querySelector('body').appendChild(but31);
const h1 = document.createElement('h1')
h1.innerText = 'Новый заголовок';

let flag = true;
but31.addEventListener('click', function () {
    if (flag) {
        but31.after(h1)
        but31.innerText = 'remove h1';
        flag = false;
    } else {
        h1.remove();
        but31.innerText = 'add h1';
        flag = true;
    }
});
// 3.3. Создать третью кнопку(сделал в одной), при наведении на которую в
// консоль будет выводиться текст “вы навели на данную
// кнопку”, как только вы убираем курсор мыши с кнопки, в
// консоли должен появиться текст “Наведения на кнопку больше нет”
but31.addEventListener('mouseover', () => {
    console.log('вы навели на данную кнопку')
});

but31.addEventListener('mouseleave', () => {
    console.log('Наведения на кнопку больше нет')
});


// второй вариант
const buttonsData = [
    {
        id: 'add',
        text: 'Добавить заголовок',
        clickHandler: addHeading
    },
    {
        id: 'remove',
        text: 'Удалить заголовок',
        clickHandler: removeHeading
    },
    {
        id: 'hover',
        text: 'Кнопка с наведением',
        mouseoverHandler: handleHoverIn,
        mouseoutHandler: handleHoverOut
    }
];

function addHeading() {
    const heading = document.createElement('h1');
    heading.textContent = 'Новый heading';
    document.body.appendChild(heading);
}

function removeHeading() {
    const heading = document.querySelector('h1');
    if (heading) heading.remove();
}

function handleHoverIn() {
    console.log('Вы навели на кнопку');
}

function handleHoverOut() {
    console.log('Наведения на кнопку больше нет');
}



function createButtons() {
    const btnContainer = document.createElement('div');
    document.body.appendChild(btnContainer)
    buttonsData.forEach((btn) => {
        const button = document.createElement('button');
        button.id = btn.id;
        button.textContent = btn.text;
        btnContainer.appendChild(button);

        if (btn.clickHandler) {
            button.onclick = btn.clickHandler;
        }
        if (btn.mouseoverHandler) {
            button.onmouseover = btn.mouseoverHandler;
        }
        if (btn.mouseoutHandler) {
            button.onmouseout = btn.mouseoutHandler;
        }
    });
}

createButtons();

// todo Задание 4. DOM
// 4.2 Нужно создать кнопку которая будет добавлять элементы списка с текстом “новый элемент списка”
// 4.3 Создать кнопку, которая будет удалять первый элемент из созданного списка
// 4.4 Создать кнопку, при клике на которую ей добавляется класс “click”

