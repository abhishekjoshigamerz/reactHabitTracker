// actions.js
export const ADD_HABIT = 'ADD_HABIT';
export const UPDATE_DATE = 'UPDATE_DATE';
// keeps track of all the actions that can be performed on the app.
export const addHabit = habit => ({
    type: ADD_HABIT,
    payload: habit
});

export const updateDate = (habitId,timestamp,status) => ({
    
    type: UPDATE_DATE,
    payload: {
        habitId, timestamp , status
    }
    
});

