import anime from 'animejs/lib/anime.es.js';
import PlayHeader from 'common/playlists/PlayHeader';
import html2canvas from 'html2canvas';
import { useEffect, useState } from 'react';
import { Block } from './components/Block';
import { Controler } from './components/Controler';
import './styles.css';



// WARNING: Do not change the entry componenet name
function Randombackgroundgenerator(props) {
  // Shabbir's Code Start below.
  const [amount, setAmount] = useState(150);
  const [circle, setCircle] = useState(true);
  const [content, setContent] = useState(' ');
  const blocks = [...Array(amount + 1).keys()].slice(1);

  const animate = () => {
    anime({
      targets: '.block',
      translateX: () => anime.random(-100, 1800),
      translateY: () => anime.random(-100, 800),
      scale: () => anime.random(1, 2)
    });
  };

  const shapeChange = () => {
    setCircle(!circle);
    console.log("clicked", circle)
  };

  const downloadBg = ()=>{
      const bgElement = document.querySelector('.background');
      html2canvas(bgElement).then(function (canvas) {
      const dataURL = canvas.toDataURL('image/png');
      const link = document.createElement('a');
      link.href = dataURL;
      link.download = `random_blocks_bg${new Date().getTime()}.PNG`;
      link.click();
    });
  };

  useEffect(() => {
    animate();
  });
  // Shabbir's code end here

  return (
    <>
      <div className="play-details">
        <PlayHeader play={props} />
        <div className="play-details-body">
          {/* Shabbir's Code Starts Here */}
            <div className={`bgContainer ${circle ? "circle" : ""}`}>
              <Controler 
                animate={animate} 
                shapeChange={shapeChange}
                downloadBg={downloadBg}
                setContent={setContent}
              />
              <div className="background" >
                  {blocks?.map((id) => (
                    <Block key={id} content={content} />
                  ))}
              </div>
            </div>
          {/* Shabbir's Code Ends Here */}
        </div>
      </div>
    </>
  );
}

export default Randombackgroundgenerator;
