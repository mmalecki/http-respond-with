var assert = require('assert')

module.exports = function (options) {
  var statusCode = options.statusCode
  var headers = options.headers || {}
  var body = options.body

  assert.equal(typeof statusCode, 'number', 'options.statusCode has to be a number')

  return function (req, res) {
    res.writeHead(statusCode, headers)
    res.end(body)
  }
}
