import React from 'react';

const Error = props => {
  const { status, msg } = props.error;
  return (
    <p>
      {status} - {msg}
    </p>
  );
};

export default Error;
