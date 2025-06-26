import React from 'react';
import { useJsonFetch } from './useJsonFetch';

export default function Loading(props) {
  const [data, loading, error] = useJsonFetch(props.baseUrl, props.opts);

  if (loading) return <p>Идёт загрузка... Пожалуйста, подождите!</p>;
  if (error) return <p>{error}</p>;

  return (
    <>
      <h2>Запрос завершён:</h2>
      <pre>{JSON.stringify(data)}</pre>
    </>
  );
};
