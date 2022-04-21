import Classes from "../../assets/styles/Answers.module.css";
import ansClasses from "../../assets/styles/Answer.module.css";
import Checkbox from "../Checkbox";

const Answers = ({ options = [], onHandleChange, input }) => {
  return (
    <div className={Classes.answers}>
      {input ? (
        <>
          {options.map((optionObj, index) => (
            <Checkbox
              key={index}
              className={ansClasses.answer}
              text={optionObj.title}
              value={index}
              checked={optionObj.checked}
              onChange={(e) => onHandleChange(e, index)}
            />
          ))}
        </>
      ) : (
        <>
          {options.map((optionObj, index) => (
            <Checkbox
              key={index}
              className={`${ansClasses.answer} ${
                optionObj.correct
                  ? ansClasses.correct
                  : optionObj.checked
                  ? ansClasses.wrong
                  : null
              }`}
              text={optionObj.title}
              correctOrWrong={
                optionObj.correct
                  ? "correct answer"
                  : optionObj.checked
                  ? "wrong answer"
                  : null
              }
              defaultChecked={optionObj.checked}
              disabled
            />
          ))}
        </>
      )}
    </div>
  );
};

export default Answers;
