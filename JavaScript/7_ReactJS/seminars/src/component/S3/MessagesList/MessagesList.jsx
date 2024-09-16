/*
Задание 3
● Создайте компонент MessagesList, который отображает список сообщений.
Каждое сообщение должно иметь уникальный id и текст.
● Используйте проп key при рендеринге списка, чтобы обеспечить оптимальную производительность.
*/
import {Message} from "../Message/Message.jsx";
import PropTypes from "prop-types";

export const MessagesList = ({messages}) => {
    console.log(messages)
    return (
        <ul>
            {messages.map(({id, text}) => (
                <Message key={id} message={text}/>
            ))}
        </ul>
    )
}

MessagesList.propTypes = {
    messages: PropTypes.arrayOf( // пропс обязательно массив
        PropTypes.shape({ // должен состоять из
            id: PropTypes.number.isRequired, // на лишние свойства не ругается
            text: PropTypes.string.isRequired,
        })
    ).isRequired, // обязательно долежен присутвовать
};