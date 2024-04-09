//Замыкание — это термин для механизма сохранения данных. Мы замыкаем данные
// внутри функции таким образом, чтобы к этим данным можно было обратиться и
// изменить их внутри этой функции, но при этом они были недоступны снаружи.
const createCounter = () => {
    let counter = 0;
    return () => {
        return ++counter;
    }
}
// Создаем счетчик.
const counter1 = createCounter();
counter1(); // 1
counter1(); // 2
//Создадим еще один счетчик. Каждый будет работать независимо.
const counter2 = createCounter();
counter2(); // 1
counter1(); // 3

const closureFunction = () => {
    const cache = {};
    return (x) => {
        if (cache[x]) return cache[x];
        const result = x * x;
        cache[x] = result;
        return result;
    }
}
const chachedPow = closureFunction();
chachedPow(2); // 4
chachedPow(8); // 64
chachedPow(2); // 4 — тут функция возьмёт значение из кеша и не будет
// вычислять его заново. Это особенно эффективно работает, когда мы имеем
// дело со сложными и тяжёлыми вычислениями или, например, запросами каких-то
// ресурсов из базы данных или внешних источников. Тут нельзя забывать о
// валидации кеша. Он может стать неактуальным, если мы имеем дело с базой
// данных или внешними источниками данных.