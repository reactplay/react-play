import PlayHeader from 'common/playlists/PlayHeader';
import GradientComponent from './GradientComponent';
import gradients from './gradients.json';
import { IoColorPaletteSharp, IoAddSharp } from 'react-icons/io5';
import { Toaster } from 'react-hot-toast';

// WARNING: Do not change the entry componenet name
function ReactGradients(props) {
  // Your Code Start below.

  return (
    <>
      <div className="play-details">
        <PlayHeader play={props} />
        <div className="play-details-body">
          {/* Header/Intro of play */}
          <div className="w-full h-fit py-11 px-7 text-center">
            <span className="font-bold md:text-4xl text-3xl w-full text-black inline-flex justify-center items-center">
              React
              <IoColorPaletteSharp className="text-[#00f2fe] mt-auto mb-auto" size={50} />
              Gradients
            </span>
            <p className="mt-2 font-semibold md:text-xl text-lg w-full text-gray-700">
              A collection of beautiful gradients that you can copy to easily use in your
              application.
            </p>
          </div>

          {/* Grid layout of all gradients */}
          <div className="grid py-2 md:px-6 px-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 place-items-center">
            {gradients.map((gradient, index) => (
              <GradientComponent
                colors={gradient.colors}
                css={gradient.css}
                index={index}
                name={gradient.name}
                tailwind={gradient.tailwind}
              />
            ))}
          </div>

          {/* Button to add new gradient, Note:- Currently it is an <a> tag that redirects to README.md of the play. 
          Hoping to convert it to a <button> element that opens up a modal containing a form to easily add a gradient. */}
          <a
            className="fixed bottom-16 md:right-9 right-7 w-fit p-4 text-white bg-[#00f2fe] rounded-full font-semibold text-xl inline-flex justify-center items-center border-2 border-[#00f2fe] hover:bg-white hover:text-[#00f2fe] transition-all duration-200"
            href="https://github.com/reactplay/react-play/tree/main/src/plays/react-gradients#contributing"
            rel="noreferrer"
            target="_blank"
          >
            <IoAddSharp size={32} /> <span className="md:flex hidden ml-2">Add a Gradient</span>
          </a>
          {/* react-hot-toast component to display a message when code/color is copied */}
          <Toaster position="bottom-left" reverseOrder={false} />
        </div>
      </div>
    </>
  );
}

export default ReactGradients;
