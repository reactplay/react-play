const HTTP_METHODS = ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'HEAD', 'OPTIONS'];

function RequestPanel({
  method,
  setMethod,
  url,
  setUrl,
  headers,
  setHeaders,
  body,
  setBody,
  activeTab,
  setActiveTab,
  bodyType,
  setBodyType,
  onSend,
  isLoading,
  formatJSON
}) {
  const addHeader = () => {
    setHeaders([...headers, { key: '', value: '', enabled: true }]);
  };

  const updateHeader = (index, field, value) => {
    const newHeaders = [...headers];
    newHeaders[index][field] = value;
    setHeaders(newHeaders);
  };

  const removeHeader = (index) => {
    setHeaders(headers.filter((_, i) => i !== index));
  };

  const toggleHeader = (index) => {
    const newHeaders = [...headers];
    newHeaders[index].enabled = !newHeaders[index].enabled;
    setHeaders(newHeaders);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) {
      onSend();
    }
  };

  return (
    <div className="request-panel">
      <div className="request-url-section">
        <select
          className="method-select"
          disabled={isLoading}
          value={method}
          onChange={(e) => setMethod(e.target.value)}
        >
          {HTTP_METHODS.map((m) => (
            <option key={m} value={m}>
              {m}
            </option>
          ))}
        </select>

        <input
          className="url-input"
          disabled={isLoading}
          placeholder="Enter request URL (e.g., https://api.example.com/endpoint)"
          type="text"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
          onKeyDown={handleKeyDown}
        />

        <button
          className={`send-btn ${isLoading ? 'loading' : ''}`}
          disabled={isLoading}
          onClick={onSend}
        >
          {isLoading ? '⏳ Sending...' : '▶️ Send'}
        </button>
      </div>

      <div className="request-tabs">
        <button
          className={`tab-btn ${activeTab === 'headers' ? 'active' : ''}`}
          onClick={() => setActiveTab('headers')}
        >
          Headers ({headers.filter((h) => h.enabled && h.key).length})
        </button>
        <button
          className={`tab-btn ${activeTab === 'body' ? 'active' : ''}`}
          disabled={!['POST', 'PUT', 'PATCH'].includes(method)}
          onClick={() => setActiveTab('body')}
        >
          Body
        </button>
      </div>

      <div className="request-content">
        {activeTab === 'headers' && (
          <div className="headers-section">
            <div className="headers-header">
              <span>Headers</span>
              <button className="add-header-btn" onClick={addHeader}>
                + Add Header
              </button>
            </div>
            <div className="headers-list">
              {headers.map((header, index) => (
                <div className="header-row" key={index}>
                  <input
                    checked={header.enabled}
                    title="Enable/Disable header"
                    type="checkbox"
                    onChange={() => toggleHeader(index)}
                  />
                  <input
                    className="header-key"
                    placeholder="Key"
                    type="text"
                    value={header.key}
                    onChange={(e) => updateHeader(index, 'key', e.target.value)}
                  />
                  <input
                    className="header-value"
                    placeholder="Value"
                    type="text"
                    value={header.value}
                    onChange={(e) => updateHeader(index, 'value', e.target.value)}
                  />
                  <button
                    className="remove-header-btn"
                    title="Remove header"
                    onClick={() => removeHeader(index)}
                  >
                    ✕
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'body' && (
          <div className="body-section">
            <div className="body-header">
              <div className="body-type-selector">
                <label>
                  <input
                    checked={bodyType === 'json'}
                    type="radio"
                    value="json"
                    onChange={(e) => setBodyType(e.target.value)}
                  />
                  JSON
                </label>
                <label>
                  <input
                    checked={bodyType === 'text'}
                    type="radio"
                    value="text"
                    onChange={(e) => setBodyType(e.target.value)}
                  />
                  Text
                </label>
              </div>
              {bodyType === 'json' && (
                <button className="format-btn" onClick={formatJSON}>
                  ✨ Format JSON
                </button>
              )}
            </div>
            <textarea
              className="body-textarea"
              placeholder={bodyType === 'json' ? '{\n  "key": "value"\n}' : 'Enter request body...'}
              spellCheck={false}
              value={body}
              onChange={(e) => setBody(e.target.value)}
            />
            <div className="body-footer">
              <small>💡 Press Ctrl+Enter to send request</small>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default RequestPanel;
