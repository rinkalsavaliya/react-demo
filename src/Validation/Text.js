import React from 'react';
import './Text.css';

/*
* JSX to render text block
*/
const text = (props) => {
  return (
    <div className="text">
      {
        (!!props.count) && ((props.count > props.min) ? <p className='success'>Text long enough</p> : <p className='error'>Text too short</p>)
      }
    </div>
  )
};

export default text;