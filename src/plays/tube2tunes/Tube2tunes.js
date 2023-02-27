import PlayHeader from 'common/playlists/PlayHeader';
import './styles.css';
import axios from 'axios';
import { useRef, useState } from 'react';
import { youtube_parser } from './components/utils';
import Loader from './components/Loader';
import TubeTunesLogo from './components/tubeTuneLogo.svg';

// WARNING: Do not change the entry componenet name
function Tube2tunes(props) {
  // Your Code Start below.

  const inputUrlRef = useRef();
  const [urlResult, setUrlResult] = useState(null);
  const [title, setTitle] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [processingMsg, setProcessingMsg] = useState(false);
  const [failedMsg, setFailedMsg] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    setProcessingMsg(false);
    setFailedMsg(false);

    const youtubeID = youtube_parser(inputUrlRef.current.value);
    if (!youtubeID) {
      setError(true);
      setLoading(false);

      return;
    }

    const options = {
      method: 'get',
      url: 'https://youtube-mp36.p.rapidapi.com/dl',
      headers: {
        'X-RapidAPI-Key': process.env.REACT_APP_TUBETUNES_APIKEY,
        'X-RapidAPI-Host': 'youtube-mp36.p.rapidapi.com'
      },
      params: {
        id: youtubeID
      }
    };

    axios(options)
      .then((res) => {
        if (res.data.status === 'processing') {
          setProcessingMsg(true);
        } else if (res.data.status === 'fail') {
          setFailedMsg(true);
        } else {
          setUrlResult(res.data.link);
          setTitle(res.data.title);
          setLoading(false);
        }
      })
      .catch((err) => {
        // console.log('Error: ', err);
      });

    inputUrlRef.current.value = '';
  };

  return (
    <>
      <div className="play-details">
        <PlayHeader play={props} />
        <div className="play-details-body">
          {/* Your Code Starts Here */}
          <div className="tube-tunes-container">
            <div className="tube-tunes-app">
              <span className="tube-tunes-logo">
                <img className="tube-tunes-logoImg" src={TubeTunesLogo} />
                {/* Tube 2 Tunes */}
              </span>
              <section className="tube-tunes-content">
                <h1 className="tube-tunes-content_title">
                  <a
                    className="tube-tunes-tooltip"
                    href="https://www.youtube.com/channel/UC-9-kyTW8ZkZNDHQJ6FgpwQ"
                    target="_blank"
                    title="Take me to YouTube for video searching 🔍"
                  >
                    Tube
                  </a>
                  {/* Tube */}
                  <span style={{ color: '#fff513' }}> 2 </span>Tunes
                </h1>
                <p className="tube-tunes-content_description">
                  Convert YouTube Music Videos to MP3 with Ease
                </p>
                <form className="tube-tunes-form" onSubmit={handleSubmit}>
                  <input
                    required
                    className="tube-tunes-form_input"
                    placeholder="Paste a Youtube video URL link..."
                    ref={inputUrlRef}
                    type="text"
                  />
                  <button className="tube-tunes-form_button" type="submit">
                    Search
                  </button>
                </form>
                {loading ? (
                  ''
                ) : (
                  <>
                    {urlResult ? (
                      <a
                        className="tube-tunes-download_btn"
                        href={urlResult}
                        rel="noreferrer"
                        target="_blank"
                      >
                        Download MP3
                      </a>
                    ) : (
                      ''
                    )}
                    {urlResult ? (
                      <b className="mt-2 text-center px-11 tube-tunes-result">{title}</b>
                    ) : (
                      ''
                    )}
                  </>
                )}
                {loading ? <Loader /> : ''}
                {error ? <p className="tube-tunes-invalidLink">Invalid Link</p> : ''}
                {processingMsg ? (
                  <p className="tube-tunes-invalidLink">
                    Video is taking time to processed, please choose smaller length songs or try
                    again later with the same one...
                  </p>
                ) : (
                  ''
                )}
                {failedMsg ? (
                  <p className="tube-tunes-taking-time">
                    Long Video of more than 2 hour is not allowed
                  </p>
                ) : (
                  ''
                )}
              </section>
            </div>
          </div>
          {/* Your Code Ends Here */}
        </div>
      </div>
    </>
  );
}

export default Tube2tunes;
