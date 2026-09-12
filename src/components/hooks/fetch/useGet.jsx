import { useEffect, useState } from "react";

const useGet = (url) => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    async function fetchPost() {
      setLoading(true);
      try {
        const res = await fetch(url);
        if (!res.ok) throw Error("error message");
        const data = await res.json();
        setData(data);
      } catch (error) {
        setError(error.message);
        console.error();
      } finally {
        setLoading(false);
      }
    }
    if (url) fetchPost();
  }, [url]);
  return { data, setData, loading, error };
};
export default useGet;
