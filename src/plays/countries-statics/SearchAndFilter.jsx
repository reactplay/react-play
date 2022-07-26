import React from "react";
import { BsSearch } from "react-icons/bs";

export default function SearchAndFilter() {
  return (
    <div className=" max-w-4xl  mt-2 mx-auto flex flex-col md:flex-row justify-between">
      <div className="relative w-full max-w-xl">
        <input
          type="text"
          placeholder="Search...."
          className="w-full rounded-md border-0 outline-0"
          disabled
        />
        <button className="absolute top-1 right-1 bg-stone-300 w-10 h-8">
          <BsSearch className="text-xl mx-auto" />
        </button>
      </div>
      <div className="text-center ">search and dropdown coming soon..</div>
    </div>
  );
}
