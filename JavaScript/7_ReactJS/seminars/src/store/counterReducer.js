const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

export const increment = () => ({type: INCREMENT});
export const decrement = () => ({type: DECREMENT});


const initialState = {
    count: 0,
}

export const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT:
            return {...state, count: state.count + 1}; //...state 3.20 занятия
        case DECREMENT:
            return {...state, count: state.count - 1};
        default:
            return state;
    }
}