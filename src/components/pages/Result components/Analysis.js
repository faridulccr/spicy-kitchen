import Classes from "../../assets/styles/Question.module.css";
import Answers from "../Quiz components/Answers";

const Analysis = ({ answers = [], total, correct }) => {
  return (
    <div style={{ margin: "2rem auto" }}>
      <h1>Question Analysis</h1>
      <h4>
        You answerd {correct} out of {total} questions correctly
      </h4>

      {answers.map((answerObj, index) => (
        <div key={index} className={Classes.question}>
          <div className={Classes.qtitle}>
            <span className="material-icons-outlined"> help_outline </span>
            {answerObj.title}
          </div>
          <Answers options={answerObj.options} input={false} />
        </div>
      ))}
    </div>
  );
};

export default Analysis;
