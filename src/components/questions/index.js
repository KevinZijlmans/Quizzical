import React from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";

const Questions = ({ questions }) => { 
    const [currentIndex, setCurrentIndex] = useState(0);
    const [score, setScore] = useState(0);
    const [showFinished, setShowFinished] = useState(false);
    const currentQuestion = questions[currentIndex];

    const onNextClicked = selectedOption => {
        /* here we check if the answer matches the selected option. If true,
        we increment the score for the user */
        if (currentQuestion.answer === selectedOption) setScore(score + 1);
        /* we check if the next index doesn't exist within the array. 
          This means we've exhausted all the questions, so __`showFinished`__ is set 
          to true */
        if (currentIndex + 1 > questions.length - 1) {
          setShowFinished(true);
          return;
        }
        setCurrentIndex(currentIndex + 1);
      };
    
      const resetQuiz = () => {
        setCurrentIndex(0);
        setShowFinished(false);
        setScore(0);
      };
    

    return questions.length ? (
      <div>
        {showFinished ? (
          <div className="results">
            <img
              src="https://memegenerator.net/img/instances/70669406/your-watch-has-ended.jpg"
              alt="Your watch has ended"
            />
            <h3>
              Your results are out. You scored {score} out of {questions.length}
            </h3>
          </div>
        ) : (
         // TODO -- create component to render question here
        )}
      </div>
    ) : (
      <p>Loading</p>
    );
  };

const GET_QUESTIONS_QUERY = gql`query {
    questionsList {
      items {
        question
        options
        answer
        image
      }
    }
  }`;

  export default graphql(GET_QUESTIONS_QUERY, {
      props: result => {
          const { loading, data } = result;
          let items = [];
          if (data && data.questionsList) items = data.questionsList.items;
          return {
              loading,
              questions: items
          };
      }
  })(Questions);