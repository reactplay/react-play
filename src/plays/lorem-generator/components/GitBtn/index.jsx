import React from "react";
import { FaGithub } from "react-icons/fa";


const GitBtn = () => {
  const btnClass = "fixed top-3 right-3 rounded-md overflow-hidden git-btn block"

  return (
    <button className={btnClass}>
      <a
        href="https://github.com/codeforng/lipsum-generator-reactjs"
        target={"_blank"}
        className="bg-slate-900 text-white font-sm px-4 py-2 flex items-center justify-center gap-2"
      >
        <FaGithub />
        Get the Code
      </a>
    </button>
  );
};

export default GitBtn;