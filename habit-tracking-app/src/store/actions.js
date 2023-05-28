// actions.js
export const ADD_HABIT = 'ADD_HABIT';
export const UPDATE_DATE = 'UPDATE_DATE';

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

