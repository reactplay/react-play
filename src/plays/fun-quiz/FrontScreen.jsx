import { useState } from "react";

// css
import "./FrontScreen.scss";

const options = [
  {
    name: "All",
    id: "all",
  },
  {
    name: "Books",
    id: 10,
  },
  {
    name: "General Knwoledge",
    id: 9,
  },
  {
    name: "Film",
    id: 11,
  },
  {
    name: "Music",
    id: 12,
  },
  {
    name: "Television",
    id: 14,
  },
  {
    name: "Video Games",
    id: 15,
  },
  {
    name: "Computers",
    id: 18,
  },
  {
    name: "Mathematics",
    id: 19,
  },
  {
    name: "Sports",
    id: 21,
  },
  {
    name: "Geography",
    id: 22,
  },
  {
    name: "History",
    id: 23,
  },
  {
    name: "Politics",
    id: 24,
  },
  {
    name: "Celebrities",
    id: 26,
  },
  {
    name: "Science & Nature",
    id: 17,
  },
];

const CATEGORY_SELECTION = "CATEGORY_SELECTION";
const RULES_DISPLAY = "RULES_DISPLAY";

const QuizSelectionScreen = ({ getSelectedCategory }) => {
  const [selectedOption, setSelectedOption] = useState("");
  const [view, setView] = useState(CATEGORY_SELECTION);

  const letMeInHandler = () => {
    if (!selectedOption) return;
    setView(RULES_DISPLAY);
  };

  const RulesComponent = () => {
    return (
      <>
        <p>1. There will be 20 Unique Questions.</p>
        <p>2. Every Question will have 4 multiple choices to chooose.</p>
        <p>
          3. Among 4 options only one option will be correct answer of the
          Question.
        </p>
        <p>
          4. Answer selection isn't mandatory. You can skip choosing any answer
          and it will be counted as incorrect answer.
        </p>
        <p>
          5. After answer confirmation you cannot go back to previous question
          or donot refresh the page otherwise you will lose you progress.
        </p>
        <p>
          6. You will be given 30 seconds to answer each question and timeup is
          considered as an incorrect answer and next question will be displayed.
        </p>
        <p>7. You can use cheats to cheat the answer.</p>
        <div className='front-footer'>
          <button onClick={() => getSelectedCategory(selectedOption)}>
            Yes, Lets Start!
          </button>
        </div>
        <div>
          <button className='back' onClick={(e) => setView(CATEGORY_SELECTION)}>
            &#171; Back
          </button>
        </div>
      </>
    );
  };

  const CategorySelector = () => {
    return (
      <>
        <p>
          The Quiz app reqires to have a specefic category in order to start
          with. Select one of the below options in which you have expertise in.
        </p>
        <div className='selectable-options'>
          {options.map((option) => {
            return (
              <div
                key={option.id}
                onClick={(e) => setSelectedOption(option.id)}
                className={`single-selection ${
                  selectedOption === option.id && "active-selected"
                }`}
              >
                {option.name}
              </div>
            );
          })}
        </div>
        <div className='front-footer'>
          <button onClick={letMeInHandler}>Let me in</button>
        </div>
      </>
    );
  };

  const renderView = view === CATEGORY_SELECTION;

  return (
    <div className='fun-quiz-main'>
      <div className='main-child'>
        <h1>{!renderView ? "Quiz Rules" : "Quiz App"}</h1>
        {renderView && <CategorySelector />}
        {!renderView && <RulesComponent />}
      </div>
    </div>
  );
};

export default QuizSelectionScreen;
