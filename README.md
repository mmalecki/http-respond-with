# http-respond-with
Create a HTTP request handler that responds with given status code, headers and body.  
Can get useful in tests.

## Installation

```sh
npm install http-respond-with
```

## Usage
```js
var http = require('http')
var respondWith = require('http-respond-with')
http.createServer(respondWith({
  statusCode: 201,
  headers: {
    'content-type': 'application/json'
  },
  body: JSON.stringify({
    foo: 'bar'
  })
})).listen(7890)
```

This server will respond with status code 201, `content-type` header set to
`application/json` and with `{"foo":"bar"}` as the body.

## API

### `respondWith(options)`
* `options.statusCode` - status code, required
* `options.headers` - headers, defaults to `{}`
* `options.body` - body, defaults to empty body
