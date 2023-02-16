import React from 'react';

const Entities = ({ resultEntities }) => {
  return (
    <div>
      {resultEntities.spans.map((item) => (
        <>
          <li>{item}</li>
        </>
      ))}
    </div>
  );
};

export default Entities;
