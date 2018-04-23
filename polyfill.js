'use strict';

var util = require('util');
var types = require('./types');

function getPolyfill() {
  if (typeof util.types === 'object') return util.types;
  return types;
}

module.exports = getPolyfill;
