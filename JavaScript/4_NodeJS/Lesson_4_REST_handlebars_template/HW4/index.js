const express = require('express');

const checkUser = require('./validation/validator');
const userScheme = require('./validation/scheme');
let {users, uniqueID,writeJson} = require('./data/json');

const app = express();
app.use(express.json());

/**
 * Получить всех пользователей
 */
app.get('/users', (req, res) => {
    res.send({users});
});

/**
 * Получить пользователя по id
 */
app.get('/users/:id/', (req, res) => {
    const user = users.find(user => user.id === +req.params.id);
    if (!user) return res.status(404).send({error: 'User not found'});
    res.send({user});
});

/**
 * Создать пользователя
 */
app.post('/users', (req, res) => {
    console.log(req.body);
    uniqueID++;
    users.push({
        id: uniqueID,
        ...req.body
    });

    writeJson()
    res.send({id: uniqueID});
});

/**
 * Обновить пользователя
 */
app.put('/users/:id', checkUser(userScheme), (req, res) => {
    console.log(req.body);
    const user = users.find(user => user.id === +req.params.id);

    if (!user) return res.status(404).send({error: 'User not found'});

    const {firstName, secondName, age, city} = req.body;
    user.firstName = firstName;
    user.secondName = secondName;
    user.city = city;
    user.age = age;

    writeJson()
    res.send(user);
})

/**
 * Удалить пользователя
 */
app.delete('/users/:id/', (req, res) => {
    const user = users.find(user => user.id === +req.params.id);

    if (!user) return res.status(404).send({error: 'User not found'});

    const articleIndex = users.indexOf(user);
    users.splice(articleIndex, 1);

    writeJson()
    res.send({user});
});

/**
 * Обработать все неизвестные запросы
 */
app.use((req, res) => {
    res.status(404).send({
        message: "URL not found"
    })
});

/**
 * Запуск сервера
 */
app.listen(3000);