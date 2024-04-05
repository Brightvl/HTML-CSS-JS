// Задание 1
// Создать переменные num1, num2 которые пользователь вводит с клавиатуры
// Проверьте, что переменная num1 равна или меньше 1, а переменная num2 больше или равна 3.
const num1 = +prompt("Введите число", '0');
const num2 = +prompt("Введите число", '0');

if (num1 <= 1 && num2 >= 3) {
    console.log("все ок");
} else {
    console.log("не ок")
}

// Задание 2
let test = true;
console.log((test === true) ? '+++' : '---')

// Задание 3
// В переменной day лежит какое-то число из интервала от 1 до 31.
// Определите в какую декаду месяца попадает это число (в первую, вторую или третью).
const day = 5;
if (day <= 10) {
    console.log("первая декада")
} else if (day >= 11 && day <= 20) {
    console.log("вторая декада")
} else {
    console.log("третья декада")
}

//задание 4
// решение в лоб
const number = 164561236;

const hundreds = Math.floor(number / 100);
const tens = Math.floor((number % 100) / 10);
const units = number % 10;

console.log(`В числе ${number} количество сотен: ${hundreds}, десятков: ${tens}, единиц: ${units}`);

// решение для всех
// const number = 164561236;
// let tempNum = number;
// let divider = 10;
// for (let i = 2; i < number.toString().length; ++i) {
//     divider *= 10;
// }
// let count = 1;
// while (tempNum % divider !== 0) {
//
//     console.log(`разряд ${count++} = ` + Math.floor(tempNum / divider));
//     tempNum %= divider;
//     divider /= 10;
//     if (tempNum % divider === 0) {
//         console.log(`разряд ${count} = ` + Math.floor(tempNum / divider));
//     }
// }
