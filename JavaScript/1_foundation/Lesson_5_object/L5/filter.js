const studentsPracticeTime =
    [
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
// Мы хотим отфильтровать массив студентов, оставив в новом массиве только
// тех, кто уже прошел практику. Практика будет считаться пройденной, если
// студент отработал 120 часов или больше.
const studentsPassedPractice = studentsPracticeTime.filter((student) => {
    return student.practiceTime >= 120;
});
console.log(studentsPassedPractice);
// Получили новый массив, в котором
// только те студенты, кто уже прошел практику.