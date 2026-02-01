import PlayHeader from 'common/playlists/PlayHeader';
import { useState, useEffect } from 'react';
import RequestPanel from './components/RequestPanel';
import ResponsePanel from './components/ResponsePanel';
import HistoryPanel from './components/HistoryPanel';
import './styles.css';

function ApiRequestBuilder(props) {
  const [method, setMethod] = useState('GET');
  const [url, setUrl] = useState('https://jsonplaceholder.typicode.com/posts/1');
  const [headers, setHeaders] = useState([
    { key: 'Content-Type', value: 'application/json', enabled: true }
  ]);
  const [body, setBody] = useState('');
  const [response, setResponse] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [history, setHistory] = useState([]);
  const [activeTab, setActiveTab] = useState('body');
  const [bodyType, setBodyType] = useState('json');
  const [showHistory, setShowHistory] = useState(false);

  // Load history from localStorage on mount
  useEffect(() => {
    const savedHistory = localStorage.getItem('api-request-history');
    if (savedHistory) {
      try {
        setHistory(JSON.parse(savedHistory));
      } catch (error) {
        console.error('Failed to load history:', error);
      }
    }
  }, []);

  // Save history to localStorage
  const saveToHistory = (request, response) => {
    const historyItem = {
      id: Date.now(),
      timestamp: new Date().toISOString(),
      method: request.method,
      url: request.url,
      headers: request.headers,
      body: request.body,
      response: {
        status: response.status,
        statusText: response.statusText,
        data: response.data,
        time: response.time,
        size: response.size
      }
    };

    const updatedHistory = [historyItem, ...history].slice(0, 50); // Keep last 50 requests
    setHistory(updatedHistory);
    localStorage.setItem('api-request-history', JSON.stringify(updatedHistory));
  };

  const handleSendRequest = async () => {
    if (!url.trim()) {
      setResponse({
        error: true,
        message: 'Please enter a valid URL',
        status: 0
      });

      return;
    }

    setIsLoading(true);
    const startTime = Date.now();

    try {
      // Prepare headers
      const requestHeaders = {};
      headers.forEach((header) => {
        if (header.enabled && header.key.trim()) {
          requestHeaders[header.key] = header.value;
        }
      });

      // Prepare request options
      const options = {
        method: method,
        headers: requestHeaders
      };

      // Add body for methods that support it
      if (['POST', 'PUT', 'PATCH'].includes(method) && body.trim()) {
        if (bodyType === 'json') {
          try {
            JSON.parse(body); // Validate JSON
            options.body = body;
          } catch (e) {
            throw new Error('Invalid JSON in request body');
          }
        } else {
          options.body = body;
        }
      }

      const response = await fetch(url, options);
      const endTime = Date.now();
      const responseTime = endTime - startTime;

      let responseData;
      const contentType = response.headers.get('content-type');
      
      if (contentType && contentType.includes('application/json')) {
        responseData = await response.json();
      } else {
        responseData = await response.text();
      }

      const responseSize = new Blob([JSON.stringify(responseData)]).size;

      const responseObj = {
        status: response.status,
        statusText: response.statusText,
        data: responseData,
        headers: Object.fromEntries(response.headers.entries()),
        time: responseTime,
        size: responseSize,
        error: false
      };

      setResponse(responseObj);

      // Save to history
      saveToHistory({ method, url, headers, body }, responseObj);
    } catch (error) {
      setResponse({
        error: true,
        message: error.message,
        status: 0,
        time: Date.now() - startTime
      });
    } finally {
      setIsLoading(false);
    }
  };

  const loadFromHistory = (item) => {
    setMethod(item.method);
    setUrl(item.url);
    setHeaders(item.headers);
    setBody(item.body || '');
    setResponse(item.response);
    setShowHistory(false);
  };

  const clearHistory = () => {
    setHistory([]);
    localStorage.removeItem('api-request-history');
  };

  const formatJSON = () => {
    try {
      const parsed = JSON.parse(body);
      setBody(JSON.stringify(parsed, null, 2));
    } catch (error) {
      alert('Invalid JSON format');
    }
  };

  return (
    <div className="play-details">
      <PlayHeader play={props} />
      <div className="play-details-body">
        <div className="api-builder-container">
          <div className="api-builder-header">
            <h2 className="api-builder-title">🚀 API Request Builder & Tester</h2>
            <button
              className="history-toggle-btn"
              title="View Request History"
              onClick={() => setShowHistory(!showHistory)}
            >
              📋 History ({history.length})
            </button>
          </div>

          <div className={`api-builder-layout ${showHistory ? 'show-history' : ''}`}>
            <div className="api-builder-main">
              <RequestPanel
                activeTab={activeTab}
                body={body}
                bodyType={bodyType}
                formatJSON={formatJSON}
                headers={headers}
                isLoading={isLoading}
                method={method}
                setActiveTab={setActiveTab}
                setBody={setBody}
                setBodyType={setBodyType}
                setHeaders={setHeaders}
                setMethod={setMethod}
                setUrl={setUrl}
                url={url}
                onSend={handleSendRequest}
              />

              <ResponsePanel isLoading={isLoading} response={response} />
            </div>

            {showHistory && (
              <HistoryPanel
                history={history}
                onClearHistory={clearHistory}
                onClose={() => setShowHistory(false)}
                onLoadRequest={loadFromHistory}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ApiRequestBuilder;
