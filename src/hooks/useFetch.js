import { useEffect, useState } from "react";

const useFetch = (url, method, headers) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [result, setResult] = useState(null);

  useEffect(() => {
    const requestFetch = async () => {
      try {
        setError(false);
        setLoading(true);
        const response = await fetch(url, {
          method: method || 'GET',
          headers: headers || null,
        });
        const data = await response.json();

        setResult(data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
        setError(true);
      }
    };
    requestFetch();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return {
    loading,
    error,
    result,
  };
};

export default useFetch;
