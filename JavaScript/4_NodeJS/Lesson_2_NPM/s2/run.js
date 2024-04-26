// Задание №2
// 2. Также необходимо вынести запуск скрипта в скрипты запуска NPM,
// для того, чтобы можно было запускать скрипт с помощью команды
// npm run start.
// в package.json строка запуска скрипта "nodeS2Run": "node ./JavaScript/4_NodeJS/Lesson_2_NPM/s2/run"
// далее можно запустить скрипт из корня проекта npm run nodeS2Run

const {calculateResultSum} = require('./calculateResultSum') // Важно развернуть (деструктуризировать) обязательно наш
// объект

const total = calculateResultSum([12,1, 32,2, 43,1], 0.9);
console.log(total)


// Задание №3
// - Найти библиотеку, которая поможет окрасить текст в терминале
// - Применить возможности библиотеки и окрасить сообщение о стоимости
// покупок красным, если стоимость больше 50 рублей и зеленым, если
// стоимость менее 50 рублей
require('colors'); // сделали глобально, в связи с этим методы colors теперь видны везде, а не только в const
console.log((total > 50) ? `${total}`.red: `${total}`.green);

// Задание №4
// - Инициализировать проект NPM
// - Установить пакет axios
// - Используя информацию в node_modules и файлах package.json в разделе
// dependencies построить дерево зависимостей пакета

// dependencies для продакшена dep-dependencies для отладки тестирования и тд(все что напрямую не связано с проектом)
//npm install axios


// Задание №5
// Основы Node.js
// Дано:
// Библиотека super-date, которая имеет ряд функций для работы с датой
// и временем. Текущая версия библиотеки 1.4.2
// Разработчики подготовили новый релиз библиотеки со следующим списком изменений:
// - Поправлена ошибка в функции .toISODate(), при которой функция возвращала некорректный формат даты.
// - Исправлены мелкие ошибки в расчетах даты и времени в ряде функций: toLocaleDate(), getYesterday(), getTomorrow()
// - Поправлены проблемы с работой функций на версиях Node.js ниже 16.0.0
// Задача: Определить, как должна обновиться версия библиотеки в связи с вышеперечисленными изменениями

// 1.4.3 потому что чисто патч по принципу major minor patch

