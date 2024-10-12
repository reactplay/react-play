import React, { useState } from 'react';
import PlayHeader from 'common/playlists/PlayHeader';
import AccordionData from './AccordianData';
import './styles.css';
import { accordionData } from './data';

// WARNING: Do not change the entry componenet name
function Accordian(props) {
  const [activeAccordion, setActiveAccordion] = useState(null);
  const handleAccordionClick = (index) => {
    setActiveAccordion(index === activeAccordion ? null : index);
  };

  return (
    <>
      <div className="play-details">
        <PlayHeader play={props} />
        <div className="play-details-body">
          {/* Your Code Starts Here */}
          <div className="accordion">
            {accordionData.map(({ title, content }, index) => (
              <AccordionData
                content={content}
                isActive={index === activeAccordion}
                key={index}
                title={title}
                onClick={() => handleAccordionClick(index)}
              />
            ))}
          </div>
          {/* Your Code Ends Here */}
        </div>
      </div>
    </>
  );
}

export default Accordian;
