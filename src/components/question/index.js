import React, { useState } from "react";
const Question = ({ question, onNextClicked }) => {
  const [answered, setAnswered] = useState(false);
  const [selectedOption, setSelectedOption] = useState({});

  const onOptionClicked = option => {
    setAnswered(true);
    setSelectedOption(option);
  };

  const isCorrect = option => {
    return option === question.answer;
  };

  const resetQuestion = () => {
    setAnswered(false);
    setSelectedOption({});
    onNextClicked(selectedOption);
  };

  return (
  <div className="question">
    <div className="question-image-holder">
      <img className="question-image" src={question.image.downloadUrl} alt={question} />
    </div>
    <section>
      <div className="question-text-holder">
        {answered && <button onClick={resetQuestion}>Next</button>}
        <h4 className="question-text">{question.question}</h4>
      </div>
      {question.options.map((option, index) => {
        return (
          <button
            key={option.id}
            onClick={() => onOptionClicked(option)}
            className={`question-option 
              // if the question is answered and the option is correct, add a
              // "correct" class to the option
              ${answered && isCorrect(option) && "correct"}
              // if the selected option matches the option, and the option is wrong,
              // add a "wrong" class to the option
              ${selectedOption === option && !isCorrect(option) && "wrong"}`}
          >
            <span>
              {answered ? (isCorrect(option) ? "✔" : "X") : (index + 1)}
            </span>
            {option}
          </button>
        );
      })}
    </section>
  </div>
);
};

export default Question;