/*
Задание 1
● Создайте компонент Box, который оборачивает содержимое, переданное в children,
в div с определенными стилями (например, с рамкой и отступами).
● Используйте Box для оборачивания различных элементов
(текста, картинок, других компонентов), чтобы продемонстрировать его переиспользуемость.
*/
import style from "./Box.module.scss"
import classNames from "classnames"

export const Box = ({className, children}) => {
    return (
        <div
            // className={`${style.container} ${className ? className : ""}`} // если нужно передать помимо внутренних стилей еще и внешние
            className={classNames(style.container, className)} // библиотека npm i classnames позволяет делать более удобное написание
        >
            {children}
        </div>
    )
}