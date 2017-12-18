import React from 'react';

const User = props => {
  return (
    <div className='User'>
      <p>
        Name: {props.user.displayName}
      </p>
    </div>
  );
}

export default User;
