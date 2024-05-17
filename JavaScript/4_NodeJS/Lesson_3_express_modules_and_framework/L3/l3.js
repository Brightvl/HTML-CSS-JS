// express

const express = require('express');
const app = express();
const path = require('path');

// промежуточный обработчик запросов (обязательно до основных обработчиков)
app.use((req, res, next) => {
    // при запросе выводим в консоль запрос
    // method хранит информацию о http запросе метода(сейчас get)
    console.log(`Поступил запрос`, req.method, req.url);
    // Необходимо вызвать основной обработчик
    next();
});

//статический объект (можем получить доступ ко всей директории static без статик стили не применялись)
app.use(express.static(`static`));
app.get(`/`,(req, res) => {
    res.sendFile(`static/index.html`);
})

// Корневая (с помощью импорта html)
// app.get('/', (req, res) => {
//     //__dirname директория откуда скрипт запущен
//     res.sendFile(path.join(__dirname, 'static/index.html'));
// });

// Обо мне
app.get('/about', (req, res) => {
    res.send(
        `<h1>Страница обо мне!</h1>`
    );
});

const port = 3000;

app.listen(port, () => {
    console.log(`Сервер запущен на порту ${port}`);
});