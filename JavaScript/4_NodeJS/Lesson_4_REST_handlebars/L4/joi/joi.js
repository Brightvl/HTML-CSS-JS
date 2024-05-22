const Joi = require('joi'); // валидация запросов пользователя все делается через цепочки вызовов

const schema = Joi.string(); // говорим чтобы строка была именно типа строка

const result = schema.validate('Hello, World!!!'); // передали строку все четко
const result2 = schema.validate(4); // цифру - поломались

console.log(JSON.stringify(result, null, 2));
console.log(JSON.stringify(result2, null, 2));
console.log(result2.error.details); // чтобы не выводить все полотно ошибки используем .details

// с объектом валидация
const schema2 = Joi.object({
    id: Joi.number().required(),
    title: Joi.string().min(1).required(),
    content: Joi.string().min(10).required(), // min 10 символов
});

const obj = schema2.validate({
    id: 1,
    title: '1',
    content: '165165451651',
});

console.log(obj.error?.details); // если undefined ошибки нет