import { getPlayById } from "meta/play-meta-util";

import PlayHeader from "common/playlists/PlayHeader";
import "./simpleLiveChat.scss";

import { useState } from "react";
import SignIn from "./components/signin-button";
import StorageHandler from "./components/Storage";

import DisplayChat from "./components/chat/chat";

function SimpleLiveChat(props) {
  // Do not remove the below lines.
  // The following code is to fetch the current play from the URL
  const { id } = props;
  const play = getPlayById(id);

  // Your Code Start below.

  const { user } = props;
  const [LoggedUser, setLoggedUser] = useState(user);

  return (
    <>
      <div className='play-details'>
        <PlayHeader play={play} />
        <div className='play-details-body simple-live-chat'>
          {/* Your Code Starts Here */}
          <div className='main'>
            {LoggedUser ? (
              <DisplayChat user={LoggedUser} setLoggedUser={setLoggedUser} />
            ) : (
              <SignIn getLoggedUser={(val) => setLoggedUser(val)} />
            )}
          </div>
          {/* Your Code Ends Here */}
        </div>
      </div>
    </>
  );
}

const Sync = (retrivalHandler) => (Component) => {
  return (props) => <Component user={retrivalHandler()} {...props} />;
};

export default Sync(StorageHandler.retrieveFromLocalStorage)(SimpleLiveChat);