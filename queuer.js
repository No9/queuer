// Original Source obtainted from http://stackoverflow.com/questions/899102/how-do-i-store-javascript-functions-in-a-Queuer-for-them-to-be-executed-eventuall

function Queuer () {}

Queuer.prototype.running = false

Queuer.prototype.Queue = []

Queuer.prototype.add = function (callback) {
  var _this = this
  // add callback to the Queuer
  this.Queue.push(function () {
    var finished = callback()
    if (typeof finished === 'undefined' || finished) {
      //  if callback returns `false`, then you have to
      //  call `next` somewhere in the callback
      _this.next()
    }
  })

  if (!this.running) {
    // if nothing is running, then start the engines!
    this.next()
  }
  return this // for chaining fun!
}

Queuer.prototype.next = function () {
  this.running = false
  // get the first element off the Queuer
  var shift = this.Queue.shift()
  if (shift) {
    this.running = true
    shift()
  }
}

module.exports = Queuer
