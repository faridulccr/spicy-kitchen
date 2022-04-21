import Summary from "./Summary";
import Analysis from "./Analysis";
import { useLocation, useParams } from "react-router-dom";
import useAnswer from "../../../hooks/useAnswer";
import _ from "lodash";

const Result = () => {
  const { id } = useParams();
  const { state } = useLocation();
  const { quesAnswer } = state;
  const { loading, error, answers } = useAnswer(id);

  // console.log(quesAnswer);
  // console.log(answers);

  const checkCorrectAns = () => {
    let rightAns = 0;

    answers.forEach((answerObj, ansIndex) => {
      const correctIndex = [],
        checkedIndex = [];
      answerObj.options.forEach((optionObj, optIndex) => {
        if (optionObj.correct) {
          correctIndex.push(optIndex);
        }
        if (quesAnswer[ansIndex].options[optIndex].checked) {
          checkedIndex.push(optIndex);
          optionObj.checked = true;
        }
      });

      if (_.isEqual(correctIndex, checkedIndex)) {
        rightAns = rightAns + 1;
      }
    });

    return rightAns;
  };

  const rightAns = checkCorrectAns(); // rightAns

  return (
    <>
      {loading && <div>Loading...</div>}
      {!loading && !error && answers && answers.length > 0 && (
        <>
          <Summary totalScore={quesAnswer.length * 5} score={rightAns * 5} />
          <Analysis
            answers={answers}
            total={quesAnswer.length}
            correct={rightAns}
          />
        </>
      )}
      {error && <div>There is an error!</div>}
    </>
  );
};

export default Result;
