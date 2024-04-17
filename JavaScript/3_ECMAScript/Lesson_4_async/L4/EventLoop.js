// Цикл событий или Event Loop - это механизм, который который умеет
// обрабатывать входящие события (это сам код, и его команды, действия
// пользователя, взаимодействие с операционной системой), и управлять
// выполняемыми задачами, исходя из этих событий.

// В работе цикла событий участвует три механизма:
// 1. Call Stack (стек вызовов функций) - это механизм, который используется,
// чтобы сказать процессору какие команды выполнять, по мере исполнения
// алгоритма. Это основной поток синхронных команд нашего алгоритма.
// 2. API среды выполнения - это вспомогательный функционал, который
// предоставляет браузер или другая среда выполнения, так например функция
// setTimeout является не функцией движка JavaScript, а одной из функций
// среды выполнения.
// 3. Отложенная очередь задач - это стек задач, который пополняется новыми
// заданиями, по мере их появления. Так например вызов функции обратного
// вызова в выполняемой в текущий момент функции будет внесен в этот стек,
// чтобы цикл событий выполнил эту функцию когда у него будет свободный
// стек вызовов.

// Листинг 2
console.log("Start algorithm!");
setTimeout(function timeout() {
    console.log("This will be printed after 5 seconds!");
}, 5000);
console.log("End synchronous code.");

// Первой командой выполняется вывод в консоль (строка 1). Эта команда попадает в
// стек вызовов:

// Эта команда синхронная, поэтому она выполняется и стек освобождается.
// На 3й строке мы видим вызов функции setTimeout - это функция предоставляется
// API браузера и она асинхронная. Поэтому вызов этой функции осуществляется
// браузером и так, как в этой функции есть функция обратного вызова, API браузера
// запомнит её и через 5 секунд поместит в очередь отложенных задач:

// Пока пять секунд еще не прошли, движок JavaScript будет спокойно выполнять наш
// алгоритм дальше, и выполнит команду из 7 строки, которая выведет в консоль, что
// синхронные операции в нашей программе закончены, и стек очиститься. А по
// прошествии 5 секунд с момента вызова функции setTimeout, API браузера поместит
// функцию обратного вызова в очередь отложенных задач, и вся система будет
// выглядеть так:

// В этот момент как раз и подключается цикл событий, он смотрит что в стеке
// вызовов пусто, и можно взять задачу из очереди отложенных задач, он находит там
// функцию обратного вызова timeout(), и помещает её в стек вызовов для
// выполнения:

// А дальше код этой функции выполняется как обычно, в ней мы видим вывод в
// консоль, который выполняется и стек вызовов после отработки очищается