import React from 'react';

const Entities = ({ resultEntities }) => {
  return (
    <div>
      {resultEntities.spans.length === 0
        ? 'No Entities'
        : resultEntities.spans.map((item) => (
            <>
              <li>{item}</li>
            </>
          ))}
    </div>
  );
};

export default Entities;
