import React from 'react';

/*
* JSX to render char block
*/
const char = (props) => {
  return (
    <span onClick={props.deleteChar}>{props.char}</span>
  )
};

export default char;
