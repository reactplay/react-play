import { useState } from "react";
import { useLocation } from 'react-router-dom';
import { getPlayById } from 'meta/play-meta-util';

import PlayHeader from 'common/playlists/PlayHeader';

import CardForm from './CardForm';
import CardDetails from './CardDetails';

import { SocialContext } from './context/SocialContext';

import "./social-card.css";

function SocialCard() {
  // The following code is to fetch the current play from the URL
  const location = useLocation();
  const { id } = location.state;
  const play = getPlayById(id);

  // The social state carry the information of the social
  // in the context. This information is made available
  // between the Card form and the Card details.
  const [social, setSocial] = useState({});
  const value = { social, setSocial };

  return (
    <>
      <div className="play-details">
        <PlayHeader play={play} />
        <div className="play-details-body">
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
    </>
  );
}

export default SocialCard;