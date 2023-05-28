import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FcAbout } from "react-icons/fc";



const HabitList = ({ habits }) => (
   
    <ul>
        {habits.map((habit, index) => (
           <NavLink to={`habit/`+habit.id} className='linkHabits'> <li key={index}>
                <div className='habbitTitle'>
                <h3 className='habit-name'></h3>{habit.name} <br />
                </div>
                <div className='habbitInfo'>
                Created on : {habit.timeAdded.toLocaleString(undefined, { dateStyle: 'short' })} &nbsp;
                 <FcAbout />
      
                </div>
            </li>
            </NavLink>

        ))}
    </ul>
);

export default HabitList;