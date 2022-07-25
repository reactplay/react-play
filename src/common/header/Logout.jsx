import { IoLogOutSharp } from "react-icons/io5";
import { useAuthenticated, useSignOut } from "@nhost/react";

const LogOut = () => {
  const isAuthenticated = useAuthenticated();
  const { signOut } = useSignOut();

  if (!isAuthenticated && process.env.NODE_ENV !== "development") {
    return null;
  }
  return (
    <li>
      <button
        className='app-header-btn app-header-btn--default'
        onClick={() => signOut()}
      >
        <IoLogOutSharp className='icon' />
        <span className='btn-label'>Logout</span>
      </button>
    </li>
  );
};

export default LogOut;
