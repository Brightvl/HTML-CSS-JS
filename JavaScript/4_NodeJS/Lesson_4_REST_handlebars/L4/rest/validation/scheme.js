const Joi = require('joi'); // валидация


// Валидация строк в статье
const articleScheme = Joi.object({
    title: Joi.string().min(5).required(),
    content: Joi.string().min(10).required(),
});

// валидация чисел
const idScheme = Joi.object({
    id: Joi.number().required(),
});

module.exports = {articleScheme, idScheme}; // экспорт для переиспользования