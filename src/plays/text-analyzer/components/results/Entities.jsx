import React from 'react';

const Entities = ({ resultEntities }) => {
  return (
    <div style={{margin: '25px 25px'}}>
      {resultEntities.spans.length === 0
        ? 'No Entities'
        : resultEntities.spans.map((item) => (
            <>
              <li>{item.text}</li>
            </>
          ))}
    </div>
  );
};

export default Entities;
