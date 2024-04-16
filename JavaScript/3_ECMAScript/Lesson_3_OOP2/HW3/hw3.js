// Задание 1: ""Управление персоналом компании""
// Реализуйте класс Employee (сотрудник), который имеет следующие свойства и методы:
class Employee {
    // Свойство name (имя) - строка, имя сотрудника.
    constructor(name) {
        this.name = name;
    }
    // Метод displayInfo() - выводит информацию о сотруднике (имя).
    displayInfo() {
        console.log(`Name: ${this.name}`);
    }
}
//     Реализуйте класс Manager (менеджер), который наследует класс Employee и имеет дополнительное свойство и метод:
class Manager extends Employee {
    // Свойство department (отдел) - строка, отдел, в котором работает менеджер.
    constructor(name, department) {
        super(name);
        this.department = department;
    }
    // Метод displayInfo() - переопределяет метод displayInfo() родительского класса и выводит информацию о менеджере (имя и отдел).
    displayInfo() {
        console.log(`Name: ${this.name} Department: ${this.department}`);
    }
}


const employee = new Employee("John Smith");
employee.displayInfo();
// Вывод:
// Name: John Smith

const manager = new Manager("Jane Doe", "Sales");
manager.displayInfo();
// Вывод:
// Name: Jane Doe
// Department: Sales

// "Управление списком заказов"

// Реализуйте класс Order (заказ), который имеет следующие свойства и методы:
class Order {
    // Свойство orderNumber (номер заказа) - число, уникальный номер заказа.
    // Свойство products (продукты) - массив, содержащий список продуктов в заказе.
    constructor(orderNumber) {
        this.orderNumber = orderNumber;
        this.products = [];
    }

    // Метод addProduct(product) - принимает объект product и добавляет его в список продуктов заказа.
    addProduct(product) {
        this.products.push(product);
    }

    // Метод getTotalPrice() - возвращает общую стоимость заказа, основанную на ценах продуктов.
    getTotalPrice() {
        let totalPrice = 0;
        for (let product of this.products) {
            totalPrice += product.price;
        }
        return totalPrice;
    }
}

// Пример использования класса
class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}

const order = new Order(12345);
const product1 = new Product("Phone", 500);
order.addProduct(product1);
const product2 = new Product("Headphones", 100);
order.addProduct(product2);
console.log(order.getTotalPrice()); // Вывод: 600