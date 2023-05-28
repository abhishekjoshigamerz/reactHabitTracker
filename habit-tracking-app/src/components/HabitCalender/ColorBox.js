import React from 'react';
//color box for habit calender to tell what each color code means 
const ColorBox = ({ color, meaning }) => (
  <div 
    style={{
      backgroundColor: color,
      color: 'black',
      width: '120px',
      height: '20px',
      margin: '50px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      border: '1px solid black'
    }}>
    {meaning}
  </div>
);

const ColorMeaning = () => (
  <div 
    style={{
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap'
    }}>
    <ColorBox color='green' meaning='Done' />
    <ColorBox color='red' meaning='Not Done' />
    <ColorBox color='rgb(245, 245, 220)' meaning='None' />
    <ColorBox color='#F3F3F3' meaning='Not Yet Decided' />
  </div>
);

export default ColorMeaning;
