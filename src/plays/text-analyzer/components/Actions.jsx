import React from 'react';
import CustomButton from './CustomButton';
import '../styles.css';

const Actions = () => {
  return (
    <div className='btn-cont'>
      <CustomButton ButtonText="Sentiment" />
      <CustomButton ButtonText="Display Entities" />
      <CustomButton ButtonText="WebPage Extractor" />
      <CustomButton ButtonText="Text checking" />
    </div>
  );
};

export default Actions;
