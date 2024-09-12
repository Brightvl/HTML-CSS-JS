/*
Задание 2
Создать компонент TextInput, который содержит текстовое поле ввода и отображает
введённый текст под ним в реальном времени.
*/

import {useState} from "react";

export const TextInput = () => {
    const [text, setText] = useState('');
    const updateText = (e) => {
        setText(e.target.value);
    }
    return (
        <>
            <input
                type='text'
                value={text}
                onChange={updateText}
                placeholder='Введите текст'
            />
            {text}
        </>
    )
};