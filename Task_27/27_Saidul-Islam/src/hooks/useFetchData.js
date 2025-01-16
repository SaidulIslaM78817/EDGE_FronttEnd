// src/hooks/useFetchData.js
import { useEffect, useState } from 'react';
import { fetchData } from '../services/api';

const useFetchData = (url, options = {}) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true;
    const fetchAndSetData = async () => {
      setLoading(true);
      setError(null);
      try {
        const result = await fetchData(url, options);
        if (isMounted) setData(result);
      } catch (err) {
        if (isMounted) setError(err.message);
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    fetchAndSetData();

    return () => {
      isMounted = false;
    };
  }, [url, options]);

  return { data, loading, error };
};

export default useFetchData;
