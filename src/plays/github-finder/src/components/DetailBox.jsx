import React from 'react';
import 'font-awesome/css/font-awesome.min.css';

export default function DetailBox(props) {
  return (
    <>
      <div className="detail-box">
        <span> 📍</span>
        <p className="detail-info">{props?.location || `Probably a nomad`}</p>
      </div>
      <div className="detail-box">
        <span> 🔗 </span>
        <a href={props?.blog} target="_blank">
          {props?.twitter_username || `Not Available`}
        </a>
      </div>
      <div className="detail-box">
        <span> ✉️ </span>
        <p className="detail-info">{props?.email || `Not Available`}</p>
      </div>
      <div className="detail-box">
        <span> 🏢</span>
        <p className="detail-info">{props?.company || `Not Available`}</p>
      </div>
    </>
  );
}
