import { guides } from '../constant/guide';
import { useStep } from '../hooks/useStep';
import close from '../assets/close.png';
import help from '../assets/help.png';

const Guide = ({ isGuideShow, setIsGuideShow }) => {
  // Guides
  const { step, prev, next, isFirstStep, isLastStep, resetStep } = useStep(guides);

  if (!isGuideShow) {
    return (
      <div className="rtd__docs">
        <p>Docs</p>
        <button
          className="rtd__btn rtd__btn-help"
          title="Need Help"
          onClick={() => {
            setIsGuideShow(true);
            resetStep();
          }}
        >
          <img alt="Help" src={help} />
        </button>
      </div>
    );
  }

  return (
    <div className="rtd__guide">
      <button
        className="rtd__btn rtd__btn-close"
        onClick={() => {
          setIsGuideShow(false);
          resetStep();
        }}
      >
        <img alt="close" src={close} />
      </button>
      <img alt="guide" src={step} />

      <div className="rtd__guide-btns">
        <button className="rtd__btn" disabled={isFirstStep ? true : false} onClick={prev}>
          Prev
        </button>

        <button
          className="rtd__btn"
          onClick={
            !isLastStep
              ? next
              : () => {
                  setIsGuideShow(false);
                }
          }
        >
          {!isLastStep ? 'Next' : 'Done'}
        </button>
      </div>
    </div>
  );
};

export default Guide;
