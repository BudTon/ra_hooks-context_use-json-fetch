useJsonFetch
===

[GITHUB Pages](https://BudTon.github.io/ra_hooks-context_use-json-fetch/)

[![pages-build-deployment](https://github.com/BudTon/ra_hooks-context_use-json-fetch/actions/workflows/pages/pages-build-deployment/badge.svg)](https://github.com/BudTon/ra_hooks-context_use-json-fetch/actions/workflows/pages/pages-build-deployment)

Реализуйте кастомный хук `useJsonFetch`, который позволяет с помощью `fetch` осуществлять HTTP-запросы.

Использование этого хука должно выглядеть следующим образом:
```javascript
const [data, loading, error] = useJsonFetch(url, opts);
```

где:
* `data` — данные, полученные после `response.json()`, не Promise, а именно данные;
* `error` — ошибка: ошибка сети, ошибка ответа, если код не 20x, ошибка парсинга, если пришёл не JSON;
* `loading` — boolean флаг, сигнализирующий о том, что загрузка идёт.

Покажите использование этого хука на примере трёх компонентов, каждый из которых делает запросы на следующие адреса:
* GET http://localhost:7070/data — успешное получение данных;
* GET http://localhost:7070/error — получение 500 ошибки;
* GET http://localhost:7070/loading — индикатор загрузки.

Backend возьмите из каталога `server`.
