import { get, getDatabase, orderByKey, query, ref } from "firebase/database";
import { useEffect, useState } from "react";

const useQuestions = (videoID) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    async function fetchQuestions() {
      //database related works
      const database = getDatabase();
      const quizRef = ref(database, `quiz/${videoID}/questions`);
      const quizQuery = query(quizRef, orderByKey());

      // error handling
      try {
        setError(false);
        setLoading(true);
        const snapshot = await get(quizQuery);

        if (snapshot.exists()) {
          setQuestions((prevQuizs) => {
            return [...prevQuizs, ...Object.values(snapshot.val())];
          });
        }
        setLoading(false);
      } catch (err) {
        console.log(err);
        setLoading(false);
        setError(true);
      }
    }
    fetchQuestions();
  }, [videoID]);

  return {
    loading,
    error,
    questions,
  };
};

export default useQuestions;
