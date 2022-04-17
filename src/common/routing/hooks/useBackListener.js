import { useContext, useEffect } from "react";
import { UNSAFE_NavigationContext } from "react-router-dom";

const useBackListener = (callback) => {
  const { navigator } = useContext(UNSAFE_NavigationContext);
  useEffect(() => {
    const listener = ({ location, action }) => {
      if (action === "POP") {
        callback({ location, action });
      }
      if (action === "PUSH") {
        callback({ location, action });
      }
    };
    const unlisten = navigator.listen(listener);
    return unlisten;
  }, [callback, navigator]);
};

export default useBackListener;
