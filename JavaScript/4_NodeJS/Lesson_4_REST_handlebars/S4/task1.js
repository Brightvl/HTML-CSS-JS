const express = require('express');

const app = express();

const users = [];
let uniqueID = 0;

app.use(express.json());

app.get('/users', (req, res) => {
    res.send({users});
});

app.post('/users', (req, res) => {
    console.log(req.body);
    uniqueID++;
    users.push({
        id: uniqueID,
        ...req.body
    });

    res.send({id: uniqueID});
});

app.put('/users/:id', (req, res) => {
    console.log(req.body);
    const user = users.find(user => user.id === +req.params.id);

    if (!user) return res.status(404).send({error: 'User not found'});

    const {firstName, secondName, age, city} = req.body;
    user.firstName = firstName;
    user.secondName = secondName;
    user.city = city;
    user.age = age;
    res.send(user);
})
app.listen(3000);