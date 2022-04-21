import { get, getDatabase, orderByKey, query, ref } from "firebase/database";
import { useEffect, useState } from "react";

const useAnswer = (videoID) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    async function fetchAnswers() {
      // database related work
      const database = getDatabase();
      const answerRef = ref(database, `answers/${videoID}/questions`);
      const answerQuery = query(answerRef, orderByKey());

      // to handle error
      try {
        setError(false);
        setLoading(true);
        const snapshot = await get(answerQuery);

        if (snapshot.exists()) {
          setAnswers((prevAnswers) => {
            return [...prevAnswers, ...Object.values(snapshot.val())];
          });
        }
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
        setError(true);
      }
    }
    fetchAnswers();
  }, [videoID]);

  return {
    loading,
    error,
    answers,
  };
};

export default useAnswer;
