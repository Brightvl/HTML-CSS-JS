// Задание 1.
// Создайте объект Person, представляющий человека, со
// следующими свойствами: name, age и gender. Добавьте
// также методы introduce и changeName. Метод introduce
// должен выводить информацию о человеке, включая его
// имя, возраст и пол. Метод changeName должен изменять
// имя человека на новое заданное значение.
const person = {
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

person.name = "John";
person.age = 25;
person.gender = "male";
person.introduce(); // Ожидаемый результат: My name is John. I'm 25 years old and I identify as male.
person.changeName("Mike");
person.introduce() // Ожидаемый результат: My name is Mike. I'm 25 years old and I identify as male.

// Задание 2.
// Создайте объект Animal со свойством name и методом eat(), который
// выводит сообщение о том, что животное ест. Создайте объект Dog со
// свойством name и методом bark(), который выводит сообщение о
// том, что собака лает. Используйте одалживание метода eat() из
// объекта Animal для объекта Dog, чтобы вывести сообщение о том,
// что собака ест.
const animal = {
    name: "",
    eat() {
        console.log(`${this.name} ест`)
    },
};
const dog = {
    name: "Пуховик",
    bark() {
        console.log(`${this.name} лает`)
    },
};
// Одалживание метода eat() из объекта Animal к объекту Dog
dog.eat = animal.eat;
dog.eat(); // Вывод: Rex is eating.

// Задание 3.
// Создайте объект calculator с методами add(), subtract() и multiply(),
// которые выполняют соответствующие математические операции над
// двумя числами. Используйте методы call и apply для вызова этих
// методов с передачей аргументов.

const calculator = {
    add: (...arg) => arg.reduce((acc, arg) => acc + arg),
    subtract: (...arg) => arg.reduce((acc, arg) => acc - arg),
    multiple: (...arg) => arg.reduce((acc, arg) => acc * arg),
    divide: (...arg) => arg.reduce((acc, arg) => acc / arg),
}

console.log(calculator.add.call(null, 5, 3)); // передаем в виде набора чисел
console.log(calculator.subtract.apply(null, [5, 3, 10])); // передаем в виде списка
console.log(calculator.multiple.apply(null, [5, 3, 10]));
console.log(calculator.divide.call(null, ...[5, 3, 10]));


// задание 3****
const welcome = {
    message: 'ПРивет ',
    userWelcome(userName) {
        console.log(`${this.message} ${userName}`);
    }
}
const users = [
    {id: 1, name: 'Дима'},
    {id: 2, name: 'Петя'},
    {id: 3, name: 'Вася'},
]
welcome.userWelcome.call(null, users[2].name); // undefined Петя
welcome.userWelcome(users[2].name);

welcome.userWelcome.call(welcome, users[1].name); // ПРивет Петя

users.forEach(user => welcome.userWelcome.call(welcome, user.name))

// Задание 4.
// Создайте класс Person, который имеет свойства name и age, а также
// метод introduce(), который выводит сообщение с представлением
// имени и возраста персоны.

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    introduce = () =>
        console.log(`Вывод: My name is ${this.name}, and I'm ${this.age} years old`);
}

const person4 = new Person("John", 25);
person4.introduce(); // Вывод: My name is John, and I'm 25 years old


// Задание 5.
// Создайте класс BankAccount, который представляет банковский счет.
// У него должны быть свойства accountNumber (номер счета) и balance (баланс),
// а также методы deposit(amount) для пополнения счета и
// withdraw(amount) для снятия денег со счета. Класс должен иметь
// также статическое свойство bankName, которое содержит название банка.

class BankAccount {
    static bankName = "MyBank";

    constructor(accountNumber, balance = 0) {
        this.accountNumber = accountNumber;
        this.balance = balance;
    }

    deposit = (amount) => {
        if (amount < 0) {
            console.log(`Транзакция неуспешна, число ${amount} отрицательно`);
            return;
        }
        this.balance += amount;
        console.log(`Транзакция успешна, на счету ${this.balance}`);
    }
    withdraw = (amount) => {
        if (amount < 0) {
            console.log(`Транзакция неуспешна, число ${amount} отрицательно`);
            return;
        }
        if (this.balance >= amount) {
            this.balance -= amount;
            console.log(`Транзакция успешна, на счету ${this.balance}`);
        } else {
            console.log(`Недостаточно средств на счету ${this.accountNumber}, на счету ${this.balance}`);
        }
    }
    displayInfo = () =>
        console.log(`card = ${this.accountNumber}, deposit = ${this.balance}`);
}

const account1 = new BankAccount("1234567890", 1000);
account1.displayInfo()

account1.deposit(500); // Вывод: Deposited 500 into account 1234567890. New balance: 1500
account1.deposit(-100_000_000); // Вывод: Deposited 500 into account 1234567890. New balance: 1500
account1.withdraw(200); // Вывод: Withdrawn 200 from account 1234567890. New balance: 1300
account1.withdraw(1500); // Вывод: Insufficient funds in account 1234567890

// Задание 6.
// Напишите рекурсивную функцию sumDigits, которая принимает
// положительное целое число в качестве аргумента и возвращает сумму его цифр.
sumDigits = (positiveInteger) =>
    // округляю до нижней границы
    (positiveInteger < 10) ? positiveInteger : positiveInteger % 10 + sumDigits(Math.floor(positiveInteger / 10));
console.log(sumDigits(123)); // Ожидаемый результат: 6 (1 + 2 + 3)
console.log(sumDigits(456789)); // Ожидаемый результат: 39 (4 + 5 + 6 + 7 + 8 + 9)