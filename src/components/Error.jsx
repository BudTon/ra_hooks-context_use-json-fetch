import React from 'react';
import { useJsonFetch } from './useJsonFetch';

export default function Error(props) {
  // eslint-disable-next-line no-unused-vars
  const [data, loading, error] = useJsonFetch(props.baseUrl, props.opts);

  if (loading) return <p>Загрузка...</p>;
  if (error) return <p>{error}</p>;

  return (
    <>
      <h2>Ошибка сервера:</h2>
      <div>Что-то пошло не так.</div>
    </>
  );
};
