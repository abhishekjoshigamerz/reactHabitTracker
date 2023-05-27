import { createStore } from 'redux';
import { ADD_HABIT } from './actions';

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
    default:
      return state;
  }
}

const store = createStore(rootReducer);

export default store;
