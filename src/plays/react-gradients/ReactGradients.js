import PlayHeader from "common/playlists/PlayHeader";
import GradientComponent from "./GradientComponent";
import "./styles.css";
import gradients from "./gradients.json";

// WARNING: Do not change the entry componenet name
function ReactGradients(props) {
  // Your Code Start below.

  return (
    <>
      <div className="play-details">
        <PlayHeader play={props} />
        <div className="play-details-body">
          {/* Your Code Starts Here */}
          <div className="w-full h-fit py-6 px-7 flex">
            <span>React Gradients</span>
          </div>
          <div className="grid py-2 px-6 grid-cols-3 gap-8 place-items-center">
            {gradients.map((gradient, index) => (
              <GradientComponent
                index={index}
                name={gradient.name}
                css={gradient.css}
                tailwind={gradient.tailwind}
              />
            ))}
          </div>
          <div className="w-full h-fit py-4 px-6 flex justify-center items-center">
            <span>
              Built with 💙 by{" "}
              <a
                href="https://twitter.com/itsammaar_7"
                target="_blank"
                rel="noreferrer"
              >
                Ammaar Aslam
              </a>{" "}
              for{" "}
              <a href="/" target="_blank" rel="noreferrer">
                ReactPlay.io
              </a>
            </span>
          </div>
          {/* Your Code Ends Here */}
        </div>
      </div>
    </>
  );
}

export default ReactGradients;
