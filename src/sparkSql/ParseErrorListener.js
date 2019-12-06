const antlr4 = require('antlr4')

var ParseErrorListener = function () {
  antlr4.error.ErrorListener.call(this)
  this.annotations = []
  return this
}

ParseErrorListener.prototype = Object.create(antlr4.error.ErrorListener.prototype)
ParseErrorListener.prototype.constructor = ParseErrorListener

ParseErrorListener.prototype.syntaxError = function (recognizer, offendingSymbol, line, column, msg, e) {
  this.annotations.push({
    row: line - 1,
    col: column,
    text: msg
  })
}

ParseErrorListener.prototype.getErrors = function () {
  return this.annotations
}

export {
  ParseErrorListener
}
