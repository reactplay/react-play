import PlayHeader from "common/playlists/PlayHeader";
import "./simpleLiveChat.scss";

import { useState } from "react";
import SignIn from "./components/signin-button";
import useLocalStorage from "common/hooks/useLocalStorage";
import DisplayChat from "./components/chat/chat";

function SimpleLiveChat(props) {

  // Your Code Start below.

  const [value, setValue] = useLocalStorage("auth", null);
  const [loggedUser, setLoggedUser] = useState(value);

  return (
    <>
      <div className='play-details'>
        <PlayHeader play={props} />
        <div className='play-details-body simple-live-chat'>
          {/* Your Code Starts Here */}
          <div className='main'>
            {loggedUser ? (
              <DisplayChat
                user={loggedUser}
                setLoggedUser={setLoggedUser}
              />
            ) : (
              <SignIn
                getLoggedUser={(val) => setLoggedUser(val)}
                setValue={setValue}
              />
            )}
          </div>
          {/* Your Code Ends Here */}
        </div>
      </div>
    </>
  );
}

export default SimpleLiveChat;
