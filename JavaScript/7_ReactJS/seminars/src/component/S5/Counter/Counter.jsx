import React from 'react';

import {useDispatch, useSelector} from "react-redux";
import {decrement, increment} from "../../../store/counterReducer.js";

export const Counter = () => {
    const {count} = useSelector(state => state.counter);
    const dispatch = useDispatch();


    return (
        <div>
            <p>Counter:{count}</p>
            <button onClick={() => dispatch(increment())}>+</button>
            <button onClick={() => dispatch(decrement())}>-</button>
        </div>
    );
};
