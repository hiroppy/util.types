var util = require('util');
var getPolyfill = require('./polyfill');

function getTypes() {
  var polyfill = getPolyfill();

  if (polyfill !== util.types) {
    Object.defineProperty(util, 'types', {
      configurable: true,
      enumerable: true,
      value: polyfill,
      writable: true
    });
  }

  return polyfill;
}

module.exports = getTypes;
