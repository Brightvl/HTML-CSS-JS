/*
Задание 2
1. Разработайте компонент Counter, который отображает число и две кнопки:
одна для увеличения значения на 1, а другая для уменьшения на 1.
2. Используйте хук useState для управления состоянием счётчика.
3. Кнопки можно сделать с помощью material ui
*/

import {useState} from "react";

export const Counter = () => {
    const [count, setCount] = useState(0);
    const upCounter = () => {
        setCount((prevCount) => prevCount + 1)
    }
    const downCounter = () => {
        setCount((prevCount) => prevCount - 1)
    }
    const resetCounter = () => {
        setCount(count - 1)
    }
    return (
        <div>
            <button onClick={downCounter}>
                Уменьшить
            </button>
            {count}
            <button onClick={upCounter}>
                Увеличить
            </button>
        </div>

    )
}