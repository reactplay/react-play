import { useState } from 'react';

function ResponsePanel({ response, isLoading }) {
  const [activeTab, setActiveTab] = useState('body');
  const [searchTerm, setSearchTerm] = useState('');

  if (!response && !isLoading) {
    return (
      <div className="response-panel">
        <div className="response-placeholder">
          <div className="placeholder-icon">🎯</div>
          <h3>Ready to test APIs</h3>
          <p>Enter a URL above and click Send to see the response here</p>
          <div className="placeholder-tips">
            <h4>Quick Tips:</h4>
            <ul>
              <li>Try: https://jsonplaceholder.typicode.com/posts</li>
              <li>Use Ctrl+Enter to send request</li>
              <li>View response time and size</li>
              <li>Access request history</li>
            </ul>
          </div>
        </div>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="response-panel">
        <div className="response-loading">
          <div className="spinner" />
          <p>Sending request...</p>
        </div>
      </div>
    );
  }

  const getStatusClass = (status) => {
    if (status === 0) return 'status-error';
    if (status >= 200 && status < 300) return 'status-success';
    if (status >= 300 && status < 400) return 'status-redirect';
    if (status >= 400 && status < 500) return 'status-client-error';

    return 'status-server-error';
  };

  const formatBytes = (bytes) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));

    return Math.round((bytes / Math.pow(k, i)) * 100) / 100 + ' ' + sizes[i];
  };

  const copyToClipboard = (text) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        alert('Copied to clipboard!');
      })
      .catch((err) => {
        console.error('Failed to copy:', err);
      });
  };

  const downloadResponse = () => {
    const dataStr = JSON.stringify(response.data, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `response-${Date.now()}.json`;
    link.click();
    URL.revokeObjectURL(url);
  };

  const highlightSearchTerm = (text) => {
    if (!searchTerm) return text;
    const regex = new RegExp(`(${searchTerm})`, 'gi');

    return text.replace(regex, '<mark>$1</mark>');
  };

  const formatResponseData = () => {
    if (response.error) {
      return response.message;
    }

    if (typeof response.data === 'object') {
      return JSON.stringify(response.data, null, 2);
    }

    return response.data;
  };

  return (
    <div className="response-panel">
      <div className="response-header">
        <div className="response-status">
          <span className={`status-badge ${getStatusClass(response.status)}`}>
            {response.error ? '❌ Error' : `${response.status} ${response.statusText}`}
          </span>
          <span className="response-time">⚡ {response.time}ms</span>
          {response.size && <span className="response-size">📦 {formatBytes(response.size)}</span>}
        </div>
        <div className="response-actions">
          <button
            className="action-btn"
            title="Copy response"
            onClick={() => copyToClipboard(formatResponseData())}
          >
            📋 Copy
          </button>
          {!response.error && typeof response.data === 'object' && (
            <button className="action-btn" title="Download response" onClick={downloadResponse}>
              💾 Download
            </button>
          )}
        </div>
      </div>

      {!response.error && (
        <div className="response-tabs">
          <button
            className={`tab-btn ${activeTab === 'body' ? 'active' : ''}`}
            onClick={() => setActiveTab('body')}
          >
            Body
          </button>
          <button
            className={`tab-btn ${activeTab === 'headers' ? 'active' : ''}`}
            onClick={() => setActiveTab('headers')}
          >
            Headers
          </button>
        </div>
      )}

      <div className="response-content">
        {response.error ? (
          <div className="error-display">
            <div className="error-icon">⚠️</div>
            <h3>Request Failed</h3>
            <p className="error-message">{response.message}</p>
            <div className="error-tips">
              <h4>Common issues:</h4>
              <ul>
                <li>Check if the URL is correct</li>
                <li>Verify network connection</li>
                <li>Check CORS settings for cross-origin requests</li>
                <li>Ensure the API endpoint is accessible</li>
              </ul>
            </div>
          </div>
        ) : (
          <>
            {activeTab === 'body' && (
              <div className="response-body">
                <div className="search-bar">
                  <input
                    className="search-input"
                    placeholder="🔍 Search in response..."
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </div>
                <pre className="response-data">
                  <code
                    dangerouslySetInnerHTML={{ __html: highlightSearchTerm(formatResponseData()) }}
                  />
                </pre>
              </div>
            )}

            {activeTab === 'headers' && (
              <div className="response-headers">
                <table className="headers-table">
                  <thead>
                    <tr>
                      <th>Header</th>
                      <th>Value</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Object.entries(response.headers || {}).map(([key, value]) => (
                      <tr key={key}>
                        <td className="header-key">{key}</td>
                        <td className="header-value">{value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default ResponsePanel;
