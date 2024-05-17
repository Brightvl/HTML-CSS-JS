const express = require(`express`);
const app = express(); // функция построит приложение

app.use(express.static(`static`)); // передаем папку с static файлами

const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});