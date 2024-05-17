const fs = require(`fs`);
const path = require(`path`);
const pathToFile = path.join(__dirname, `data/person.json`)
// stringify(данные,формат, табуляция)

// считываем объект
const personData = JSON.parse(fs.readFileSync(pathToFile, `utf-8`));
// меняем данные
personData.age = personData.age -10;
personData.city = `Ekaterinburg`;
// записываем новые данные
fs.writeFileSync(pathToFile, JSON.stringify(personData, null, 2));
