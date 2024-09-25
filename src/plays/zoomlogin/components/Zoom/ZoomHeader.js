import zoomLogo from '../../assets/zoom-logo.png';
import ZoomLanguageDropdown from './ZoomLanguageDropdown.js';

const signupLink = 'https://zoom.us/signup#/signup';
const supportLink = 'https://support.zoom.com/hc/en';

function ZoomHeader() {
  const linkSignup = () => {
    window.open(signupLink, '_blank', 'noreferrer');
  };

  const linkSupport = () => {
    window.open(supportLink, '_blank', 'noreferrer');
  };

  return (
    <div className="flex justify-between relative bg-white text-[#0956b5] font-semibold text-[14px] border-b-2">
      <div className="ml-10 py-4">
        <img alt="zoomlogo" className="bg-white w-[110px] h-[25px]" src={zoomLogo} />
      </div>
      <div className="flex absolute right-0 pt-4">
        <div className="mr-1 text-black hidden sm:inline-flex font-medium">
          <span>New to Zoom? </span>
        </div>
        <div className=" mr-3 sm:mr-10">
          <button className="lg:hidden hover:underline underline-offset-2" onClick={linkSignup}>
            Sign Up
          </button>
          <button
            className="hidden lg:inline-block hover:underline underline-offset-2"
            onClick={linkSignup}
          >
            Sign Up Free
          </button>
        </div>
        <div className="mr-10 hidden sm:inline-flex">
          <button
            className="hover:text-[#0956b5] hover:underline underline-offset-2"
            onClick={linkSupport}
          >
            Support
          </button>
        </div>
        <div>
          <div className="mr-10">
            <ZoomLanguageDropdown />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ZoomHeader;
