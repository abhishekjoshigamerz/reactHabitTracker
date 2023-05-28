import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import  moment  from 'moment';
import './HabitDetail.css';

import HabitCalendar from '../HabitCalender/HabitCalender';
// shows calender and habits in details like when i have done this habit and when i have skipped it.

const HabitDetail = () => {
   
    const { id } = useParams();
   
    const allHabits = useSelector(state => state.habits);
   
    const habit = useSelector(state => state.habits.find(habit => habit.id === id));
    const date = moment().format('DD-MM-YYYY');
    if (!habit) {
        return <div>Habit not found</div>;
    }
    
    return (
    <div className='App2'>    
        <div className='Calendar'>
            <br />
            <h1>{habit.name}</h1>
            <p>{date}</p>
            
            <HabitCalendar />
        </div>
  </div>
    );
};
export default HabitDetail;