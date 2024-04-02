const studentsPracticeTime = [
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
// Мы хотим вывести в таблицу студентов и информацию для каждого, прошел
// ли он практику уже. Практика будет считаться пройденной, если студент
// отработал 120 часов или больше.
    const dataForTable = studentsPracticeTime.map((student) => {
    if (student.practiceTime < 120) {
        return { // Мы возвращаем новый объект, более удобный для вывода.
            Student: student.firstName,
            Practice: "Not passed"
        };
    } else {
        return {
            Student: student.firstName,
            Practice: "Passed"
        };
    }
});
console.table(dataForTable);
// В консоль можно выводить разными
// способами, если использовать метод table, и передать туда массив или
// объект, этот метод выводит данные в виде таблицы.