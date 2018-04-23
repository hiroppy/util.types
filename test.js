'use strict';

var fs = require('fs');
var assert = require('assert');
var types = require('.');

{
  require('./shim')();
  var util = require('util');
  assert.equal(Object.keys(util.types).length, 39);
}

assert.equal(Object.keys(types).length, 39);

assert.equal(types.isDate(new Date()), true);
assert.equal(types.isDate(Date()), false);
assert.equal(types.isDate('Mon April 23 2012'), false);

assert.equal(
  types.isArgumentsObject(
    (function() {
      return arguments;
    })()
  ),
  true
);
assert.equal(
  types.isArgumentsObject(
    (function() {
      return 1;
    })()
  ),
  false
);

assert.equal(types.isBooleanObject(new Boolean()), true);
assert.equal(types.isBooleanObject(Boolean()), false);
assert.equal(types.isBooleanObject(false), false);

assert.equal(types.isNumberObject(new Number()), true);
assert.equal(types.isNumberObject(Number()), false);
assert.equal(types.isNumberObject(1), false);

assert.equal(types.isStringObject(new String()), true);
assert.equal(types.isStringObject(String()), false);
assert.equal(types.isStringObject('foo'), false);

assert.equal(types.isSymbolObject(Object(Symbol())), true);
assert.equal(types.isSymbolObject(Symbol()), false);
assert.equal(types.isSymbolObject(Symbol('foo')), false);

assert.equal(types.isNativeError(new Error()), true);
assert.equal(types.isNativeError(Error()), true);
assert.equal(types.isNativeError(new SyntaxError()), true);
assert.equal(types.isNativeError(Error), false);
assert.equal(types.isNativeError(Object.create(Error.prototype)), false);

assert.equal(types.isRegExp(/foo/g), true);
assert.equal(types.isRegExp([]), false);
assert.equal(types.isRegExp('foo'), false);

assert.equal(types.isAsyncFunction(async function() {}), true);
assert.equal(types.isAsyncFunction(function() {}), false);
assert.equal(types.isAsyncFunction(function*() {}), false);

assert.equal(types.isGeneratorObject((function*() {})()), true);
assert.equal(types.isGeneratorObject(function*() {}), false);
assert.equal(types.isGeneratorObject((async function() {})()), false);
assert.equal(types.isGeneratorFunction((function() {})()), false);

assert.equal(types.isPromise(Promise.resolve()), true);
assert.equal(types.isPromise(Promise), false);

assert.equal(types.isMap(new Map()), true);
assert.equal(types.isMap(Map), false);

assert.equal(types.isSet(new Set()), true);
assert.equal(types.isSet(Set), false);

assert.equal(types.isMapIterator(new Map()[Symbol.iterator]()), true);

assert.equal(types.isSetIterator(new Set()[Symbol.iterator]()), true);

assert.equal(types.isWeakMap(new WeakMap()), true);
assert.equal(types.isWeakMap(WeakMap), false);

assert.equal(types.isWeakSet(new WeakSet()), true);
assert.equal(types.isWeakSet(WeakSet), false);

assert.equal(types.isArrayBuffer(new ArrayBuffer()), true);
assert.equal(types.isArrayBuffer(ArrayBuffer), false);

assert.equal(types.isDataView(new DataView(new ArrayBuffer())), true);
assert.equal(types.isDataView(DataView), false);

assert.equal(types.isSharedArrayBuffer(new SharedArrayBuffer()), true);
assert.equal(types.isSharedArrayBuffer(SharedArrayBuffer), false);

var wasmBuffer = fs.readFileSync('./test.wasm');
assert.equal(types.isWebAssemblyCompiledModule(new WebAssembly.Module(wasmBuffer)), true);

// assert.equal(types.isProxy(new Proxy({}, {})), true);
// assert.equal(types.isProxy(Proxy), false);

assert.equal(types.isUint8Array(new Uint8Array()), true);
assert.equal(types.isUint8Array(Uint8Array), false);

assert.equal(types.isTypedArray(new Uint8Array()), true);
assert.equal(types.isTypedArray(new Float64Array()), true);
assert.equal(types.isTypedArray(new Uint8ClampedArray()), true);

assert.equal(types.isUint8ClampedArray(new Uint8ClampedArray()), true);
assert.equal(types.isUint8ClampedArray(Uint8ClampedArray), false);

assert.equal(types.isUint16Array(new Uint16Array()), true);
assert.equal(types.isUint16Array(Uint16Array), false);

assert.equal(types.isUint32Array(new Uint32Array()), true);
assert.equal(types.isUint32Array(Uint32Array), false);

assert.equal(types.isInt8Array(new Int8Array()), true);
assert.equal(types.isInt8Array(Int8Array), false);

assert.equal(types.isInt16Array(new Int16Array()), true);
assert.equal(types.isInt16Array(Int16Array), false);

assert.equal(types.isInt32Array(new Int32Array()), true);
assert.equal(types.isInt32Array(Int32Array), false);

assert.equal(types.isFloat32Array(new Float32Array()), true);
assert.equal(types.isFloat32Array(Float32Array), false);

assert.equal(types.isFloat64Array(new Float64Array()), true);
assert.equal(types.isFloat64Array(Float64Array), false);
