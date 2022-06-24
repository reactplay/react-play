import { GitBtn } from "../../components";
import React from "react";


const Header = () => {
  return (
    <header className="w-full bg-slate-200 pt-16 py-4">
      <div className="container mx-auto text-center">
        <h1 className="text-lg md:text-xl lg:text-3xl font-bold uppercase">Lorem Ipsum Generator</h1>
        <p>Generate lorem faster than you think you can</p>
      </div>
      <GitBtn sm={true} />
    </header>
  );
};

export default Header;