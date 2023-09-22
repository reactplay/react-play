import React from 'react';

const Paraphaser = ({ resultparaphraser }) => {
  return (
    <div className="paraphaser" style={{ margin: '25px 25px' }}>
      {resultparaphraser.output}
    </div>
  );
};

export default Paraphaser;
