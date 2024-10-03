import React, {createContext, useState} from 'react';
import {useTheme} from "../../../contexts/S5/ThemeContext.jsx";
import {WithLoadingIndicator} from "../WithLoadingIndicator/WithLoadingIndicator.jsx";
import {Counter} from "../Counter/Counter.jsx";
import {useDispatch} from "react-redux";
import {updateNameAndEmail} from "../../../store/userReducer.js";

const Main = ({data}) => {
    const {theme, switchTheme} = useTheme();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(updateNameAndEmail({name, email}))
    };
    return (
        <div className=''>
            <form onSubmit={handleSubmit} style={{background: "#ccc", padding: "20px"}}>
                <input type='text' value={name} onChange={(e) => {
                    setName(e.target.value)
                }}/>
                <input type='text' value={email} onChange={(e) => {
                    setEmail(e.target.value)
                }}/>

                <button type="submit">Отправить</button>
            </form>

            <p>{data}</p>
            <button
                className={`btn-${theme === "light" ? "light" : "dark"}`}
                onClick={switchTheme}>
                Сменить тему
            </button>
            <Counter/>
            {/*{theme === "light" ? <img src={lightIMG}/> : <img src={darkIMG}/>}*/}
        </div>
    );
};

export const MainWithLoading = WithLoadingIndicator(Main)