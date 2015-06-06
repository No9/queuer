var assert = require('assert')
var Queuer = require('../queuer')

var qr = new Queuer()

var expected = [1, 2, 3]
var found = []

qr.add(function () {
  found.push(1)
})

qr.add(function () {
  found.push(2)
})

qr.add(function () {
  found.push(3)
})

qr.add(function () {
  assert.deepEqual(expected, found)
  console.log('Queuer Validated')
})
