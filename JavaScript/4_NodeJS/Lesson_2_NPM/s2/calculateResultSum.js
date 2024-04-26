// Задание №1
// Необходимо найти, установить и применить библиотеку, которая позволит
// избежать проблем со сложением и умножением чисел с плавающей запятой
// import NP from 'number-precision' еще вариант добавления
const np = require('number-precision')

function calculateResultSum(purchases, discount) {
    let total = purchases.reduce((sum, purchase) => np.plus(sum + purchase), 0);
    return np.times(total, discount);
}

module.exports = {calculateResultSum}; //по сути заворачиваем в объект нашу функцию, их может быть больше

// Задание №2
// 1. Необходимо вынести функцию .calculateResultSum() в отдельный
// файл, импортировать её в основной файл и использовать.