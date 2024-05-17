const fs = require(`fs`);
const path = require(`path`);
const pathToFile = path.join(`./data/`, `person.json`);

const person = {
    name: "Ivan",
    surname: "Ivanov",
    age: 30,
    city: "Moscow"
};
// создаем и записываем данные в json файл
// stringify(данные,формат, табуляция)
fs.writeFileSync(pathToFile, JSON.stringify(person, null, 2));
