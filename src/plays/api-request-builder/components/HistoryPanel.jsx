function HistoryPanel({ history, onLoadRequest, onClearHistory, onClose }) {
  const formatDate = (isoString) => {
    const date = new Date(isoString);
    const now = new Date();
    const diffMs = now - date;
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMs / 3600000);
    const diffDays = Math.floor(diffMs / 86400000);

    if (diffMins < 1) return 'Just now';
    if (diffMins < 60) return `${diffMins}m ago`;
    if (diffHours < 24) return `${diffHours}h ago`;
    if (diffDays < 7) return `${diffDays}d ago`;

    return date.toLocaleDateString();
  };

  const getStatusEmoji = (status) => {
    if (status >= 200 && status < 300) return '✅';
    if (status >= 300 && status < 400) return '↩️';
    if (status >= 400 && status < 500) return '⚠️';

    return '❌';
  };

  const getMethodColor = (method) => {
    const colors = {
      GET: '#28a745',
      POST: '#ffc107',
      PUT: '#17a2b8',
      PATCH: '#6f42c1',
      DELETE: '#dc3545',
      HEAD: '#6c757d',
      OPTIONS: '#343a40'
    };

    return colors[method] || '#6c757d';
  };

  return (
    <div className="history-panel">
      <div className="history-header">
        <h3>📋 Request History</h3>
        <div className="history-actions">
          {history.length > 0 && (
            <button
              className="clear-history-btn"
              title="Clear all history"
              onClick={onClearHistory}
            >
              🗑️ Clear
            </button>
          )}
          <button className="close-history-btn" title="Close history" onClick={onClose}>
            ✕
          </button>
        </div>
      </div>

      <div className="history-content">
        {history.length === 0 ? (
          <div className="history-empty">
            <div className="empty-icon">📭</div>
            <p>No requests yet</p>
            <small>Your request history will appear here</small>
          </div>
        ) : (
          <div className="history-list">
            {history.map((item) => (
              <div
                className="history-item"
                key={item.id}
                role="button"
                tabIndex={0}
                onClick={() => onLoadRequest(item)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    onLoadRequest(item);
                  }
                }}
              >
                <div className="history-item-header">
                  <span
                    className="history-method"
                    style={{ backgroundColor: getMethodColor(item.method) }}
                  >
                    {item.method}
                  </span>
                  <span className="history-status">
                    {getStatusEmoji(item.response.status)} {item.response.status}
                  </span>
                  <span className="history-time">{formatDate(item.timestamp)}</span>
                </div>
                <div className="history-item-url" title={item.url}>
                  {item.url}
                </div>
                <div className="history-item-footer">
                  <span>⚡ {item.response.time}ms</span>
                  {item.response.size && <span>📦 {Math.round(item.response.size / 1024)}KB</span>}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="history-footer">
        <small>💡 Click on any request to load it</small>
      </div>
    </div>
  );
}

export default HistoryPanel;
