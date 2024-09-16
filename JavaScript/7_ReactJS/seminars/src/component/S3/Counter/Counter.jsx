/*
Задание 2
1. Разработайте компонент Counter, который отображает число и две кнопки:
одна для увеличения значения на 1, а другая для уменьшения на 1.
2. Используйте хук useState для управления состоянием счётчика.
3. Кнопки можно сделать с помощью material ui
*/

import {useEffect, useState} from "react";
import {Button} from "@mui/material";

export const Counter = () => {
    const [count, setCount] = useState(0);
    const [disabledCounter, setDisabledCounter] = useState(true);
    const upCounter = () => {
        setCount((prevCount) => prevCount + 1)
    }
    const downCounter = () => {
        setCount((prevCount) => prevCount - 1)
    }
    useEffect(() => {
        if (count > 0) {
            setDisabledCounter(false)
        } else setDisabledCounter(true)
    }, [count, disabledCounter]);
    const resetCounter = () => {
        setCount(count - 1)
    }
    return (
        <div>
            <p>Счетчик: {count}</p>
            <Button
                variant="outlined"
                onClick={downCounter}
                disabled={disabledCounter}
            >

                Уменьшить
            </Button>
            <Button
                variant="outlined"
                onClick={upCounter}>
                Увеличить
            </Button>
        </div>

    )
}