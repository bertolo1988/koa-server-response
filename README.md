# koa-server-response

Easy way to build responses.

## Install

`npm i --save koa-server-response`

## How to use

```
const Koa = require('koa');
const app = new Koa();
const ServerResponse = require('koa-server-response')

app.use(async ctx => {
  ServerResponse.success(ctx)
});

app.listen(3000);
```

Response will look like:

```
STATUS: 200 OK
{
    "message": "OK",
    "createdAt": "2019-03-30T19:54:28.117Z"
}
```

## Linting

`npm run lint`

## Testing

`npm run test`

## Contributing

Contributions will be highly appreciated.

Feel free to open any issues on any related matter.

## LICENSE

Code released under the [MIT](./LICENSE).
