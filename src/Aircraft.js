import React from 'react';

const Aircraft = props => {
  return (
    <div className='Aircraft'>
      <p>
        Type: {props.aircraft.type}
      </p>
    </div>
  );
}

export default Aircraft;
