import PlayHeader from 'common/playlists/PlayHeader';
import SideBarDesign from './Components/SideBarDesign';
import CardContainer from './Components/CardContainer';
import { useEffect, useState } from 'react';
import SideBarOperation from './Components/SideBarOperation';
import { gradients } from './data';

function RandomQuoteCardGenerator(props) {
  const initialQuoteData = [
    {
      quote: " The bad news is time flies. The good news is you're the pilot",
      author: 'Michael Altshuler'
    }
  ];

  const [gradientColor, setGradientColor] = useState([gradients[0]]);
  const [quote, setQuote] = useState({});
  const [regenerate, setRegenerate] = useState(false);
  const [AspectRatio, setAspectRatio] = useState('Square');
  const [cardColor, setCardColor] = useState('Light');
  const [domImg, setDomImg] = useState({});
  const [backupData, setBackupData] = useState(initialQuoteData);
  const [apiStatus, setApiStatus] = useState(true);

  const apiUrl = 'https://api.quotable.io/random';

  useEffect(() => {
    const load = async () => {
      try {
        const response = await fetch(apiUrl);
        if (response.ok) {
          setApiStatus(true);
          const json = await response.json();
          setQuote(json);
        } else {
          setApiStatus(false);
        }
      } catch (error) {
        console.error(error);
      }
    };

    load();
  }, [regenerate]);

  return (
    <>
      <div className="play-details">
        <PlayHeader play={props} />
        <div className="play-details-body">
          <main className="flex flex-col sm:flex-row  ">
            <SideBarDesign
              cardColor={cardColor}
              gradientColor={gradientColor}
              gradients={gradients}
              setCardColor={setCardColor}
              setGradientColor={setGradientColor}
            />
            <CardContainer
              AspectRatio={AspectRatio}
              apiStatus={apiStatus}
              backupData={backupData}
              cardColor={cardColor}
              domImg={domImg}
              gradientColor={gradientColor}
              gradients={gradients}
              quote={quote}
              setDomImg={setDomImg}
              setGradientColor={setGradientColor}
            />
            <SideBarOperation
              AspectRatio={AspectRatio}
              apiStatus={apiStatus}
              cardColor={cardColor}
              domImg={domImg}
              gradientColor={gradientColor}
              gradients={gradients}
              regenerate={regenerate}
              setAspectRatio={setAspectRatio}
              setBackupData={setBackupData}
              setCardColor={setCardColor}
              setGradientColor={setGradientColor}
              setRegenerate={setRegenerate}
            />
          </main>
        </div>
      </div>
    </>
  );
}

export default RandomQuoteCardGenerator;
