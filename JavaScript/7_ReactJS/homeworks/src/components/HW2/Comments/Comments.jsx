/*
Задание 3
● Создать компонент TodoList, который позволяет добавлять элементы в список дел
через текстовое поле ввода. Список должен обновляться при добавлении нового дела.
*/
import { useState } from "react";
import styles from './style.module.scss';

export const Comments = ({ title }) => {
    const [value, setValue] = useState('');
    const [messages, setMessages] = useState([
        { id: 1, text: "Это первый комментарий" },
        { id: 2, text: "Это второй комментарий" },
        { id: 3, text: "Это третий комментарий" }
    ]);

    const updateValue = (e) => {
        setValue(e.target.value);
    };

    const addMessages = () => {
        if (value.trim() === '') {
            setValue('');
            return;
        }
        const newArr = [...messages, { text: value, id: crypto.randomUUID() }];
        setMessages(newArr);
        setValue('');
    };

    const removeMessage = (id) => {
        const newArr = messages.filter(message => message.id !== id);
        setMessages(newArr);
    };

    return (
        <div className={styles.container}>
            <ul className={styles.title}>{title}</ul>
            <ul className={styles.list}>
                {messages.map((mess) =>
                    <li key={mess.id} className={styles.listItem}>
                        <span className={styles.text}>{mess.text}</span>
                        <button className={styles.button} onClick={() => removeMessage(mess.id)}>
                            Удалить
                        </button>
                    </li>
                )}
            </ul>

            <input
                type='text'
                placeholder='Todo List'
                onChange={updateValue}
                value={value}
                className={styles.input}
            />
            <button
                type='submit'
                onClick={addMessages}
                className={styles.submitButton}
            >
                Подтвердить
            </button>
        </div>
    );
};
