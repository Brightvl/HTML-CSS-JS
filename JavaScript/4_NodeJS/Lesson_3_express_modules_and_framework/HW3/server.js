const express = require('express');
const fs = require('fs');
const path = require('path');

// Создание экземпляра сервера
const app = express();
const port = 3000;

// Путь к файлу с счетчиками
const COUNTER_FILE = path.join(__dirname, 'data/counters.json');

// Инициализация счетчиков
let counters = {
    '/': 0,
    '/about': 0,
};

// Функция для проверки и инициализации файла счетчиками
function checkFile() {
    if (!fs.existsSync(COUNTER_FILE)) { //true если путь существует
        fs.writeFileSync(COUNTER_FILE, JSON.stringify(counters, null, 2));
    }
}

// Функция для чтения счетчиков из файла
function readCounters() {
    checkFile();
    const data = fs.readFileSync(COUNTER_FILE, 'utf-8');
    counters = JSON.parse(data);
}

// Функция для записи счетчиков в файл
function writeCounters() {
    fs.writeFileSync(COUNTER_FILE, JSON.stringify(counters, null, 2));
}

// Чтение счетчиков при старте сервера
readCounters();

// Middleware для увеличения счетчиков
app.use((req, res, next) => {
    if (counters.hasOwnProperty(req.path)) { // Метод возвращает значение, указывающее, имеет ли этот
        // объект указанное свойство как собственное свойство (а не наследует его).
        counters[req.path] += 1;
        writeCounters();
    }
    next();
});

// Обработчики маршрутов
app.get('/', (req, res) => {
    res.send(`<h1>Добро пожаловать</h1><p>Views: ${counters['/']}</p><a href="/about">About</a>`);
});

app.get('/about', (req, res) => {
    res.send(`<h1>О нас</h1><p>Views: ${counters['/about']}</p><a href="/">Home</a>`);
});

// Запуск сервера
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
