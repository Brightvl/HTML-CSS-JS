export function Greeting() {
    const time = new Date().getHours()
    let data;
    if (time >= 12 && time <= 18) {
        data = `Добрый день`
    } else if (time > 18 && time <= 23) {
        data = `Добрый вечер`
    }else if (time > 23 && time <= 6) {
        data = `Доброй ночи`;
    } else {
        data = `Доброе утро`
    }
    return <div>
        <h1>{data}</h1>
    </div>;
}

//если используем export default то во время импорта можно менять название переменной тапа
// import Max from "./component/Greeteng";