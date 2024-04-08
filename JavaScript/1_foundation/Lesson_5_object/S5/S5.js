// Задание 1.
// 1. Создайте объект с ключами от 1 до 7, в качестве
// значений содержащий имена дней недели. Выведите на
// экран “Вторник”
const week = {
    1: 'Понедельник',
    2: 'Вторник',
    3: 'Среда',
    4: 'Четверг',
    5: 'Пятница',
    6: 'Суббота',
    7: 'Воскресение',
}
console.log(week[2]);

// 2. Создайте объект user с ключами 'name', 'surname', ‘age’.
// Выведите на экран фамилию, имя и возраст через дефис.
const user = {
    name: 'java',
    surname: 'script',
    age: '20'
}
//сформировал в массив и потом как бы добавил к каждому '-'
console.log(Object.values(user).reduce((a, b) => a + ' - ' + b));

// 3. Добавьте в объект user свойство отчество, которое
// пользователь должен ввести с клавиатуры
// user.patronymic = prompt('Введите отчество');

// 4. Удалите свойство surname
delete user.surname;

// Задание 2
// 1. Даны два массива: первый с названиями дней недели, а второй - с их порядковыми номерами:
const arr1 = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
const arr2 = [1, 2, 3, 4, 5, 6, 7];
// С помощью цикла создайте объект, ключами которого будут названия дней, а значениями - их номера.
const week_2 = {}
if (arr1.length === arr2.length) {
    for (let i = 0; i < arr1.length; i++) {
        week_2[arr1[i]] = arr2[i];
    }
}
console.log(Object.entries(week_2))

// 2. Переберите этот объект циклом и возведите каждый элемент этого объекта в квадрат
const obj = {x: 1, y: 2, z: 3};
console.log(Object.values(obj).map(temp => temp * 2));

//Задание 3.
//Найдите сумму элементов приведенного объекта
const obj1 = {
    key1: {
        key1: 1,
        key2: 2,
        key3: 3,
    },
    key2: {
        key1: 4,
        key2: 5,
        key3: 6,
    },
    key3: {
        key1: 7,
        key2: 8,
        key3: 9,
    },
}
//лямбда
console.log(Object.values(obj1)
    .map(temp => Object.values(temp))
    .flat()
    .reduce((a, b) => a + b));

//или
let sum = 0;
for (const key in obj1) {
    for (const keyIn in obj1[key]) {
        sum += obj1 [key] [keyIn];
    }
}
console.log(sum);

// Задание 4
// 1. Создайте объект riddles
// 2. Добавьте свойства question, answer
// 3. создайте метод askQuestion который спрашивает у пользователя
// вопрос question и сравнивает ответ с answer
// 4. Если ответил неверно, то в консоль выводится текст: “вы
// проиграли”
// 5. * По желанию, создать 2 подсказки, если пользователь ответил
// неверно

const riddles = {
    question: 'зимой и летом одним цветом',
    answer: 'ёлка',
    hints: ['На новый год', 'Она зеленого цвета'],
    askQuestion() {
        const choice = prompt(riddles.question);
        if (choice.toLowerCase() === 'ёлка`') {
            console.log('угадал');
        } else {
            if (this.hints.length) {
                alert(this.hints.pop());
                this.askQuestion()
            }
            else console.log('конец игры')
        }
    }
}
