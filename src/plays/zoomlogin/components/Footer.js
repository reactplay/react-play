function Footer() {
  return (
    <div className="flex-col bg-grey h-[140px] p-10">
      <div className="flex gap-1 justify-center">
        <a
          href="https://www.linkedin.com/in/dev-dayeonlee/"
          rel="noopener noreferrer"
          target="_blank"
        >
          <img alt="LinkedIn Logo" src="https://cdn.simpleicons.org/linkedin" width="30" />
        </a>
        <a href="https://github.com/day-lee/" rel="noopener noreferrer" target="_blank">
          <img alt="GitHub Logo" src="https://cdn.simpleicons.org/github" width="30" />
        </a>
      </div>
      <div className="flex items-center justify-center gap-1 p-2 text-sm sm:text-base">
        <span> &copy; 2024 all rights reserved | day-lee</span>
      </div>
    </div>
  );
}

export default Footer;
