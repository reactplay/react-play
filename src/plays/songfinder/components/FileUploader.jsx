/* eslint-disable react/prop-types */
import axios from 'axios';
const FileUploader = ({ setStatus, setSong, setError, setRecording }) => {
  const handleFileChange = (event) => {
    setRecording(true);
    const file = event.target.files[0];
    setStatus('file selected');
    if (file) {
      const data = new FormData();
      data.append('file', file);
      setStatus('Finding song');
      axios
        .post('https://honestbeneficialbackend.shashippk.repl.co/findSong', data)
        .then((response) => {
          setStatus('');
          setRecording(false);
          setSong(response.data);
        })
        .catch((error) => {
          setError(error);
        });
    } else {
      setRecording(false);
      setError('No file selected');
    }
  };

  return (
    <div
      style={{
        paddingTop: '1rem',
        paddingBottom: '1rem',
        paddingLeft: '2rem',
        paddingRight: '2rem',
        fontWeight: '600'
      }}
    >
      <input
        accept="audio/*"
        id="upload"
        style={{ display: 'none' }}
        type="file"
        onChange={handleFileChange}
      />
      <label
        htmlFor="upload"
        style={{
          cursor: 'pointer'
        }}
        onClick={() => {
          setSong('');
        }}
      >
        Upload
      </label>
    </div>
  );
};

export default FileUploader;
