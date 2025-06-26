import { useState, useEffect } from 'react';

export function useJsonFetch(url, opts) {
  const [data, setData] = useState(null); 
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(url + opts);

        if (!res.ok) throw new Error(`Ошибка сервера: ${res.status}`);

        const json = await res.json();

        setData(json);
        setError(null);
      } catch (err) {
        console.error(err.message);
        setError(err.message || err.toString());
      } finally {
        setLoading(false);
      }
    }

    fetchData(); 
  }, [url, opts]);

  return [data, loading, error];
}