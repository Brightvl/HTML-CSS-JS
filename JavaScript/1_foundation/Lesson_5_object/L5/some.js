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
// Проверим, есть ли хоть один студент, который прошел практику.
const isSomebodyPassedPractice = studentsPracticeTime.some((student) => {
    console.log(student.firstName);
    // Добавим вывод студента, чтобы посмотреть сколько элементов массива будет проитерированно.
        return student.practiceTime >= 120;
});
// "Ivanov"
// "Petrov" - итерации остановились на втором элементе массива, т.к. он
// удовлетворяет нашему условию и метод some дальше итерации не выполняет.
console.log(isSomebodyPassedPractice);
// true - среди студентов есть те, кто прошел практику.