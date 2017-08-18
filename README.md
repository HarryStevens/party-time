# party-time [![Build Status](https://travis-ci.org/HindustanTimesLabs/party-time.svg?branch=master)](https://travis-ci.org/HindustanTimesLabs/party-time) [![Coverage Status](https://coveralls.io/repos/github/HindustanTimesLabs/party-time/badge.svg?branch=master)](https://coveralls.io/github/HindustanTimesLabs/party-time?branch=master)
Convert Indian party abbreviations to full names and back again.

![alt text](https://github.com/HindustanTimesLabs/party-time/blob/master/img/demo.gif "require('party-time')")

## Resources
* [API Reference](https://github.com/HindustanTimesLabs/party-time/blob/master/API.md)
* [Introduction](https://medium.com/indiedata/introducing-party-time-a-node-package-that-makes-converting-indian-political-party-names-b0e9ba28d5ca)

## Installation

### Web browser

You can use the latest release from the unpkg CDN.
```html
<script src="https://unpkg.com/party-time/lib/party-time.js"></script>
<script src="https://unpkg.com/party-time/lib/party-time.min.js"></script>
```
If you prefer to host the file yourself, download it from the [`lib` directory](https://github.com/HindustanTimesLabs/party-time/tree/master/lib).
```html
<script src="path/to/party-time.js"></script>
<script src="path/to/party-time.min.js"></script>
```

### npm

```bash
npm i party-time -S
```
```js
var pt = require("party-time");
```

## Tests
```bash
npm test
```

## Contributing
In lieu of a formal style guide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality.

If you find a party or abbreviation not in the library, please [open up an issue](https://github.com/HindustanTimesLabs/party-time/issues).