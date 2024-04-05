// Оператор Rest (англ. «остальные», «оставшиеся») позволяет собрать оставшиеся аргументы
// функции в массив. Звучит немного странно, однако этот оператор позволяет не перечислять все
// аргументы функции как отдельные переменные, а получить их все одним массивом. Для его
// использования необходимо в функции, принимающей несколько аргументов, перечислить
// необходимые аргументы, а все оставшиеся, которые мы хотим собрать в один массив, —
// записать как …<имя массива>. Часто пишут ...rest. Давайте перепишем наш предыдущий
// пример, используя оператор rest и тем самым избавившись от псевдомассива arguments.
const studentsGroup1PracticeTime = [
    {
        firstName: "Ivanov",
        practiceTime: 56
    },
    {
        firstName: "Petrov",
        practiceTime: 120
    },
    {
        firstName: "Sidorov",
        practiceTime: 148
    },
    {
        firstName: "Belkin",
        practiceTime: 20
    },
    {
        firstName: "Avdeev",
        practiceTime: 160
    }
];
const studentsGroup2PracticeTime = [
    {
        firstName: "Mankov",
        practiceTime: 87
    },
    {
        firstName: "Kistin",
        practiceTime: 133
    },
    {
        firstName: "Kotlyarov",
        practiceTime: 140
    },
    {
        firstName: "Peskov",
        practiceTime: 10
    },
];
// Напишем не очень удобную, но показательную функцию, которая умеет принимать
// неограниченное число аргументов и находить максимум среди них. Функция должна
// вызываться примерно следующим образом: const maximum = findMax(4, 7, 10);
function findMax(...values) {
    // Тут мы принимаем все переданные аргументы и с помощью rest-оператора упаковываем их в массив values.
    // На этот раз values — уже настоящий массив, и мы можем использовать reduce для
    // итерации по нему и для нахождения максимального числа.
    return values.reduce((acc, value) => {
        if (value > acc) return value;
        return acc;
    }, -Infinity);
}

// Создадим массивы только со значениями времени, отработанного студентами.
const group1PracticeTime = studentsGroup1PracticeTime.map((student) =>
    student.practiceTime);
const group2PracticeTime = studentsGroup2PracticeTime.map((student) =>
    student.practiceTime);
// Вызовем нашу функцию поиска максимума, используя оператор spread.
const maxTimeFromGroup1 = findMax(...group1PracticeTime);
console.log(maxTimeFromGroup1); // 160
const maxTimeFromGroup2 = findMax(...group2PracticeTime);
console.log(maxTimeFromGroup2); // 140
// Давайте также найдём максимально отработанное время среди двух групп.
const bothGroupsTime = [...group1PracticeTime, ...group2PracticeTime];
const maxTimeBothGroups = findMax(...bothGroupsTime);
console.log(maxTimeBothGroups); // 160
// Теперь посмотрим на ещё один пример:
const saveFullNameInDB = (firstName, lastName, ...additionals) => {
    saveFirstName(firstName);
    saveLastName(lastName);
    saveAdditionals(additionals); // Благодаря rest оператору мы смогли собрать все
    // дополнительные данные, которые были переданы для сохранения в базе данных, и можем
    // передать их одним массивом в функцию сохранения дополнительных данных.
}