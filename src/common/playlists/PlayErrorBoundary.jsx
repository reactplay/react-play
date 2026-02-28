import React from 'react';
import { ReactComponent as ImageOops } from 'images/img-oops.svg';
import './PlayErrorBoundary.css';

class PlayErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, isChunkError: false };
  }

  static getDerivedStateFromError(error) {
    // Detect chunk load failures (network errors loading lazy chunks)
    const isChunkError =
      error?.name === 'ChunkLoadError' ||
      /loading chunk/i.test(error?.message) ||
      /failed to fetch dynamically imported module/i.test(error?.message);

    return { hasError: true, error, isChunkError };
  }

  componentDidCatch(error, errorInfo) {
    console.error(`Error loading play "${this.props.playName}":`, error, errorInfo);
  }

  handleRetry = () => {
    this.setState({ hasError: false, error: null, isChunkError: false });
  };

  handleGoBack = () => {
    window.location.href = '/plays';
  };

  render() {
    if (this.state.hasError) {
      return (
        <div className="play-error-boundary play-error-container">
          <ImageOops className="play-error-image" />
          <h2 className="play-error-title">
            {this.state.isChunkError ? 'Failed to load this play' : 'Something went wrong'}
          </h2>
          <p className="play-error-message">
            {this.state.isChunkError
              ? 'There was a network error loading this play. Please check your connection and try again.'
              : `An error occurred while rendering "${this.props.playName || 'this play'}".`}
          </p>
          <div className="play-error-actions">
            {this.state.isChunkError && (
              <button className="play-error-retry-button" onClick={this.handleRetry}>
                Retry
              </button>
            )}
            <button className="play-error-back-button" onClick={this.handleGoBack}>
              Back to Plays
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default PlayErrorBoundary;
