const express = require('express');
const {checkBody, checkParams} = require('./validation/validator');
const {idScheme, articleScheme} = require('./validation/scheme');

const app = express();

let uniqueID = 0;
const articles = [];

app.use(express.json()); // забыл и статья не создастся

app.get('/', (req, res) => {
    res.send("hi bro");
});

/**
 * Получить все статьи
 */
app.get('/articles', (req, res) => {
    res.send({articles});
});


/**
 * Получить конкретную статью
 */
app.get('/articles/:id', checkParams(idScheme), (req, res) => {
    // checkParams(idScheme) промежуточный обработчик Joi в папке validation
    // ищем статью у которой равен идентификатор
    const article = articles.find(article => article.id === Number(req.params.id));

    // проверка существует ли статья
    if (article) {
        res.send({article});
    } else {
        res.status(404);
        res.send({article: null});
    }
});

/**
 * Создание статьи
 */
app.post("/articles", (req, res) => {
    uniqueID += 1;

    articles.push({
        id: uniqueID,
        ...req.body
    });

    res.send({
        id: uniqueID
    });

});



/**
 * Обновление статьи
 */
app.put("/articles/:id",checkParams(idScheme),checkBody(articleScheme), (req, res) => {
    // ВАЛИДАЦИЯ без checkParams(idScheme),checkBody(articleScheme), пришлось бы писать все это внутри метода
    // const idValidationResult = idScheme.validate(req.params);
    // if (idValidationResult.error) {
    //     return res.status(400).send(idValidationResult.error.details);
    // }
    // const articleValidationResult = articleScheme.validate(req.body);
    // if (articleValidationResult.error) {
    //     return res.status(400).send(articleValidationResult.error.details);
    // }

    // ОСНОВНАЯ логика
    // сначала поиск по id
    const article = articles.find(article => article.id === Number(req.params.id));
    // если существует обновляем по ссылке, что хранится в массиве
    if (article) {
        article.title = req.body.title;
        article.content = req.body.content;
        // чтобы пользователь понял что то, что он ввел сохранилось
        res.send({article});
    } else {
        res.status(404);
        res.send({article: null});
    }
});

/**
 * Удаление статьи
 */
app.delete("/articles/:id",checkParams(idScheme), (req, res) => {
    const article = articles.find(article => article.id === Number(req.params.id));

    if (article) {
        const articleIndex = articles.indexOf(article);
        articles.splice(articleIndex, 1);

        res.send({article});
    } else {
        res.status(404);
        res.send({article: null});
    }
});

/**
 * промежуточный обработчик несуществующих маршрутов
 */
app.use((req, res) => {
    res.status(404).send({
        message: "URL not found"
    })
});

app.listen(3000);