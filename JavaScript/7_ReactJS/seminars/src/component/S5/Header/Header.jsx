import React, {useContext} from "react";
import {UserContext} from "../../../contexts/S5/UserContext.js";
import {useSelector} from "react-redux";

export const Header = () => {
    const {userName, setUserName} = useContext(UserContext);
    const {name, email} = useSelector((state) => state.user);
    return (
        <div>
            <div>UserName(Context): {userName}</div>
            <div>Имя(Redux): {name}</div>
            <div>E-mail(Redux): {email}</div>
            <button onClick={
                () => setUserName(prompt('Напишите свое имя', 'Bright'))}
            >
                Сменить имя
            </button>
            <button onClick={() => setUserName("Гость")}> Выйти</button>
        </div>
    )
}