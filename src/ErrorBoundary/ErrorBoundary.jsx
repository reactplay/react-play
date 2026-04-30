import React from 'react';
import { ErrorBoundary as ReactErrorBoundary } from 'react-error-boundary';
import ErrorFallback from './ErrorFallback';

const ErrorBoundary = ({ children }) => {
  const onErrorReset = () => {
    /**
     * Had to do this because we have placed the ErrorBoundary at the top level
     * and we can't use the react-router hooks outside of the Router
     */
    window.location.href = '/';
  };

  return (
    <ReactErrorBoundary FallbackComponent={ErrorFallback} onReset={onErrorReset}>
      {children}
    </ReactErrorBoundary>
  );
};

export default ErrorBoundary;
