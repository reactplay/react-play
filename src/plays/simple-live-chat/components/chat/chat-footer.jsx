import { firebase } from "../../firebase";
import {
  collection,
  addDoc,
  getFirestore,
  Timestamp,
} from "firebase/firestore";
import { useState } from "react";

// css
import "./chat-footer.scss";

const ChatFooter = ({ userImage: photoURL, uid, displayName, loading }) => {
  const [message, setMessage] = useState("");

  const db = getFirestore(firebase);

  const sendMessage = async () => {
    await addDoc(collection(db, "messages"), {
      text: message,
      photoURL,
      uid,
      createdAt: Timestamp.now(),
      displayName,
    });
  };

  const handleKeyEvent = (e) => {
    if (e.key === "Enter" && e.shiftKey) {
      return;
    }
    if (e.key === "Enter") {
      e.preventDefault();
      if (e.target.value.trim() !== "") {
        sendMessage();
        setMessage("");
      }
    }
  };

  const handleClickSend = (e) => {
    if (message.trim() !== "") {
      sendMessage();
      setMessage("");
    }
  };

  if (loading) return null;

  return (
    <div className='simple-live-chat-chat-footer'>
      <div className='simple-live-chat-footer-container'>
        <textarea
          className='simple-live-chat-footer-textarea'
          onKeyDown={handleKeyEvent}
          onChange={(e) => setMessage(e.target.value)}
          value={message}
          placeholder='Start typing . . .'
        ></textarea>
        <div onClick={handleClickSend}>
          <svg width='40px' height='30px' viewBox='0 0 20 18' version='1.1'>
            <g
              id='Icons'
              stroke='none'
              strokeWidth='1'
              fill='none'
              fillRule='evenodd'
            >
              <g id='Rounded' transform='translate(-374.000000, -1529.000000)'>
                <g id='Content' transform='translate(100.000000, 1428.000000)'>
                  <g
                    id='-Round-/-Content-/-send'
                    transform='translate(272.000000, 98.000000)'
                  >
                    <g>
                      <polygon id='Path' points='0 0 24 0 24 24 0 24'></polygon>
                      <path
                        d='M3.4,20.4 L20.85,12.92 C21.66,12.57 21.66,11.43 20.85,11.08 L3.4,3.6 C2.74,3.31 2.01,3.8 2.01,4.51 L2,9.12 C2,9.62 2.37,10.05 2.87,10.11 L17,12 L2.87,13.88 C2.37,13.95 2,14.38 2,14.88 L2.01,19.49 C2.01,20.2 2.74,20.69 3.4,20.4 Z'
                        id='🔹Icon-Color'
                        fill='#1D1D1D'
                      ></path>
                    </g>
                  </g>
                </g>
              </g>
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default ChatFooter;
