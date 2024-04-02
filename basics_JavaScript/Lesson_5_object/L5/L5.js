//объект передается по ссылке
const car = {
    make: "Audi",
    model: "A5",
    year: 2023,
    color: "red",
    passengers: 2,
    power: 249,
    odometer: 0,
    engineIsStarted: false,
    startEngine: function () {
        this.engineIsStarted = true;
    },
    stopEngine: function () {
        this.engineIsStarted = false;
    },
    haveRoadTrip: function (distance) {
        if (this.engineIsStarted) {
            this.odometer += distance;
        } else {
            alert("Сначала запустите двигатель");
        }
    }
};
console.log(car.model);

//добавляем
car.power = 350;
console.log(car.power);

car.newParameter = 'random parameter';
console.log(car.newParameter);

//удаление
delete car.passengers;
console.log(car.passengers);

//цикл
for (const key in car) {
    console.log(key + car[key])
}

//Объект в массив
//ключи
console.log(Object.keys(car));

//значения
console.log(Object.values(car));
//output:
// [
//     'Audi',
//     'A5',
//     2023,
//     'red',
//     350,
//     0,
//     false,
//     [Function: startEngine],
// [Function: stopEngine],
// [Function: haveRoadTrip],
// 'random parameter'
// ]

//ключ значение
console.log(Object.entries(car));

//Объекты высшего порядка
const array = [1, 2, 3, 10, 15];

// map - выполнить с каждым из массива по очереди
const arrayUp = array.map(item => item * 2); // [2, 4, 6, 20, 30]

// filter - фильтрация по правилу, исключаем лишние
array.filter(item => item >= 10); // [10, 15]

// some - проверка на наличие элемента в массиве
array.some(item => item >= 10); // true

// reduce - проходится по массиву и объединяет во что-то одно
// перебор слева направо. a это аккумулятор, накапливает в себе значения изначально 0(когда умножаем 1), b это текущий
// элемент массива
array.reduce((a, b) => a + b); //31
array.reduce((a, b) => a + b) / array.length; //6.2

// find - поиск по условию, но не как в index of. Допустим нужно вернуть объект по имени из массива
const studentsPracticeTime =
    [
        {
            firstName: "Ivanov", practiceTime: 56
        },
        {
            firstName: "Petrov",
            practiceTime: 120
        },
    ];
console.log(studentsPracticeTime.find(item => item.firstName === 'Petrov'));

//Деструктуризация - более удобное разделение на переменные объекта или массива

// Сбор данных из объекта.
const student = {
    firstName: "Ivan",
    lastName: "Petrov",
    age: 21,
};
//Деструктуризация - мы объявляем все переменные в фигурных скобках, название должно совпадать с
// нужным нам параметром.
const {firstName, lastName, age} = student;

// Сбор данных из массива.
const students = ["Ivanov", "Petrov", "Belkin"];
// Деструктуризация - Тут мы указываем имена переменных в квадратных скобках,
// и в них по порядку будут записаны элементы массива.
const [student1, student2, student3] = students;

