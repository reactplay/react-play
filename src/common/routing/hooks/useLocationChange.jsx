import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const useLocationChange = (action) => {
  const location = useLocation();
  useEffect(() => {
    action(location);
  }, [location, action]);
};

export { useLocationChange };
