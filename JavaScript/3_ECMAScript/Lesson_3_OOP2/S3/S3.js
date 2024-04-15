const MusicSeries = {
    model: "music series",
    power: 200,
    batterySize: 2100,
    boxSize: 0.5,
    workTime: 45,
    startWipe() {
        console.log('I am the method of MusicSeries');
        console.log('I am starting to wipe the floor...');
    },
};

const Blues = {
    model: "Bluees-1",
    power: 250,
    batterySize: 2500,
    workTime: 50,
};

Object.setPrototypeOf(Blues, MusicSeries);
// console.log(MusicSeries);
// console.log(Blues);

// Задание 1
// Напишите функцию getPrototypeChain(obj), которая будет
// возвращать цепочку прототипов для заданного объекта
// obj. Функция должна вернуть массив прототипов, начиная
// от самого объекта и заканчивая глобальным объектом
// Object.prototype.

getPrototypeChain = (obj) => {
    const protoChain = [];
    let current = obj;
    while (current !== null) {
        protoChain.push(current);
        current = Object.getPrototypeOf(current);
    }
    return protoChain;
};
const something = getPrototypeChain(Blues);
console.log(something);
something.forEach(el => console.log(el.model));


// Задание 2
// Напишите конструктор объекта Person, который принимает два аргумента:
// name (строка) и age (число). Конструктор должен создавать объект с
// указанными свойствами name и age и методом introduce(), который
// выводит в консоль строку вида "Меня зовут [name] и мне [age] лет.".
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    };
    introduce = () => console.log(`Меня зовут ${this.name} и мне ${this.age} лет.`)
}

const person1 = new Person("John", 25);
person1.introduce(); // Вывод: Меня зовут John и мне 25 лет.


// Задание 3
// Напишите конструктор объекта BankAccount, который будет представлять банковский счет.
// Конструктор должен принимать два аргумента: accountNumber (строка) и balance (число).
// Конструктор должен создавать объект с указанными свойствами accountNumber и
// balance и следующими методами:
// 1. deposit(amount): принимает аргумент amount (число) и увеличивает
// баланс на указанную сумму.
// 2. withdraw(amount): принимает аргумент amount (число) и уменьшает
// баланс на указанную сумму, если на счету есть достаточно средств.
// Если средств недостаточно, выводится сообщение "Недостаточно
// средств на счете.".

class BankAccount {
    static bankName = "MyBank";

    constructor(accountNumber, balance = 0) {
        this.accountNumber = accountNumber;
        this.balance = balance;
    }

    deposit = (amount) => {
        if (amount < 0) {
            return;
        }
        this.balance += amount;
    }
    withdraw = (amount) => {
        if (amount < 0) {
            return;
        }
        if (this.balance >= amount) {
            this.balance -= amount;
        }
    }
    getBalance = () => this.balance;
}

// 3. getBalance(): возвращает текущий баланс счета.
const account1 = new BankAccount("1234567890", 1000);
console.log(account1.getBalance()); // Вывод: 1000
account1.deposit(500);
console.log(account1.getBalance()); // Вывод: 1500
account1.withdraw(200);
console.log(account1.getBalance()); // Вывод: 1300
account1.withdraw(2000); // Вывод: "Недостаточно средств на счете."

// Задание 4.
// Создайте класс Animal, который будет представлять животное. У
// класса Animal должны быть следующие свойства и методы:
// ● Свойство name (строка) - имя животного.
// ● Метод speak() - выводит в консоль звук, издаваемый животным.
// Создайте подкласс Dog, который наследует класс Animal. Для
// подкласса Dog добавьте дополнительное свойство и метод:
// ● Свойство breed (строка) - порода собаки.
// ● Метод fetch() - выводит в консоль сообщение "Собака [name]
// принесла мяч.".

// *** Добавьте в класс animal метод который будет принимать параметром другой объект animal и выводить в консоль
// сообщение о том какое животное разговаривает если вызвать метод speak на объекте с именем Кот и передать в него
// другой объект с именем Собака то метод должен вывести в консоль сообщение типа Кот разговаривает со Собакой

class Animal {
    constructor(name, sound = "звук") {
        this.name = name;
        this.sound = sound;
    }

    speak(obj = null) {
        if (obj !== null) {
            console.log(`${this.name} разговаривает с ${obj.name}`);
        } else {
            console.log(`${this.name} издает ${this.sound}`);
        }
    }
}

class Dog extends Animal {
    constructor(name, songs, breed) {
        super(name, songs);
        this.breed = breed;
    }

    fetch() {
        console.log(`Собака ${this.name} породы ${this.breed} принесла мяч.`);
    }
}

class Cat extends Animal {
    constructor(name, songs) {
        super(name, songs);
    }
}


const animal = new Animal("Животное");
const dog = new Dog("Бобик", "гав","Дворняжка");
const cat = new Cat("Белиберда","Мяу");

animal.speak();
dog.speak();
dog.fetch();
//***
cat.speak();
cat.speak(dog);
dog.speak(cat);


// Создайте класс Product, который будет представлять товар в магазине. У товара должны быть следующие свойства:

class Product {
    // name (строка) - имя товара.
    // price (число) - цена товара за одну единицу.
    constructor(name, price = 0) {
        this.name = name;
        this.price = price;
    }
}

// Создайте класс ShoppingCart, представляющий корзину интернет-магазина.

class ShoppingCart {
    // Конструктор класса ShoppingCart должен принимать два параметра:
    // customerName (строка) - имя покупателя.
    // initialTotalCost (число) - начальная общая стоимость заказа (может быть равна 0, если корзина пуста).

    constructor(customerName, initialTotalCost = 0) {
        this.customerName = customerName;
        this.initialTotalCost = initialTotalCost;
        this.products = [];
    }

    // У класса ShoppingCart должен быть метод addItem(product, quantity), который позволяет добавить товар в корзину.
    // Метод должен принимать два параметра:
    // product (объект класса Product) - товар, который добавляется в корзину.
    // quantity (число, по умолчанию 1) - количество единиц товара, которое нужно добавить в корзину.
    // Если quantity не указано, считается, что добавляется одна единица товара.
    addItem(product, quantity = 1) {
        this.products.push(product)
        this.initialTotalCost += product.price * quantity;
    }


    removeItem(product, quantity = 1) {
        // номер индекс элемента в массиве
        let i;
        for (let index = 0; index < quantity; index++) {
            i = this.products.findIndex((p) => p.name === product.name && p.price === product.price);
            if (i !== -1) {
                this.products.splice(i);
                this.initialTotalCost -= product.price;
            }
        }
    }

    // У класса ShoppingCart должен быть метод getCurrentTotalCost(), который возвращает текущую общую стоимость заказа.
    getCurrentTotalCost = () => this.initialTotalCost;

    // У класса ShoppingCart должен быть метод checkout(), который оформляет заказ и выводит сообщение с общей
    // стоимостью заказа и благодарностью за покупку. Формат вывода сообщения: "Заказ оформлен для {имя покупателя}.
    // Общая стоимость заказа: {общая стоимость} рублей. Спасибо за покупку!".
    checkout() {
        console.log(`Заказ оформлен для ${this.customerName}. Общая стоимость заказа: ${this.initialTotalCost} рублей. Спасибо за покупку!`)
    }
}

const product1 = new Product("Ноутбук", 50000);
const product2 = new Product("Смартфон", 20000);

const shoppingCart = new ShoppingCart("Иван Иванов", 0);
shoppingCart.addItem(product1);
shoppingCart.addItem(product2, 2);
console.log(shoppingCart.getCurrentTotalCost());
shoppingCart.removeItem(product2, 2);
console.log(shoppingCart.getCurrentTotalCost());
shoppingCart.checkout();