import React from 'react';
import { useState,useEffect } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import Modal from 'react-modal';
import { useParams } from 'react-router-dom';
import { updateDate } from '../../store/actions';
import { useSelector, useDispatch } from 'react-redux';
import ColorBox from './ColorBox';

//render calender and also renders modal for making changes in habit if one did it or did not did it.

// Localizer
const localizer = momentLocalizer(moment)

// Events data
const events = [{
  title: 'Today',
  start: new Date(),
  end: new Date(),
  allDay: true,
}];


// Formats
const formats = {
  dayFormat: 'ddd D',
};



// Main component
const HabitCalendar = (props) => {
  // Today's date
  const habitId = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    Modal.setAppElement('#root'); // or use any other selector that fits your app structure
  }, []);

  const now = new Date();
  const habitData = useSelector(state => state.habits).find(habit => habit.id === habitId.id);
  const dates = habitData.dates;

  
  let donedates = [];
  let notdonedates = [];
  let nonedates = [];
  // select done dates 
  for (let key  in dates){
  
    if(dates[key]=='Done'){
      let newdate =  moment(key).format('YYYY-MM-DD');
    
      donedates.push(newdate);
    }
     if (dates[key]=='Not Done'){
      let newdate = moment(key).format('YYYY-MM-DD');
      notdonedates.push(newdate);
    }
    if(dates[key]=='None') {
      let newdate = moment(key).format('YYYY-MM-DD');
      nonedates.push(newdate);
    }
  }
  


  
  

  const customDayPropGetter = (date) => {
    const dateString = moment(date).format('YYYY-MM-DD');
    if (donedates.includes(dateString)) {
      return {
        style: {
          backgroundColor: "#00FF00",
          textColor: 'white',
        },
      };
    }
    if(notdonedates.includes(dateString)){
      return {
        style: {
          backgroundColor: "red",
          textColor: 'white',
        },
      };
    }

    if(nonedates.includes(dateString)){
      return {
        style: {
          backgroundColor: "#F5F5DC",
          textColor: 'white',
        },
      };
    }

    return {};
  };


  function markAsDone (selectedDate) {

    
    const date = new Date(selectedDate);
    const timestamp = moment(date).format('YYYY-MM-DD');
   
    const status = 'Done';
    
    dispatch(updateDate(habitId.id,timestamp,status));
    closeModal();
  }   

  function markAsNotDone(selectedDate){
    const date = new Date(selectedDate);
    const timestamp =  moment(date).format('YYYY-MM-DD');
   
    const status = 'Not Done';
    
    dispatch(updateDate(habitId.id,timestamp,status));
    closeModal();
  }

  function markAsNone(selectedDate){
    const date = new Date(selectedDate);
    const timestamp =  moment(date).format('YYYY-MM-DD');

    const status = 'None';
    
    dispatch(updateDate(habitId.id,timestamp,status));
    closeModal();
  }


  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const myEventsList = [];

  const handleSelect = ({ start }) => {
  
    setSelectedDate(start);
    setModalIsOpen(true);
  }


  const closeModal = () => {
    setModalIsOpen(false);
  }



  // Calculate start of last week
  const startOfLastWeek = new Date(now.getFullYear(), now.getMonth(), now.getDate() - 7);

  // Calculate end of next week
  const endOfNextWeek = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 14);

  // Make sure that only last week and next week is shown
  const minTime = new Date(startOfLastWeek.setHours(0,0,0));
  const maxTime = new Date(endOfNextWeek.setHours(23,59,59));

  return (
    <div style={{ height: '500pt' }}>
      <ColorBox /><br />
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        min={minTime}
        max={maxTime}
        formats={formats}
        toolbar={false}
        onSelectSlot={handleSelect}
        selectable={true}
        dayPropGetter={customDayPropGetter}
      />
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Selected Date"
        ariaHideApp={true}
      >
        <h2>Selected Date: {selectedDate && moment(selectedDate).format('MMMM Do YYYY')}</h2>
        <p>Mark Habit as </p>
        <button className='btn doneHabit' onClick={()=>markAsDone(selectedDate)}>Done</button>
        <button className='btn notdoneHabit' onClick={()=>markAsNotDone(selectedDate)} >Not Done</button>
        <button className='btn noneHabit' onClick={()=>markAsNone(selectedDate)} >None</button>
        <button onClick={closeModal} className='btn closeHabit'>Close</button>
      </Modal>
    </div>
  );
};

export default HabitCalendar;
