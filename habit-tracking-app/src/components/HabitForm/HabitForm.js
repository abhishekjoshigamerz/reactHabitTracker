import React, { useState } from 'react';
// habit forms to add new habits
const HabitForm = ({ addHabit }) => {
    const [habit, setHabit] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!habit) return;
        addHabit(habit);
        setHabit('');
    };

    return (
        <form onSubmit={handleSubmit} className='input-container'>
            <label>
                <input type="text" value={habit} onChange={e => setHabit(e.target.value)} />
            </label>
            <input type="submit" className='submit-button' value="Add Habit" />
        </form>
    );
};

export default HabitForm;