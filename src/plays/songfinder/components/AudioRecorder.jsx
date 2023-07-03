import { useState } from 'react';
import { MediaRecorder } from 'extendable-media-recorder';
import axios from 'axios';
import FileUploader from './FileUploader';
import MusicCard from './MusicCard';

const AudioRecorder = () => {
  const [recording, setRecording] = useState(false);
  const [song, setSong] = useState('');
  const [error, setError] = useState('');
  const [status, setStatus] = useState('');
  const [seconds, setSeconds] = useState(0);
  const startRecording = () => {
    setSong('');
    setStatus('Recording ');
    navigator.mediaDevices
      .getUserMedia({ audio: true })
      .then((stream) => {
        const mediaRecorder = new MediaRecorder(stream);
        const audioChunks = [];

        mediaRecorder.addEventListener('dataavailable', (event) => {
          audioChunks.push(event.data);
        });

        mediaRecorder.addEventListener('stop', () => {
          const blob = new Blob(audioChunks, {
            type: 'audio/mp3'
          });
          const data = new FormData();
          data.append('file', blob);
          setStatus('Finding song');
          axios
            .post('https://honestbeneficialbackend.shashippk.repl.co/findSong', data)
            .then((response) => {
              setStatus('');
              setSong(response.data);
              setRecording(false);
            })
            .catch((error) => {
              setError(error.message);
            });
        });
        setSeconds(10);
        const countdownInterval = setInterval(() => {
          setSeconds((prevSeconds) => prevSeconds - 1);
        }, 1000);

        mediaRecorder.start();
        setRecording(true);
        setTimeout(() => {
          mediaRecorder.stop();
          clearInterval(countdownInterval);
        }, 10000);
      })
      .catch((error) => {
        console.error('Error accessing microphone:', error);
        setError(error);
      });
  };

  return (
    <div style={{ display: 'grid', placeItems: 'center', height: '100vh' }}>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <h1
          style={{
            paddingTop: '0.5rem',
            paddingBottom: '0.5rem',
            fontSize: '8rem',
            lineHeight: '1',
            fontWeight: '600',
            textAlign: 'center'
          }}
        >
          {status ? status : 'Finder'} {status == 'Recording ' && `${seconds}s`}
        </h1>

        {song?.message == 'success' ? (
          <MusicCard song={song} />
        ) : (
          song?.message == 'Song NotFound' && (
            <p
              style={{
                fontSize: '1.125rem',
                lineHeight: '1.75rem',
                fontWeight: '600',
                textAlign: 'center'
              }}
            >
              Song Not Found
            </p>
          )
        )}
        {!recording && (
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <FileUploader
              setError={setError}
              setRecording={setRecording}
              setSong={setSong}
              setStatus={setStatus}
            />
            <button
              style={{
                paddingTop: '1rem',
                paddingBottom: '1rem',
                paddingLeft: '2rem',
                paddingRight: '2rem',
                fontWeight: '600'
              }}
              onClick={startRecording}
            >
              Record
            </button>
          </div>
        )}
        {/* <p className="font-semibold text-center animate-pulse text-green-500">{status} {status == "Recording " && `${seconds}s`}</p> */}
        {error && <p style={{ color: '#EF4444', textAlign: 'center' }}>{error}</p>}
      </div>
    </div>
  );
};

export default AudioRecorder;
