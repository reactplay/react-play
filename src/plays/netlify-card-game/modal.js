import { Fragment, useState, useEffect } from "react";

// css
import "./modal.scss";

// assets
import s1 from "./guideimages/s1.png";
import s2 from "./guideimages/s2.png";
import s3 from "./guideimages/s3.png";
import s4 from "./guideimages/s4.png";
import close from './close.png'

const Modal = ({ showModal, toggle }) => {
  const [currState, setCurrentState] = useState(0);

  const structuringData = [
    {
      info: "Click any of the box to unvail the the hidden image.",
      image: s1,
    },
    {
      info: "Now Click another box to unvail another image. if its not the same the both of them will be hidden again.",
      image: s2,
    },
    {
      info: "If the both images are matched they will stay visible and you want to uncover other images and also find their pair",
      image: s3,
    },
    {
      info: "Lastly images position will be different on every 'reset' button click any you can keep continue memorise the glimpse of the images and find their pair. ",
      image: s4,
    },
  ];

  useEffect(() => {
    setCurrentState(0);
  }, [showModal]);

  const buttonHandler = (val) => (e) => {
    if ((currState === 0 && val < 0) || (currState === 3 && val > 0)) return;
    setCurrentState(currState + val);
  };

  if (!showModal) return false;
  return (
    <Fragment>
      <div className='memory-game-modal'>
        <img src={close} alt="clonse" onClick={toggle} className="close-icon" />
        <div className='content'>
          <h1 className='text'>How to Play!</h1>
          <p>{structuringData[currState].info}</p>
          <img
            className='guide-image'
            src={structuringData[currState].image}
            alt='pic'
          />
          <div className='button-section'>
            {currState > 0 ? <button onClick={buttonHandler(-1)}>Prev</button> : <p></p>}
            <button onClick={currState === 3 ? toggle : buttonHandler(1)}>
              {currState === 3 ? "Done" : "Next"}
            </button>
          </div>
        </div>
      </div>
      <div onClick={toggle} className='memory-game-backdrop' />
    </Fragment>
  );
};

export default Modal;
