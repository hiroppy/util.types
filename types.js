'use strict';

// see https://github.com/isaacs/core-util-is/blob/master/lib/util.js
function objectToString(o) {
  return Object.prototype.toString.call(o);
}

module.exports.isExternal = function isExternal() {};

module.exports.isDate = function isDate(d) {
  return objectToString(d) === '[object Date]' && d instanceof Date;
};

module.exports.isArgumentsObject = function isArgumentsObject(a) {
  return objectToString(a) === '[object Arguments]';
};

module.exports.isBooleanObject = function isBooleanObject(b) {
  return objectToString(b) === '[object Boolean]' && b instanceof Boolean;
};

module.exports.isNumberObject = function isNumberObject(n) {
  return objectToString(n) === '[object Number]' && n instanceof Number;
};

module.exports.isStringObject = function isStringObject(s) {
  return objectToString(s) === '[object String]' && s instanceof String;
};

module.exports.isSymbolObject = function isSymbolObject(s) {
  return objectToString(s) === '[object Symbol]' && s instanceof Symbol;
};

module.exports.isNativeError = function isNativeError(e) {
  return objectToString(e) === '[object Error]' && e instanceof Error;
};

module.exports.isRegExp = function isRegExp(r) {
  return objectToString(r) === '[object RegExp]' && r instanceof RegExp;
};

module.exports.isAsyncFunction = function isAsyncFunction(a) {
  return objectToString(a) === '[object AsyncFunction]';
};

module.exports.isGeneratorFunction = function isGeneratorFunction(g) {
  return objectToString(g) === '[object GeneratorFunction]';
};

module.exports.isGeneratorObject = function isGeneratorObject(g) {
  return objectToString(g) === '[object Generator]';
};

module.exports.isPromise = function isPromise(p) {
  return objectToString(p) === '[object Promise]';
};

module.exports.isMap = function isMap(m) {
  return objectToString(m) === '[object Map]' && m instanceof Map;
};

module.exports.isSet = function isSet(s) {
  return objectToString(s) === '[object Set]' && s instanceof Set;
};

module.exports.isMapIterator = function isMapIterator(m) {
  return objectToString(m) === '[object Map Iterator]';
};

module.exports.isSetIterator = function isSetIterator(s) {
  return objectToString(s) === '[object Set Iterator]';
};

module.exports.isWeakMap = function isWeakMap(w) {
  return objectToString(w) === '[object WeakMap]';
};

module.exports.isWeakSet = function isWeakSet(w) {
  return objectToString(w) === '[object WeakSet]';
};

module.exports.isArrayBuffer = function isArrayBuffer(a) {
  return objectToString(a) === '[object ArrayBuffer]' && a instanceof ArrayBuffer;
};

module.exports.isDataView = function isDataView(d) {
  return objectToString(d) === '[object DataView]' && d instanceof DataView;
};

module.exports.isSharedArrayBuffer = function isSharedArrayBuffer(s) {
  return objectToString(s) === '[object SharedArrayBuffer]' && s instanceof SharedArrayBuffer;
};

module.exports.isProxy = function isProxy() {};

module.exports.isWebAssemblyCompiledModule = function isWebAssemblyCompiledModule(w) {
  return objectToString(w) === '[object WebAssembly.Module]';
};

module.exports.isModuleNamespaceObject = function isModuleNamespaceObject() {};

module.exports.isAnyArrayBuffer = function isAnyArrayBuffer() {};

// dataView, int32Array, uint8Array, buffer,
// stealthyDataView, stealthyInt32Array, stealthyUint8Array
module.exports.isArrayBufferView = function isArrayBufferView() {};

// int32Array, uint8Array, buffer, stealthyInt32Array, stealthyUint8Array
// see https://github.com/lodash/lodash/blob/master/isTypedArray.js
module.exports.isTypedArray = function isTypedArray(t) {
  const tags = /^\[object (?:Float(?:32|64)Array|(?:Int|Uint)(?:8|16|32)Array|Uint8ClampedArray)\]$/;

  return tags.test(objectToString(t));
};

module.exports.isUint8Array = function isUint8Array(u) {
  return objectToString(u) === '[object Uint8Array]' && u instanceof Uint8Array;
};

module.exports.isUint8ClampedArray = function isUint8ClampedArray(u) {
  return objectToString(u) === '[object Uint8ClampedArray]' && u instanceof Uint8ClampedArray;
};

module.exports.isUint16Array = function isUint16Array(u) {
  return objectToString(u) === '[object Uint16Array]' && u instanceof Uint16Array;
};

module.exports.isUint32Array = function isUint32Array(u) {
  return objectToString(u) === '[object Uint32Array]' && u instanceof Uint32Array;
};

module.exports.isInt8Array = function isInt8Array(i) {
  return objectToString(i) === '[object Int8Array]' && i instanceof Int8Array;
};

module.exports.isInt16Array = function isInt16Array(i) {
  return objectToString(i) === '[object Int16Array]' && i instanceof Int16Array;
};

module.exports.isInt32Array = function isInt32Array(i) {
  return objectToString(i) === '[object Int32Array]' && i instanceof Int32Array;
};

module.exports.isFloat32Array = function isFloat32Array(i) {
  return objectToString(i) === '[object Float32Array]' && i instanceof Float32Array;
};

module.exports.isFloat64Array = function isFloat64Array(i) {
  return objectToString(i) === '[object Float64Array]' && i instanceof Float64Array;
};

module.exports.isBigInt64Array = function isBigInt64Array(i) {
  return objectToString(i) === '[object Float64Array]' && i instanceof Float64Array;
};

// currently, Node.js requires `--harmony-bigint`
module.exports.isBigUint64Array = function isBigUint64Array() {};
