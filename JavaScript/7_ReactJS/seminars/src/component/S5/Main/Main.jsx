import React, {useContext} from 'react';
import {UserContext} from "../../../contexts/S5/UserContext.js";
import {useTheme} from "../../../contexts/S5/ThemeContext.js";

export const Main = () => {
    const {setUserName} = useContext(UserContext);
    const {toggleTheme} = useTheme();
    return (
        <div className=''>
            <button onClick={() => setUserName(prompt('Напишите свое имя', 'Bright'))}>
                Сменить имя
            </button>
            <button onClick={() => setUserName("Гость")}>
                Выйти
            </button>
            <button onClick={toggleTheme}>
                Сменить тему
            </button>
        </div>
    );
};