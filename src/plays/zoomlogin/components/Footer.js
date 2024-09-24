import copyright from '../assets/copyright.svg';
import linkedin from '../assets/linkedin.svg';
import github from '../assets/github.svg';

function Footer() {
  return (
    <div className="flex-col bg-grey h-[140px] p-10">
      <div className="flex gap-1 justify-center">
        <a
          href="https://www.linkedin.com/in/dev-dayeonlee/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img alt="linkedin" className="w-10" src={linkedin} />
        </a>
        <a href="https://github.com/day-lee/" rel="noopener noreferrer" target="_blank">
          <img alt="github" className="w-10" src={github} />
        </a>
      </div>
      <div className="flex items-center justify-center gap-1 p-2">
        <img alt="Copyright" className="w-4 h-4" src={copyright} />
        <span>2024 all rights reserved | day-lee</span>
      </div>
    </div>
  );
}

export default Footer;
