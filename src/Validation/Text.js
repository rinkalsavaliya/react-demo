import React from 'react';

/*
* JSX to render text block
*/
const text = (props) => {
  const styles = {
    success: { color: 'green' },
    error: { color: 'red' }
  }
  return (
    <>
      {
        (!!props.count) && ((props.count > props.min) ? <p style={styles.success}>Text long enough</p> : <p style={styles.error}>Text too short</p>)
      }
    </>
  )
};

export default text;
