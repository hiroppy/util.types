# util.types

[![Build Status](https://travis-ci.org/hiroppy/util.types.svg?branch=master)](https://travis-ci.org/hiroppy/util.types)

Polyfill of `util.types`.

`util.types` was introduced at Node10.

## Usage

### Shim

```js
require('util.types/shim')();

const util = require('util');

console.log(util.types);
```
