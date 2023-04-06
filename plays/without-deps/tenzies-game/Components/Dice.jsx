import React from 'react';

const Dice = (props) => {
  const styles = {
    backgroundColor: props.isHeld ? '#59E391' : 'white'
  };

  return (
    <div className="tenzies_dice" style={styles} onClick={props.toggle}>
      <h2 className="tenzies_die_num"> {props.value} </h2>
    </div>
  );
};

export default Dice;
