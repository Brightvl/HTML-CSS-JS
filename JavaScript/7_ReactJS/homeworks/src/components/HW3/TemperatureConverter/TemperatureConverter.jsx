/*
Задание 1: Температурный конвертер с Material UI

Цель: Создать компонент TemperatureConverter, используя компоненты
TextField и Button из Material UI для ввода и отображения температур в градусах Цельсия и Фаренгейта.

Компоненты:
Используйте TextField для ввода значения температуры.
Добавьте лейблы к каждому TextField, указывая единицы измерения (Цельсия и Фаренгейта).

Логика:
При вводе значения в одно поле, автоматически конвертируйте его и отобразите в другом.
Реализуйте конвертацию температур в обоих направлениях.
*/
import { useState } from "react";
import { TextField, Typography } from "@mui/material";
import style from "./style.module.scss";

export const TemperatureConverter = (props) => {
    const [celsiusInput, setCelsiusInput] = useState("");
    const [fahrenheitInput, setFahrenheitInput] = useState("");


    const [celsiusOutput, setCelsiusOutput] = useState("");
    const [fahrenheitOutput, setFahrenheitOutput] = useState("");

    const [error, setError] = useState("");


    const fahrenheitToCelsius = (f) => ((f - 32) * 5) / 9;
    const celsiusToFahrenheit = (c) => (c * 9) / 5 + 32;


    const handleCelsiusInputChange = (e) => {
        const value = e.target.value;
        setCelsiusInput(value);

        const parsedValue = parseFloat(value);
        if (isNaN(parsedValue)) {
            setError("Введите корректное число");
            setFahrenheitOutput("");
        } else {
            setError("");
            setFahrenheitOutput(celsiusToFahrenheit(parsedValue).toFixed(2) + " °F");
        }
    };


    const handleFahrenheitInputChange = (e) => {
        const value = e.target.value;
        setFahrenheitInput(value);

        const parsedValue = parseFloat(value);
        if (isNaN(parsedValue)) {
            setError("Введите корректное число");
            setCelsiusOutput("");
        } else {
            setError("");
            setCelsiusOutput(fahrenheitToCelsius(parsedValue).toFixed(2) + " °C");
        }
    };

    return (
        <div className={style.container}>
            <div className={style.fieldBox}>
                <TextField
                    label="t° в Цельсиях"
                    placeholder="Введите значение"
                    variant="outlined"
                    value={celsiusInput}
                    onChange={handleCelsiusInputChange}
                    fullWidth
                />
                <TextField
                    label="Эквивалент в Фаренгейтах"
                    variant="outlined"
                    value={fahrenheitOutput}
                    fullWidth
                />
            </div>


            <div className={style.fieldBox}>
                <TextField
                    label="t° в Фаренгейтах"
                    placeholder="Введите значение"
                    variant="outlined"
                    value={fahrenheitInput}
                    onChange={handleFahrenheitInputChange}
                    fullWidth
                />
                <TextField
                    label="Эквивалент в Цельсиях"
                    variant="outlined"
                    value={celsiusOutput}
                    fullWidth
                />
            </div>

            {error && (
                <Typography color="error" variant="body1">
                    {error}
                </Typography>
            )}
        </div>
    );
};
