const express = require('express');
const fs = require(`fs`);
const path = require(`path`);

const checkUser = require('./validation/validator');
const userScheme = require('./validation/scheme');

const app = express();

const filePath = path.join(__dirname, `data/users.json`);

let users;
try {
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    users = JSON.parse(fileContent);
} catch (error) {
    users = []
}


let uniqueID = users.length > 0 ? Math.max(...users.map(user => user.id)) : 0;

app.use(express.json());

app.get('/users', (req, res) => {
    res.send({users});
});

app.get('/users/:id/', (req, res) => {
    const user = users.find(user => user.id === +req.params.id);
    if (!user) return res.status(404).send({error: 'User not found'});
    res.send({user});
});

app.post('/users', (req, res) => {
    console.log(req.body);
    uniqueID++;
    users.push({
        id: uniqueID,
        ...req.body
    });

    fs.writeFileSync(filePath, JSON.stringify(users, null, 2));
    res.send({id: uniqueID});
});

app.put('/users/:id', checkUser(userScheme), (req, res) => {
    console.log(req.body);
    const user = users.find(user => user.id === +req.params.id);

    if (!user) return res.status(404).send({error: 'User not found'});

    const {firstName, secondName, age, city} = req.body;
    user.firstName = firstName;
    user.secondName = secondName;
    user.city = city;
    user.age = age;

    fs.writeFileSync(filePath, JSON.stringify(users, null, 2));
    res.send(user);
})

app.delete('/users/:id/', (req, res) => {
    const user = users.find(user => user.id === +req.params.id);

    if (!user) return res.status(404).send({error: 'User not found'});

    const articleIndex = users.indexOf(user);
    users.splice(articleIndex, 1);

    fs.writeFileSync(filePath, JSON.stringify(users, null, 2));
    res.send({user});
});

app.use((req, res) => {
    res.status(404).send({
        message: "URL not found"
    })
});

app.listen(3000);