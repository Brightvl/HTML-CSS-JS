import {useContext} from "react";
import {UserContext} from "../../../contexts/S5/UserContext.js";

export const Header = () => {
    const {userName} = useContext(UserContext);
    return (
        <div>
            <p>Имя: {userName}</p>
        </div>
    )
}