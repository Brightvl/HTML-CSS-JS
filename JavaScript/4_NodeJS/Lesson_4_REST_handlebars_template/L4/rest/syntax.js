const express = require('express');
const app = express();


// POST
app.post('/', (req, res) => {
    res.send("<h1>This is a post request!</h1>");

});

// перехватываем json запрос с postman там выбрано пост localhost:3000 body/raw/json и
// {
//     "title": "Hello!"
// }
// так же необходимо использовать промежуточный обработчик json иначе express не поймет в каком формате ловить запрос
app.use(express.json());
app.post('/', (req, res) => {
    console.log(req.body);
    res.send("<h1>This is a post request!</h1>");

});


// PUT
// в postman создан новый request json как в предыдущем примере
// {
//     "title": "World!"
// }
app.use(express.json());
app.put('/', (req, res) => {
    console.log(req.body);
    res.send("<h1>This is a put request!</h1>");
});

app.listen(3000);

// DELETE

app.use(express.json());
app.delete('/', (req, res) => {
    console.log(req.body);
    res.send("<h1>This is a delete request!</h1>");
});
