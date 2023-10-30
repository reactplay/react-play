import React from 'react';
import { MutableRefObject, useEffect, useRef } from 'react';
import html2canvas from 'html2canvas';
import { seconds } from '../utils';

export default function ClipboardModal(props: {
  wordleCopy: Node | null;
  removeCopy: () => void;
  pushNotif: (s: string) => void;
}) {
  const { wordleCopy, removeCopy, pushNotif } = props;
  const copyableRef = useRef() as MutableRefObject<HTMLDivElement>;
  const selfRef = useRef() as MutableRefObject<HTMLDivElement>;

  async function copyTilesToClipboard() {
    // Render the elements into a canvas
    const canvas = await html2canvas(copyableRef.current);

    // Convert to a blob type then append to Clipboard
    canvas.toBlob((blob) => {
      if (!blob) return;
      const clipboardItem = new ClipboardItem({ 'image/png': blob });
      navigator.clipboard.write([clipboardItem]);
    });
    // Send notification
    pushNotif('Copied to clipboard!');

    // Clean up
    disappear();
  }

  function disappear() {
    selfRef.current.classList.remove('appear');
    setTimeout(() => removeCopy(), seconds(1));
  }

  useEffect(() => {
    if (wordleCopy) copyableRef.current.appendChild(wordleCopy);

    return;
  }, []);

  return (
    <div
      className="clipboard-modal w-5/6 md:w-2/6 h-[70%] md:h-4/5 bg-default absolute z-10 rounded-lg flex flex-col items-center justify-center space-y-4 opacity-0 translate-y-[-40px] appear"
      ref={selfRef}
    >
      <div
        className="copyable-wordle h-auto flex flex-col items-center justify-evenly bg-default"
        ref={copyableRef}
      >
        <p className="p-2 text-center font-semibold text-slate-100">
          Can you help me solve this Wordle? 🤔
        </p>
      </div>
      <button
        className={
          'reset-button w-32 sm:w-36 h-8 sm:h-10 bg-correct rounded-2xl text-white text-xs sm:text-sm font-medium p-px ' +
          'hover:bg-[#60a25a] transition active:bg-correct mt-4'
        }
        onClick={() => copyTilesToClipboard()}
      >
        Copy to clipboard!
      </button>
      <button
        className="w-6 md:w-10 h-auto absolute top-0 md:top-3 right-1 md:right-3 fill-white hover:fill-slate-200 active:fill-white"
        onClick={() => disappear()}
      >
        <svg
          className="w-full h-auto bg-transparent"
          height="48px"
          viewBox="0 0 1.44 1.44"
          width="48px"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 0H1.44V1.44H0V0z" fill="none" height="24" width="24" x="0" />
          <g>
            <path d="M1.062 0.462l-0.085 -0.085L0.72 0.635 0.462 0.378l-0.085 0.085L0.635 0.72l-0.258 0.258 0.085 0.085L0.72 0.805l0.258 0.258 0.085 -0.085L0.805 0.72l0.258 -0.258z" />
          </g>
        </svg>
      </button>
    </div>
  );
}
