
import { useState, useEffect } from "react";
import api from "../Services/api";

function useFetch(url) {

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {

    const fetchData = async () => {

      try {
        setLoading(true);
        setError(null);

        const response = await api.get(url);

        setData(response.data);

      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }

    };

    fetchData();

  }, [url]);

  return { data, loading, error };
}

export default useFetch;
