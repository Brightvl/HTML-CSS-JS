/*
Задание 4
Создать React компонент TextDisplayForm, который позволяет пользователю
ввести текст в поле ввода и отобразить его на экране в
стилизованном виде по нажатию кнопки.
● Создание поля ввода (TextField)
    ○ Добавить TextField для ввода текста пользователем.
    ○ Установить метку (label) поля ввода на "Введите текст".
    ○ Сделать поле ввода на всю ширину (fullWidth).
● Разместить кнопку под полем ввода.
    ○ Установить текст кнопки на "Отобразить текст".
    ○ При нажатии на кнопку введенный текст должен отображаться под кнопкой.
● Отображение введенного текста
    ○ Использовать состояние для хранения введенного и отображаемого текста.
    ○ При нажатии на кнопку текст из поля ввода должен отображаться в
    стилизованной карточке (Card) под кнопкой.
● Стилизация отображаемого текста
    ○ Для отображения текста использовать компонент Typography с вариантом h5.
*/

import {Button, Card, CardContent, TextField, Typography} from "@mui/material";
import {useEffect, useState} from "react";

export const TextDisplayForm = (props) => {
    const [text, setText] = useState("")
    const [message, setMessage] = useState("")

    const updateText = (e) => {
        setText(e.target.value);
    }
    const showText = () => {
        setMessage(text)
        setText("")
    }
    return (
        <div>
            <TextField
                fullWidth
                label="Введите текст"
                onChange={updateText}
                value={text}
            />
            <Button
                variant="outlined"
                onClick={showText}
            >
                Отобразить текст
            </Button>
            <Card variant="outlined"
            >
                <CardContent>
                    <Typography variant="h5">
                        {message}
                    </Typography>
                </CardContent>

            </Card>
        </div>
    )
}