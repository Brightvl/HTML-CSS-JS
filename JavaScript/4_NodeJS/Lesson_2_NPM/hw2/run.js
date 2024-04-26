// Использование

const randomData = require('random-data-generator-brightvl');

// Генерация случайного имени
const randomName = randomData.generateRandomName();
console.log(randomName);

// Генерация случайного адреса
const randomAddress = randomData.generateRandomAddress();
console.log(randomAddress);

// Генерация случайной даты
const randomDate = randomData.generateRandomDate();
console.log(randomDate);

// Генерация случайного числа в диапазоне от 1 до 100
const randomNumber = randomData.generateRandomNumber(1, 100);
console.log(randomNumber);

//  Выполните команду npm login и введите свои учетные данные.
// Опубликуйте ваш пакет: Введите команду npm publish.
// Важно чтобы имя пакета было уникально и в файле package.json

// {
//   "name": "random-data-generator-brightvl",
//   "version": "1.0.0",
//   "description": "",
//   "main": "index.js",
//   "scripts": {
//     "test": "echo \"Error: no test specified\" && exit 1"
//   },
//   "keywords": [],
//   "author": "brightvl",
//   "license": "ISC"
// }