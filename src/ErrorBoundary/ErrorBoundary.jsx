import React from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import ErrorFallback from './ErrorFallback';

const ErrorBoundry = ({ children }) => {
  const onErrorReset = () => {
    /**
     * Had to do this because we have placed the ErrorBoundary at the top level
     * and we can't use the react-router hooks outside of the Router
     */
    window.location.href = '/';
  };

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback} onReset={onErrorReset}>
      {children}
    </ErrorBoundary>
  );
};

export default ErrorBoundry;
