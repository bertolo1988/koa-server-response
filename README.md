# koa-server-response

Easy way to build responses.

[![npm version](https://badge.fury.io/js/koa-server-response.svg)](https://badge.fury.io/js/koa-server-response) [![Build Status](https://travis-ci.org/bertolo1988/koa-server-response.svg?branch=master)](https://travis-ci.org/bertolo1988/koa-server-response)

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
