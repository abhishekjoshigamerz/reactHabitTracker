import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
import HabitForm from './components/HabitForm/HabitForm';
import HabitList from './components/HabitList/HabitList';
import store from './store/store';
import { addHabit as addHabitAction } from './store/actions';
import { useSelector, useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';



function App() {
  const dispatch = useDispatch();
  const habitData = useSelector(state => state.habits);
 
  const [habits, setHabits] = useState([]);

  const addHabit = (habit) => {
    const newHabit = {
        id : uuidv4(),
        name: habit,
        timeAdded: new Date(),
        dates: {
          
        },

    };

    dispatch(addHabitAction(newHabit));
  
    setHabits([...habits, newHabit]);

};

  return (
    <div className="App ">
       
            <h1>Habit Tracker</h1>
            <HabitForm addHabit={addHabit} />
            <HabitList habits={habitData} />
    </div>
  );
}
 
export default App;
