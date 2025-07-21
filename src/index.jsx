import RouteDefs from 'common/routing/RouteDefs';
import { SearchContextProvider } from 'common/search/search-context';
import React, { useEffect, useState } from 'react';
import { createRoot } from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import register from './registerServiceWorker';
import ErrorBoundry from './ErrorBoundary/ErrorBoundary';
import Notification from 'common/components/Notification';
import 'react-toastify/dist/ReactToastify.css';

/** removing console statement in react prod build */
/* eslint-disable no-console */
if (process.env.NODE_ENV !== 'development') {
  console.log = () => {};
  console.debug = () => {};
  console.info = () => {};
  console.disableYellowBox = true;
}

const Index = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [showShareModal, setShowShareModal] = useState(false);
  const [filterQuery, setFilterQuery] = useState({
    level_id: [],
    tags: [],
    owner_user_id: [],
    language: []
  });

  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  // Effect to apply theme
  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  const value = {
    searchTerm,
    setSearchTerm,
    filterQuery,
    setFilterQuery,
    showShareModal,
    setShowShareModal,
    toggleTheme, // add toggle function to context if needed in NavBar
    theme
  };

  return (
    <ErrorBoundry>
      <SearchContextProvider value={value}>
        <RouteDefs />
        <Notification />
      </SearchContextProvider>
    </ErrorBoundry>
  );
};

const container = document.getElementById('root');
createRoot(container).render(<Index />);

// Makes the app to work offline and load faster
register();
reportWebVitals();
