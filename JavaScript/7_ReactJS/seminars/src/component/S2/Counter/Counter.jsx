/*
Задание 1
● Создать компонент Counter, который отображает кнопку и число.
● Число увеличивается на 1 каждый раз, когда пользователь нажимает на кнопку.
*/

import {useState} from "react";

export const Counter = () => {
    const [count, setCount] = useState(0);
    const updateCounter = () => {
        setCount(count + 1)
    }
    return (
        <button onClick={updateCounter}>
            Увеличить {count}
        </button>
    )
}