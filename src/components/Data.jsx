import React from 'react';
import { useJsonFetch } from './useJsonFetch'; // Импортируем наш кастомный хук

export default function Data(props) {
  
  const [data, loading, error] = useJsonFetch(props.baseUrl, props.opts);

  if (loading) return <p>Загрузка...</p>;
  if (error) return <p>{error}</p>;

  return (
    <>
      <h2>Успешная загрузка:</h2>
      <pre>{JSON.stringify(data)}</pre>
    </>
  );
};
