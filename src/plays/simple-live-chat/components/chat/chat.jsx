import { useEffect, useState } from "react";
import { firebase } from "../../firebase";
import {
  getFirestore,
  onSnapshot,
  collection,
  query,
  orderBy,
} from "firebase/firestore";
import { getAuth, signOut } from "firebase/auth";

// components
import ChatHeader from "./chat-header";
import ChatFooter from "./chat-footer";
import ChatBody from "./chat-body";

// css
import './chat.scss'

const DisplayChat = ({ user, setLoggedUser }) => {
  const db = getFirestore(firebase);
  const auth = getAuth(firebase);
  const [message, setMessage] = useState({ message: [], loading: false });

  useEffect(() => {
    if (!message.length) setMessage({ message: [], loading: true });
    onSnapshot(
      query(collection(db, "messages"), orderBy("createdAt")),
      (item) => {
        setMessage({
          message: item.docs.map((doc) => ({ ...doc.data(), id: doc.id })),
          loading: false,
        });
      }
    );
  }, [db, message.length]);

  const signOutHandler = async (e) => {
    e.preventDefault();
    signOut(auth)
      .then(() => {
        setLoggedUser(null);
        localStorage.removeItem("auth");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const LoadingComponent = () => {
    if (!message.loading) return null;
    return <div className='show-loading'>Loading...</div>;
  };

  const info = {
    signOutHandler: signOutHandler,
    userImage: user?.photoURL,
    displayName: user?.displayName,
    uid: user?.uid,
    ...message,
  };

  return (
    <div className="simple-live-chat-main-chat">
      <LoadingComponent />
      <DisplayChat.ChatHeader {...info} />
      <DisplayChat.ChatBody {...info} />
      <DisplayChat.ChatFooter {...info} />
    </div>
  );
};

DisplayChat.ChatHeader = ChatHeader;
DisplayChat.ChatFooter = ChatFooter;
DisplayChat.ChatBody = ChatBody;

export default DisplayChat;
