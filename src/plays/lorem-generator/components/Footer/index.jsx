import React from "react";
import { GitBtn } from "../../components";

const Footer = () => {
  return (
    <footer className="bg-slate-200 shadow-md fixed bottom-0 w-full">
      <div className="container flex flex-col gap-2 items-center justify-center py-4 mx-auto">
        <p className="text-md text-slate-900">
          Made by{" "}
          <span className="font-bold">
            {" "}
            <a href="https://madflows.dev" target={"_blank"} rel="noreferrer">
              Folarin Lawal
            </a>{" "}
          </span>{" "}
          for{" "}
          <span className="underline decoration-wavy font-semibold decoration-indigo-700">
            <a
              href="https://www.100daysofcode.com/"
              target={"_blank"}
              rel="noreferrer"
            >
              #100DaysOfCode
            </a>
          </span>
        </p>

        <GitBtn/>
      </div>
    </footer>
  );
};

export default Footer;