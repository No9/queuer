# queuer
A simple function queuing library taken from [this stackoverflow question](http://stackoverflow.com/questions/899102/how-do-i-store-javascript-functions-in-a-Queuer-for-them-to-be-executed-eventuall)

## install 

``` sh
$ npm install queuer
```

## usage 

```js
var assert = require('assert')
var Queuer = require('queuer')

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
```

## test 

```
$ npm test
```

Runs `node test/test-queuer`
