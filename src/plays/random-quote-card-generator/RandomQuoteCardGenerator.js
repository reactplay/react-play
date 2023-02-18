import PlayHeader from 'common/playlists/PlayHeader';
import SideBarDesign from './Components/SideBarDesign';
import CardContainer from './Components/CardContainer';
import { useEffect, useState } from 'react';
import SideBarOperation from './Components/SideBarOperation';


const gradients = [
  { id: '1', gradient_color1: '#FF9966', gradient_color2: '#FF5E62' },
  { id: '2', gradient_color1: '#EC008C', gradient_color2: '#FC6767' },
  { id: '3', gradient_color1: '#4646FB', gradient_color2: '#BE4DFF' },
  { id: '4', gradient_color1: '#2D47A2', gradient_color2: '#00FFFF' },
  { id: '5', gradient_color1: '#870FFF', gradient_color2: '#F89B29' },
  { id: '6', gradient_color1: '#B1FE64', gradient_color2: '#24C75B' },
  { id: '7', gradient_color1: '#BAFFAD', gradient_color2: '#ADCEFF' },
  { id: '8', gradient_color1: '#FFC7CA', gradient_color2: '#E299FF' }
];

function RandomQuoteCardGenerator(props) {

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


  const apiUrl = 'https://api.quotable.io/random';
  useEffect(() => {
    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => setQuote(data))
      .catch((err) => console.error(err));

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
