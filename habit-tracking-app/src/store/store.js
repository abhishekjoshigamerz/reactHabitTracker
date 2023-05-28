import { createStore } from 'redux';
import { ADD_HABIT } from './actions';
import { UPDATE_DATE } from './actions';

//redux store manage temporary states of the app and also provide a way to update the state.
const initialState = {
  habits: []
};

function rootReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_HABIT:
      return {
        ...state,
        habits: [...state.habits, action.payload]
      };
      case UPDATE_DATE:
       
        return {
          ...state,
          habits: state.habits.map((habit) => {
            if(habit.id===action.payload.habitId){
            
              const updatedDates = {...habit.dates};
              if(!updatedDates.hasOwnProperty(action.payload.timestamp)){
                
                updatedDates[action.payload.timestamp] = action.payload.status;
                return {
                  ...habit,
                  dates: updatedDates
                }
              }else{
                updatedDates[action.payload.timestamp] = action.payload.status;
                return {
                  ...habit,
                  dates: updatedDates
                }
              }
            }
            return habit;
          })
        }
        
    default:
      return state;
  }
}

const store = createStore(rootReducer);

export default store;
