const UpperCaseCharStream = function (wrapped) {
  this.wrapped = wrapped
}

UpperCaseCharStream.prototype.consume = function () {
  this.wrapped.consume()
}
UpperCaseCharStream.prototype.getSourceName = function () {
  return this.wrapped.getSourceName
}

UpperCaseCharStream.prototype.index = function () {
  return this.wrapped.index
}

UpperCaseCharStream.prototype.mark = function () {
  return this.wrapped.mark
}

UpperCaseCharStream.prototype.release = function (marker) {
  return this.wrapped.release(marker)
}

UpperCaseCharStream.prototype.seek = function (where) {
  this.wrapped.seek(where)
}

UpperCaseCharStream.prototype.size = function () {
  return this.wrapped.size
}

UpperCaseCharStream.prototype.getText = function (interval) {
  if (this.size() > 0 && (interval.b - interval.a >= 0)) {
    return this.wrapped.getText(interval)
  } else {
    return ''
  }
}

/**
 * @return {number}
 */
UpperCaseCharStream.prototype.LA = function (i) {
  const la = this.wrapped.LA(i)
  if (la >= 97 && la <= 122) {
    return la - 32
  } else {
    return la
  }
}

export {
  UpperCaseCharStream
}
