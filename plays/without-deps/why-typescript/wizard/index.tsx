import * as React from 'react';
import Page from './page';
import { WizardData } from './contract';
import './index.css';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const Wizard = (props: any) => {
  const title: string = props.title;
  const data: Array<object> = props.data;
  const wizData = new WizardData(title, data);
  const [index, setIndex] = React.useState(0);

  const nextPage = () => {
    setIndex(index + 1);
  };

  const prevPage = () => {
    setIndex(index - 1);
  };

  return (
    <>
      <div className="wizard-container">
        <div className="wizard-container--core">
          {wizData && wizData.pages.length > 0 ? <Page pagedata={wizData.pages[index]} /> : null}
        </div>
        <div className="wizard-container--buttons ">
          <div>
            <button className="s-button" disabled={index === 0} onClick={() => prevPage()}>
              <span className="btn-label">&lt; Previous</span>
            </button>
            <button
              className="s-button"
              disabled={index === wizData.pages.length - 1}
              onClick={() => nextPage()}
            >
              <span className="btn-label">Next &gt;</span>
            </button>
          </div>
        </div>
        <div className="wizard-container--note">
          This play has been created using TypeScript. It aims to give a pointer to typescript, not
          to elaborate the usage.
        </div>
      </div>
    </>
  );
};

export default Wizard;
