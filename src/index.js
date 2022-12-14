import RouteDefs from 'common/routing/RouteDefs';
import { SearchContextProvider } from 'common/search/search-context';
import 'index.css';
import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import reportWebVitals from 'reportWebVitals';
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

  const value = {
    searchTerm,
    setSearchTerm,
    filterQuery,
    setFilterQuery,
    showShareModal,
    setShowShareModal
  };

  return (
    // <React.StrictMode>
    <ErrorBoundry>
      <SearchContextProvider value={value}>
        <RouteDefs />
        <Notification />
      </SearchContextProvider>
    </ErrorBoundry>
    // </React.StrictMode>
  );
};
const container = document.getElementById('root');
createRoot(container).render(<Index />);

// Makes the app to work offline and load faster
register();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
