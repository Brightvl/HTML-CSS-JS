// Задание 1
// Необходимо с помощью цикла for вывести следующие 11 строк в консоль:
// 0 – это ноль
// 1 – нечетное число
// 2 – четное число
// 3 – нечетное число
// …
// 10 – четное число
for (let i = 0; i <= 11; i++) {
    if (i === 0) console.log(`${i} - это ноль`);
    else if (i % 2 === 0) console.log(`${i} - это четное число`);
    else console.log(`${i} - это нечетное`);
}
// Задание 2
// Дан массив [1, 2, 3, 4, 5, 6, 7]
// Сделайте из этого массива следующий [1, 2, 3, 6, 7]
const array = [1, 2, 3, 4, 5, 6, 7];
const newArray = array.slice(0, 3).concat(array.slice(-2));
console.log(newArray);

console.log('было ' + array);
console.log('стало ' + newArray);


// Задание 3
// Используя Math.random() вам необходимо генерировать цифры от 0 до 9, и создать массив состоящий из 5 таких элементов
const getRandomArray = (number = 1) => {
    let tempArr = []
    for (let i = 0; i < number; i++) {
        tempArr.push(Math.floor(Math.random() * 10));
    }
    return tempArr;
}
const randomArray = getRandomArray(5);
console.log("Массив случайных чисел:", randomArray);

// 1. Рассчитать сумму элементов этого массива
const sumArray = (number = []) => {
    let sum2 = 0;
    for (const numberKey of number) {
        sum2 += +numberKey;
    }
    return sum2
};
console.log("Сумма элементов массива:", sumArray(randomArray));

// 2. Найти минимальное число
const minNumber = Math.min(...randomArray);
console.log("Минимальное число в массиве:", minNumber);

// 3. Найти есть ли в этом массиве число 3
const includesThree = randomArray.includes(3);
console.log("Массив содержит число 3:", includesThree);


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