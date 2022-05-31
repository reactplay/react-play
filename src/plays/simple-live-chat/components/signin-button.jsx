// assets
import googleIcon from "../images/icon.png";
import githubIcon from "../images/github.png";
// import twitterIcon from "../images/twitter.png";

// vendors
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  GithubAuthProvider,
  // TwitterAuthProvider,
} from "firebase/auth";
import { useState } from "react";

// helpers
import StorageHandler from "./Storage";

// css
import "./signin-button.scss";

// credentials
import { firebase } from "../firebase";

const SignIn = ({ getLoggedUser }) => {
  const auth = getAuth(firebase);
  const [error, setError] = useState(null);

  const signInHandler = (provider) => () => {
    setError(null);
    return signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        getLoggedUser(StorageHandler.saveLocalStorage(user));
      })
      .catch((error) => {
        setError(error?.message);
      });
  };

  const SignInButton = ({ icon, text, handler }) => {
    return (
      <div className='sign-in-button'>
        <button onClick={handler}>
          <img src={icon} alt={text} />
          <span>{text}</span>
        </button>
      </div>
    );
  };

  return (
    <div className="sign-in-container">
      <div className='main-container'>
        <div>
          {error && <p className="error">{error}</p>}
          <SignInButton
            icon={googleIcon}
            text='Sign in With Google'
            handler={signInHandler(new GoogleAuthProvider())}
          />
          <SignInButton
            icon={githubIcon}
            text='Sign in With Github'
            handler={signInHandler(new GithubAuthProvider())}
          />
          {/* <SignInButton
            icon={twitterIcon}
            text='Sign in With Twitter'
            handler={signInHandler(new TwitterAuthProvider())}
          /> */}
        </div>
      </div>
    </div>
  );
};

export default SignIn;
