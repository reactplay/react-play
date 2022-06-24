import React from "react";
import { useState, useEffect } from "react";
import { HiOutlineClipboardList } from "react-icons/hi";
import { BsFillBookmarkCheckFill } from "react-icons/bs"
import axios from "axios";
import { useClipboard } from "use-clipboard-copy";
import { Markup } from "interweave";
import toast from "react-hot-toast";

const Main = () => {
  const [query, setQuery] = useState(1);
  const [lorem, setLorem] = useState("Loading...");
  const [plain, setPlain] = useState("Loading...");
  const clipboard = useClipboard({ copiedTimeout: 4750 });
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .get(
        `https://baconipsum.com/api/?type=all-meat&paras=${query}&start-with-lorem=1&format=html`
      )
      .then((res) => setLorem(res.data))
      .catch((err) => console.log(err));

    axios
      .get(
        `https://baconipsum.com/api/?type=all-meat&paras=${query}&start-with-lorem=1&format=text`
      )
      .then((res) => setPlain(res.data))
      .catch((err) => console.log(err));
    setQuery("");
  };

  useEffect(() => {
    axios
      .get(
        `https://baconipsum.com/api/?type=all-meat&paras=${query}&start-with-lorem=1&format=text`
      )
      .then((res) => setLorem(res.data))
      .catch((err) => console.log(err));

    axios
      .get(
        `https://baconipsum.com/api/?type=all-meat&paras=${query}&start-with-lorem=1&format=text`
      )
      .then((res) => setPlain(res.data))
      .catch((err) => console.log(err));
    setQuery("");
  }, []);

  return (
    <div className="w-screen">
      <div className="container flex flex-col gap-2 my-4 items-center justify-center mx-auto">
        <FormSection
          query={query}
          setQuery={setQuery}
          submitHandler={handleSubmit}
        />
        <OutputSection lorem={lorem}>
          {/* <input type="text" value="copy me " readOnly ref={clipboard.target} /> */}
          <div className="relative flex flex-col">
            <button
              onClick={clipboard.copy}
              className="absolute right-0 -top-14 align-self-right max-w-[7rem] bg-white rounded-t-md py-2 text-xl px-4 flex items-center justify-between z-20 transition"
            >
              {
                clipboard.copied ? (
                  <div className="flex gap-2 items-center justify-center">
                  Copied
                  <BsFillBookmarkCheckFill />
                  </div>
                ) : (
                  <div className="flex gap-2 items-center justify-center">
                    Copy
                    <HiOutlineClipboardList />
                  </div>
                )
              }
            </button>
            <Markup content={lorem} />
          </div>
          <input type="hidden" value={plain} readOnly ref={clipboard.target} />
        </OutputSection>
      </div>
    </div>
  );
};

function FormSection({ query, setQuery, submitHandler }) {
  return (
    <form
      onSubmit={submitHandler}
      className="flex relative flex-col items-center justify-center gap-2"
    >
      <label htmlFor="query" className="gap-2 flex flex-col">
        <p className="text-md text-slate-700">
          Enter the amount of paragraphs needed
        </p>
        <input
          type="number"
          value={query}
          onChange={(e) => setQuery(e.currentTarget.value)}
          className="w-full outline-none border-2 border-slate-600 px-3 rounded-md py-2 appearance-none"
          name="query"
          id="query"
          placeholder="32?"
        />
      </label>
      <input
        type="submit"
        value="Generate"
        className="bg-slate-700 px-4 cursor-pointer text-white py-2 rounded-md transition transition-ease hover:bg-slate-900"
      />
    </form>
  );
}

function OutputSection(props) {
  return (
    <div className="relative bg-white rounded-md py-4 mb-8 px-6 prose prose-slate text-justify text-base mx-auto my-4 mt-8 max-w-[90vw] lg:max-w-[600px] transition shadow-slate-300 shadow-md w-fit">
      {props.children}
    </div>
  );
}

export default Main;