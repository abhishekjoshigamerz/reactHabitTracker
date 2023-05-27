import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const HabitList = ({ habits }) => (
   
    <ul>
        {habits.map((habit, index) => (
           <NavLink to={`habit/`+habit.id} className='linkHabits'> <li key={index}>
                <div className='habbitTitle'>
                <h3 className='habit-name'></h3>{habit.name} <br />
                </div>
                <div className='habbitInfo'>
                Number of days: {habit.days} &nbsp;
                Best streak: {habit.bestStreak} &nbsp;
                Time added: {habit.timeAdded.toLocaleString(undefined, { dateStyle: 'short' })} &nbsp;
                Favorite : Yes &nbsp;
                </div>
            </li>
            </NavLink>

        ))}
    </ul>
);

export default HabitList;