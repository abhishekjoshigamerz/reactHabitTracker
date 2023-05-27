//reducer is a function that takes in state and action and returns a new state 
import { ADD_HABIT } from "./actions";

const initialState = {
    habits: []
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_HABIT:
            const newState = [...state.habits, action.payload];
            console.log('New state:', newState);
            return newState;
            // return {
            //     ...state,
            //     habits: [...state.habits, action.payload]
                
            // };
        default:
            return state;
    }
}

export default reducer;

