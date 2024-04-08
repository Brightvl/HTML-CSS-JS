// Задание 1.1
// Создайте функцию mergeArrays, которая принимает два
// массива и возвращает новый массив, содержащий все
// элементы из обоих массивов. Используйте spread
// оператор для объединения массивов.
// mergeArrays([1, 2, 3], [4, 5, 6]);
// Ожидаемый результат: [1, 2, 3, 4, 5, 6]

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const mergeArrays = (arr1, arr2) => [...arr1, ...arr2];

console.log(mergeArrays(arr1, arr2));

// Задание 1.2
// Создайте функцию removeDuplicates, которая принимает любое количество аргументов и возвращает новый
// массив, содержащий только уникальные значения.
// Используйте rest оператор для сбора всех аргументов в массив, а затем filter для определения дубликатов.
// removeDuplicates(1, 2, 3, 2, 4, 1, 5);
// Ожидаемый результат: [1, 2, 3, 4, 5];

// const removeDuplicates = (...args) => {
//     return args.filter((value, index, self) => self.indexOf(value) === index);
// }
//
// console.log(removeDuplicates(1, 2, 3, 2, 4, 1, 5));

const removeDuplicates = (...args) => {
    let uniqueArray = [];

    // Собираем все аргументы в массив
    for (let i = 0; i < args.length; i++) {
        // Проверяем, если элемент уже есть в уникальном массиве
        if (uniqueArray.indexOf(args[i]) === -1) {
            uniqueArray.push(args[i]);
        }
    }
    return uniqueArray;
}

console.log(removeDuplicates(1, 2, 3, 4, 3, 2, 1, 3, 4, 10));


// Задание 2
const arr = [1, 2, 3, 4, 5, 1, 5, 6, 3, 10];

// 1. Напишите функцию getEvenNumbers, которая принимает массив
// чисел в качестве аргумента и возвращает новый массив,
// содержащий только четные числа.

const getEvenNumbers = (arr = []) => {
    return arr.filter(number => number % 2 === 0);
}

console.log(getEvenNumbers(arr))


//  2. Задача: Напишите функцию calculateAverage, которая принимает
// массив чисел в качестве аргумента и возвращает среднее значение этих чисел.
const calculateAverage = (arr = []) => arr.reduce((a, b) => a + b, 0) / arr.length;
console.log(calculateAverage(arr))


//  3. Напишите функцию capitalizeFirstLetter, которая принимает строку в
// качестве аргумента и возвращает новую строку, в которой первая
// буква каждого слова является заглавной

const capitalizeFirstLetter = (str = String) => {
    return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ');
};

console.log(capitalizeFirstLetter('в качестве аргумента и возвращает новую строку, в которой первая буква каждого' +
    '  слова является заглавной'));

// Задание 3
// Напишите функцию createCalculator, которая принимает начальное
// значение и возвращает объект с двумя методами: add и subtract.
// Метод add должен увеличивать значение на переданное число, а
// метод subtract должен уменьшать значение на переданное число.
// Значение должно быть доступно только через методы объекта, а не напрямую

function createCalculator(initialValue) {
    let tempNumber = initialValue;
    return {
        add: (number) => tempNumber += number,
        subtract: (number) => tempNumber -= number,
        getNumber: () => tempNumber
    }
}

let calculate = createCalculator(5);
calculate.add(5);
console.log(calculate.getNumber());
calculate.subtract(100);
console.log(calculate.getNumber());


// Задание 4
//  1. Напишите функцию createGreeting, которая принимает имя
// пользователя и возвращает функцию, которая будет выводить
// приветствие с использованием этого имени.
//  // Пример использования:
//  const greeting = createGreeting('John');
//  greeting(); // Ожидаемый результат: "Hello, John!"

const createGreeting = (userName) => {
    return () => {
        return 'Hello, ' + userName + '!';
    };
};

const greeting = createGreeting('John');
console.log(greeting());

//  1. Задача: Напишите функцию createPasswordChecker, которая
// принимает допустимую длину пароля в качестве аргумента и
// возвращает функцию для проверки введенного пароля.
// Возвращаемая функция должна принимать пароль и возвращать
// true, если его длина соответствует допустимой, и false в противном
// случае.

const createPasswordChecker = (validLength) => {
    return (password) => password.length === validLength;
};

const isPasswordValid = createPasswordChecker(8);
console.log(isPasswordValid('password'));
console.log(isPasswordValid('secret'));
