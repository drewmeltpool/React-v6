import { useEffect, useState } from 'react';

export const useFetch = <T extends Array<unknown>>(url: string) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [data, setData] = useState<T>();
  const [error, setError] = useState<unknown>();

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(url).then((d) => d.json());
        setData(response);
        setLoading(false);
      } catch (e) {
        setError(e);
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { loading, data, error };
};
