const handlebars = require('handlebars');
const template = handlebars.compile('<p>{{someVar}}</p>');
const result = template({someVar: "Hello!"})
console.log(result)

//условия
const template2 = handlebars.compile(
    `{{#if bold}}<b>Hello!</b> {{else}}<p>Not Hello!</p>{{/if}}`
)
console.log(template2({bold: true}));
console.log(template2({bold: false}));

//циклы
const items = [
    {name: 'first item', number: 3},
    {name: 'second item', number: 5},
];
const template3 = handlebars.compile(
    `{{#each items}} <p>{{this.name}} {{this.number}}</p> {{/each}}`
)
console.log(template3({items}))