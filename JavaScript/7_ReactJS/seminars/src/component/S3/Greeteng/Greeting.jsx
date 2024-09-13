/*
Задание 1
● Создайте функциональный компонент Greeting, который принимает
проп name и отображает сообщение Привет, {name}!.
● Используйте компонент Greeting в вашем основном компоненте App,
передавая разные имена в качестве пропсов.
*/

import PropTypes from "prop-types";

export function Greeting({name}) {
    const time = new Date().getHours()
    let data;
    if (time >= 12 && time <= 18) {
        data = `Добрый день ${name}`
    } else if (time > 18 && time <= 23) {
        data = `Добрый вечер ${name}`
    } else if (time > 23 && time <= 6) {
        data = `Доброй ночи ${name}`;
    } else {
        data = `Доброе утро ${name}`
    }
    return <div>
        <h1>{data}</h1>
    </div>;
}

Greeting.propTypes = {
    name: PropTypes.string.isRequired
}
