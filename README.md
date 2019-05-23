# party-time

Convert Indian political party abbreviations to full names and back again. [![Build Status](https://travis-ci.org/HarryStevens/party-time.svg?branch=master)](https://travis-ci.org/HarryStevens/party-time)

![var pt = require('party-time'); pt.convert('BJP'); // Bharatiya Janata Party](https://github.com/HindustanTimesLabs/party-time/blob/master/img/demo.gif "require('party-time')")

## Resources
* [API Reference](https://github.com/HarryStevens/party-time/blob/master/API.md)
* [Introduction](http://harryjstevens.com/blog/introducing-party-time-an-npm-package-for-converting-indian-political-party-names/)

## Installation

### Web browser

You can use the latest release from the unpkg CDN.
```html
<script src="https://unpkg.com/party-time@3.2.57/build/party-time.js"></script>
<script src="https://unpkg.com/party-time@3.2.57/build/party-time.min.js"></script>
```
If you prefer to host the file yourself, download it from the [`build` directory](https://github.com/HindustanTimesLabs/party-time/tree/master/build).
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

## Building
```bash
npm run build
```

## Contributing
In lieu of a formal style guide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality.

If you find a party or abbreviation not in the library, please [open up an issue](https://github.com/HindustanTimesLabs/party-time/issues) or add the party to [`src/data/parties.json`](https://github.com/HindustanTimesLabs/party-time/blob/master/src/data/parties.json) and submit a pull request.

After adding parties, it is a good idea to check if you've added a duplicate. To do that, run `node scripts/integrity_check.js`.