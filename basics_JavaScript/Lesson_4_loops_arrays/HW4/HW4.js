// Задание 1
// Необходимо с помощью цикла for вывести следующие 11 строк в консоль:
// 0 – это ноль
// 1 – нечетное число
// 2 – четное число
// 3 – нечетное число
// …
// 10 – четное число
console.log('Задание 1:');

function sequence() {
    console.log(0 + ' – это ноль');
    for (let i = 1; i <= 10; i++) {
        console.log((i % 2 === 0) ? (i + ' – четное число') : (i + ' – нечетное число'));
    }
}

sequence()


// Задание 2
// Дан массив [1, 2, 3, 4, 5, 6, 7]
// Сделайте из этого массива следующий [1, 2, 3, 6, 7]
// Задание 2 (без filter)
console.log('Задание 2:');
const array = [1, 2, 3, 4, 5, 6, 7];
const newArray = array.slice(0, 3).concat(array.slice(-2));
console.log(newArray);

console.log('было ' + array);
console.log('стало ' + newArray);


// Задание 3
// Используя Math.random() вам необходимо генерировать цифры от 0 до 9, и создать массив состоящий из 5 таких элементов
console.log('Задание 3:');
const randomArray = (count) => {
    let arr = []
    for (let i = 0; i < count; i++) {
        arr.push(Math.floor(Math.random() * 10));
    }
    return arr;
}

const arr = randomArray(5)

console.log('Массив:', arr);
// 1. Рассчитать сумму элементов этого массива

let getSum = (number = []) => {
    let sum = 0;
    for (let i = 0; i < number.length; i++) sum += number[i];
    return sum;
}
console.log('Сумма элементов:', getSum(arr));

// 2. Найти минимальное число
const min = Math.min(...arr);
console.log('Минимальное число:', min);

// 3. Найти есть ли в этом массиве число 3
console.log('Есть ли число 3:', arr.includes(3));

// *Необязательное задание. *
// Необходимо вывести горку в консоль (используя цикл for), как показано на рисунке, только у вашей горки должно быть 20 рядов, а не 5:
//
// x
// xx
// xxx
// xxxx
// xxxxx
console.log('Горка:');
for (let i = 1; i <= 20; i++) {
    console.log('x'.repeat(i));
}