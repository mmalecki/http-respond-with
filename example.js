var http = require('http')
var respondWith = require('./')
http.createServer(respondWith({
  statusCode: 201,
  headers: {
    'content-type': 'application/json'
  },
  body: JSON.stringify({
    foo: 'bar'
  })
})).listen(7890)
