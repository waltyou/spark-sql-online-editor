import CodeMirror from 'codemirror'

const antlr4 = require('antlr4')
const SqlBaseLexer = require('./SqlBaseLexer.js').SqlBaseLexer
const SqlBaseParser = require('./SqlBaseParser').SqlBaseParser
const ParseErrorListener = require('./ParseErrorListener').ParseErrorListener

CodeMirror.registerHelper('lint', 'sql', function (text, options) {
  const parserErrors = getAntlr4Errors(text)
  return parserErrors.map((err) => mapParseErrorToCodeMirrorError(err))
})

function getAntlr4Errors (input) {
  const stream = antlr4.CharStreams.fromString(input.toUpperCase())
  const lexer = new SqlBaseLexer(stream)
  lexer.removeErrorListeners()
  var listener = new ParseErrorListener()
  lexer.addErrorListener(listener)
  const tokens = new antlr4.CommonTokenStream(lexer)
  const parser = new SqlBaseParser(tokens)
  parser.removeErrorListeners()
  parser.addErrorListener(listener)

  parser.singleStatement()

  return listener.getErrors()
}

function mapParseErrorToCodeMirrorError (err) {
  return {
    from: CodeMirror.Pos(err.row, err.col),
    to: CodeMirror.Pos(err.row, err.col + 3),
    message: err.text,
    severity: 'error'
  }
}
