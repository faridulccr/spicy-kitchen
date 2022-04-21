import { useEffect, useReducer, useState } from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import useQuestions from "../../../hooks/useQuestions";
import Answers from "./Answers";
import MiniPlayer from "./MiniPlayer";
import ProgressBar from "./ProgressBar";
import _ from "lodash";
import { getDatabase, ref, set } from "firebase/database";
import { useAuth } from "../../../contexts/AuthContex";

const initialState = null;
const reducer = (state, action) => {
  switch (action.type) {
    case "questions":
      action.value.forEach((questionObj) => {
        questionObj.options.forEach((optionObj) => {
          optionObj.checked = false;
        });
      });
      return action.value;

    case "answer":
      //prev state k deeply clone/copy korte hoy ta na hole unexpected behaviour korte pare
      const questions = _.cloneDeep(state); //deeply clone using react lodash
      questions[action.currentQues].options[action.optionIndex].checked =
        action.value;
      return questions;
    default:
      return state;
  }
};

const Quiz = () => {
  const { id } = useParams();
  // console.log(id);
  const { loading, error, questions } = useQuestions(id);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [quesAnswer, dispatch] = useReducer(reducer, initialState);
  const { currentUser } = useAuth();
  const navigate = useNavigate();
  const { state } = useLocation();
  // console.log(useLocation());

  useEffect(() => {
    dispatch({
      type: "questions",
      value: questions,
    });
  }, [questions]);
  // console.log(quesAnswer);

  // to handle user's answer when user clicks the checkbox
  const checkedAnswer = (e, index) => {
    dispatch({
      type: "answer",
      currentQues: currentQuestion,
      optionIndex: index,
      value: e.target.checked,
    });
  };

  //to handle when user clicks the next button to get the next question
  const next = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((prevValue) => prevValue + 1);
    }
  };

  //to handle when user clicks the previous button to get the previous question
  const prev = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion((prevValue) => prevValue - 1);
    }
  };

  // to control progress bar
  const percentage =
    questions.length > 0 ? ((currentQuestion + 1) / questions.length) * 100 : 0;

  const submitHandler = async () => {
    // console.log(currentUser);
    const { uid } = currentUser;
    // database related work to dynamically write new data
    const database = getDatabase();
    const resultRef = ref(database, `result/${uid}`);

    // to write data in database
    await set(resultRef, {
      [id]: quesAnswer,
    });

    // kono state dite chaile 2nd parameter e dite hoy
    navigate(`/result/${id}`, {
      //state property state name ei dite hobe
      state: {
        quesAnswer,
      },
    });
  };

  return (
    <>
      {loading && <h3>Loading...</h3>}
      {error && <div className="error">There was an error!</div>}

      {!loading && !error && quesAnswer && quesAnswer.length > 0 && (
        <>
          <h1>{quesAnswer[currentQuestion].title}</h1>
          <h4>Question can have multiple answers</h4>

          <Answers
            options={quesAnswer[currentQuestion].options}
            onHandleChange={checkedAnswer}
            input={true}
          />
          <ProgressBar
            nextFunc={next}
            prevFunc={prev}
            percentage={percentage}
            submit={submitHandler}
          />
          <MiniPlayer videoID={id} title={state.videoTitle} />
        </>
      )}
    </>
  );
};

export default Quiz;
