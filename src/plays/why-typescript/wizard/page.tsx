import * as React from "react";
import { AppProps, IPageData } from "./contract";
import "./index.css";

const Page = (props: AppProps) => {
  const data: IPageData = props.pagedata;
  return (
    <>
      <div className="page-container">
        <h1>{data.title}</h1>
        <ol className="ol-cards">
          {data.details.map((d, dk) => (
            <li key={dk}>
              <div className="icon"></div>
              <div className="descr">{d}</div>
            </li>
          ))}
        </ol>
      </div>
    </>
  );
};

export default Page;
