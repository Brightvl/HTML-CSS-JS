const express = require('express');
const {engine} = require('express-handlebars'); // импортируем только engine

const app = express();

app.engine('handlebars', engine()); // метод(шаблонизатор handlebars и  функцию engine)
app.set('view engine', 'handlebars'); // установка переменных окружения express
app.set('views', './views'); // директория, где хранятся шаблоны

const articles = [
    {title: 'Article 1', description: 'First awesome article'},
    {title: 'Article 2', description: 'Second awesome article'},
    {title: 'Article 3', description: 'Third awesome article'},
];

app.get('/', (req, res) => {
    res.render('home', {title: 'Home', articles});
    // второй вариант когда мы указываем другой шаблон
    // res.render('home', {layout: 'Index', title: 'home', articles});
});

app.listen(3000);