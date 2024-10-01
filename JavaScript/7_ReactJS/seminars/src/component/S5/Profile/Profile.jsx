import {useContext} from "react";
import {UserContext} from "../../../contexts/S5/UserContext.js";

export const Profile = () => {
    const {userName} = useContext(UserContext);
    return (
        <div>
            <p>Инфо о {userName}</p>
        </div>
    )
}