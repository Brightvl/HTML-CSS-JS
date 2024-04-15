// Листинг 19.
// Класс робот-пылесос.
class VacuumCleaner {
    model = "vacuum cleaner";
    counterOfStarts = 0;
    isFull = false;
    isObstacle = false;

// Для создания конструктора, нужно создать метод constructor.
    constructor() {
    }

    startCleaning() {
        this.counterOfStarts++;
// Добавим дополнительный вывод, чтобы знать чей метод мы вызвали.
        console.log('I am the method of VacuumCleaner');
        console.log('I am cleaning... I have been started: ',
            this.counterOfStarts, 'times.');
    }

    goCharge() {
// Добавим дополнительный вывод, чтобы знать чей метод мы вызвали.
        console.log('I am the method of VacuumCleaner');
        console.log('I am going to charge...');
    }
}

// Попробуем создать экземпляр класса и посмотреть как он работает.
const BaseRobot = new VacuumCleaner;
console.log(BaseRobot.constructor); // class VacuumCleaner {
// model = "vacuum cleaner";
// counterOfStarts = 0;
// isFull = false;
// isObstacle = false;
// Для создания конструктора, нужно создать метод constructor.
// constructor() {
// }
// ...
console.log(BaseRobot.model); // vacuum cleaner
console.log(BaseRobot.startCleaning()); // I am the method ofVacuumCleaner
// I am cleaning... I have been started: 1 times.

// Листинг 20.
// Объявление родительского класса смотри в листинге 19.
// Расширенный класс DancingSeries. C помощью extends мы указываем от какого класса будем наследоваться.
class DancingSeries extends VacuumCleaner {
// Объявляем новые свойства и переопределяем свойство model.
    model = "dancing series";
    power = 200;
    batterySize = 2100;
    boxSize = 0.5;
    workTime = 45;
    isUVLampOn = false;

// Добавляем новый метод.
    switchUVLamp() {
// Добавим дополнительный вывод, чтобы знать чей метод мы вызвали.
        console.log('I am the method of DancingSeries');
        this.isUVLampOn = !this.isUVLampOn;
        console.log(`UV lamp is ${this.isUVLampOn ? 'working' :
            'not working'}.`);
    }
};
// Создадим новый экземпляр класса, чтобы посмотреть как он работает и что в нем есть.
    const DancingRobot = new DancingSeries;
console.log(DancingRobot.__proto__); // VacuumCleaner {constructor: ƒ, switchUVLamp: ƒ}
console.log(DancingRobot.model); // dancing series
console.log(DancingRobot.switchUVLamp()); // I am the method of DancingSeries
// lamp is working.

// Листинг 21.
// Объявление родительского класса смотри в листинге 19.
// Расширенный класс DancingSeries смотри в листинге 20.
// Созданный конструктор является функцией, код которой взят из конструктора.
console.log(DancingSeries ===
    DancingSeries.prototype.constructor); // true
// В созданном конструкторе есть свойство prototype и оно содержит все методы.
console.log(DancingSeries.prototype); // VacuumCleaner {constructor: ƒ, switchUVLamp: ƒ}