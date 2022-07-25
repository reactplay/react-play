import { useState } from 'react';
import PlayHeader from 'common/playlists/PlayHeader';
import './styles.css';
import QRCode from "react-qr-code";
import * as htmlToImage from 'html-to-image';
import download from "downloadjs";
import { MdDonutLarge } from 'react-icons/md'

function QrCodeGenerator(props) {

  // Your Code Start below.
  const [qrCodeValue, setQrCodeValue] = useState('https://reactplay.io')
  const [loading, setLoading] = useState(false)

  function handleChange(e) {
    setQrCodeValue(e.target.value)
  }

  function handleDownload() {
    setLoading(true)
    htmlToImage.toJpeg(document.querySelector("#qrContain"), {
      quality: 1
    }).then((dataUrl) => {
      download(dataUrl, 'qrcode.jpeg')
      setLoading(false)
    }).catch((err) => {
      console.log(err)
      setLoading(false)
    })
  }

  return (
    <>
      <div className="play-details">
        <PlayHeader play={props} />
        <div className="play-details-body">
          {/* Your Code Starts Here */}
          <div className="App">
            <div id="qrContain" style={{ backgroundColor: 'white', width: 'fit-content' }}>
              <QRCode size={256} value={(qrCodeValue === undefined || qrCodeValue === "") ? 'https://reactplay.io' : qrCodeValue} />
            </div>
            <input id="qrValue" type={'text'} placeholder='Type something..' onChange={(e) => handleChange(e)} />
            <button id="download-btn" onClick={handleDownload}>
              Download
              {loading ? <MdDonutLarge /> : ''}
            </button>
          </div>
          {/* Your Code Ends Here */}
        </div>
      </div>
    </>
  );
}

export default QrCodeGenerator;