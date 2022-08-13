import { useState } from "react";
import PlayHeader from 'common/playlists/PlayHeader';
import CardForm from './CardForm';
import CardDetails from './CardDetails';
import { SocialContext } from './context/SocialContext';

import "./social-card.css";

function SocialCard(props) {
  // The social state carry the information of the social
  // in the context. This information is made available
  // between the Card form and the Card details.
  const [social, setSocial] = useState({});
  const value = { social, setSocial };

  return (
    <>
      <div className="play-details">
        <PlayHeader play={props} />
        <div className="play-details-body">
          <div className="social-card-body">
            <div style={{textAlign: 'center'}}>
              <h2>Create your Social Card</h2>
              <p>Please fill the form below to create a Social Card for you.</p>
            </div>
            <SocialContext.Provider value={value}>
              <div className="social-card">
                <CardForm />
                <CardDetails />
              </div>
            </SocialContext.Provider>
          </div>
        </div>
      </div>
    </>
  );
}

export default SocialCard;