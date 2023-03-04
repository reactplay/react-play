import PlayHeader from 'common/playlists/PlayHeader';
import Modal from './components/Modal';
import Random from './components/Random';
import CategoryFact from './components/CategoryFact';
import TextFact from './components/TextFact';
import RealTitle from './components/Title';
import './styles.css';
import { useState } from 'react';

// WARNING: Do not change the entry componenet name
function DigitsDelight(props) {
  // Your Code Start below.

  const [showModal, setShowModal] = useState(false);

  const toggle = () => setShowModal((prev) => !prev);

  return (
    <>
      <div className="play-details">
        <PlayHeader play={props} />
        <div className="play-details-body">
          {/* Your Code Starts Here */}
          <div>
            <div className="digits-delight-container">
              <div className="digits-title-container">
                <RealTitle />
                <div className="digits-delight-modal-button-container">
                  <button className="digits-delight-show-modal" onClick={toggle}>
                    Give me a Tour
                  </button>
                </div>
              </div>

              <div className="digits-facts-container">
                <div className="digits-random-facts">
                  <Random />
                </div>

                <div className="digits-text-facts">
                  <TextFact />
                </div>
              </div>

              <div className="digits-delight-category-container">
                <div className="digits-dellight-category-facts">
                  <CategoryFact />
                </div>
              </div>
            </div>
          </div>
          <Modal showModal={showModal} toggle={toggle} />
          {/* Your Code Ends Here */}
        </div>
      </div>
    </>
  );
}

export default DigitsDelight;
