// require('uuid') нет необходимости указывать
// относительность пути, то есть добавлять ./ или ../ , так как это
// установленный npm пакет
const uuid = require('uuid');
const id = uuid.v4();
console.log(id);