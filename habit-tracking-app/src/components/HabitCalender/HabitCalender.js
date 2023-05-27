import React from 'react';
import { useState,useEffect } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import Modal from 'react-modal';

// Localizer
const localizer = momentLocalizer(moment)

// Events data
const events = [{
  title: 'Today',
  start: new Date(),
  end: new Date(),
  allDay: true,
}];

// Custom toolbar that has no buttons


// Custom components to make calendar not clickable


// Formats
const formats = {
  dayFormat: 'ddd D',
};

// Main component
const HabitCalendar = (props) => {
  // Today's date

  useEffect(() => {
    Modal.setAppElement('#root'); // or use any other selector that fits your app structure
  }, []);

  const now = new Date();

  const selectedDates = [
    '2023-05-10',
    '2023-05-15',
    '2023-05-20',
  ];

  const customDayPropGetter = (date) => {
    const dateString = moment(date).format('YYYY-MM-DD');
    if (selectedDates.includes(dateString)) {
      return {
        style: {
          backgroundColor: "red",
        },
      };
    }
    return {};
  };
   


  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(null);
  const myEventsList = [];

  const handleSelect = ({ start }) => {
    console.log('Selected Modals');
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
      <Calendar
        localizer={localizer}
        events={[]}
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
        <button className='doneHabit'>Done</button>
        <button className='notdoneHabit'>Not Done</button>
        <button className='noneHabit'>None</button>
        <button onClick={closeModal}>Close</button>
      </Modal>
    </div>
  );
};

export default HabitCalendar;
