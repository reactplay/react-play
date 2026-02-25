import React from 'react';
import { ReactComponent as ImageOops } from 'images/img-oops.svg';

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
        <div className="play-error-boundary" style={styles.container}>
          <ImageOops style={styles.image} />
          <h2 style={styles.title}>
            {this.state.isChunkError ? 'Failed to load this play' : 'Something went wrong'}
          </h2>
          <p style={styles.message}>
            {this.state.isChunkError
              ? 'There was a network error loading this play. Please check your connection and try again.'
              : `An error occurred while rendering "${this.props.playName || 'this play'}".`}
          </p>
          <div style={styles.actions}>
            {this.state.isChunkError && (
              <button style={styles.retryButton} onClick={this.handleRetry}>
                Retry
              </button>
            )}
            <button style={styles.backButton} onClick={this.handleGoBack}>
              Back to Plays
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '3rem 1.5rem',
    textAlign: 'center',
    minHeight: '50vh'
  },
  image: {
    width: '200px',
    height: 'auto',
    marginBottom: '1.5rem',
    opacity: 0.8
  },
  title: {
    fontSize: '1.5rem',
    fontWeight: 600,
    color: '#333',
    margin: '0 0 0.75rem'
  },
  message: {
    fontSize: '1rem',
    color: '#666',
    maxWidth: '500px',
    lineHeight: 1.5,
    margin: '0 0 1.5rem'
  },
  actions: {
    display: 'flex',
    gap: '1rem'
  },
  retryButton: {
    padding: '0.6rem 1.5rem',
    fontSize: '0.95rem',
    fontWeight: 600,
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    background: '#00f2fe',
    color: '#fff',
    transition: 'opacity 0.2s'
  },
  backButton: {
    padding: '0.6rem 1.5rem',
    fontSize: '0.95rem',
    fontWeight: 600,
    border: '2px solid #00f2fe',
    borderRadius: '6px',
    cursor: 'pointer',
    background: 'transparent',
    color: '#00f2fe',
    transition: 'opacity 0.2s'
  }
};

export default PlayErrorBoundary;
