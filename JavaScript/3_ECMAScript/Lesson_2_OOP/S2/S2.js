// Задание 1.
// Создайте объект Person, представляющий человека, со
// следующими свойствами: name, age и gender. Добавьте
// также методы introduce и changeName. Метод introduce
// должен выводить информацию о человеке, включая его
// имя, возраст и пол. Метод changeName должен изменять
// имя человека на новое заданное значение.
const Person = {
    name: "",
    age: 0,
    gender: "",

    introduce() {
        console.log(`Name: ${this.name}, Age: ${this.age}, Gender: ${this.gender}`);
    },
    changeName(newName) {
        this.name = newName
    },
}

Person.name = "John";
Person.age = 25;
Person.gender = "male";
Person.introduce(); // Ожидаемый результат: My name is John. I'm 25 years old and I identify as male.
Person.changeName("Mike");
Person.introduce() // Ожидаемый результат: My name is Mike. I'm 25 years old and I identify as male.

// Задание 2.
// Создайте объект Animal со свойством name и методом eat(), который
// выводит сообщение о том, что животное ест. Создайте объект Dog со
// свойством name и методом bark(), который выводит сообщение о
// том, что собака лает. Используйте одалживание метода eat() из
// объекта Animal для объекта Dog, чтобы вывести сообщение о том,
// что собака ест.
const Animal = {
    name: "",
    eat() {
        console.log(`${this.name} ест`)
    },
};
const Dog = {
    name: "Пуховик",
    bark() {
        console.log(`${this.name} лает`)
    },
};
// Одалживание метода eat() из объекта Animal к объекту Dog
Dog.eat = Animal.eat;
Dog.eat(); // Вывод: Rex is eating.

// Задание 3.
// Создайте объект calculator с методами add(), subtract() и multiply(),
// которые выполняют соответствующие математические операции над
// двумя числами. Используйте методы call и apply для вызова этих
// методов с передачей аргументов.
const calculator = {
    add: (x, y) => x + y,
    subtract: (x, y) => x - y,
    multiple: (x, y) => x * y,
}
console.log(calculator.add.call(null, 5, 3)); // Вывод: 8
console.log(calculator.subtract.apply(null, [5, 3])); // Вывод: 2
console.log(calculator.multiple.apply(null, [5, 0])); // Вывод: 0
