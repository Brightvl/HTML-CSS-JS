/*
    1) Дан массив const arr = [1, 5, 7, 9] с помощью Math.min и spread оператора,
    найти минимальное число в массиве, решение задание должно состоять из одной строки
 */
const arr = [1, 5, 7, 9];
console.log(Math.min(...arr));

/*
    2) Напишите функцию createCounter, которая создает счетчик и возвращает объект с двумя методами: increment и
    decrement. Метод increment должен увеличивать значение счетчика на 1, а метод decrement должен уменьшать значение
    счетчика на 1. Значение счетчика должно быть доступно только через методы объекта, а не напрямую.
*/

const createCounter = () => {
    let counter = 0;
    return {
        increment: () => counter++,
        decrement: () => counter--,
        getCount: () => counter,
    };
}

let count = createCounter();
console.log(count.getCount(),)
count.increment();
console.log('++ ' + count.getCount())
count.decrement();
console.log('-- ' + count.getCount())

/*
    3) Напишите рекурсивную функцию findElementByClass, которая принимает корневой элемент дерева DOM и название
    класса в качестве аргументов и возвращает первый найденный элемент с указанным классом в этом дереве.
 */

function findElementByClass(rootElement, nameOfClass) {
    for (let i = 0; i < rootElement.children.length; i++) {
        if (rootElement.children[i].classList.contains(nameOfClass)) {
            return rootElement.children[i];
        } else {
            findElementByClass(rootElement.children[i]);
        }
    }
}

const rootElement = document.getElementById('root');
const targetElement = findElementByClass(rootElement, 'content');
console.log(targetElement);