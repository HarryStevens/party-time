# party-time [![Build Status](https://travis-ci.org/HindustanTimesLabs/party-time.svg?branch=master)](https://travis-ci.org/HindustanTimesLabs/party-time) [![Coverage Status](https://coveralls.io/repos/github/HindustanTimesLabs/party-time/badge.svg?branch=master)](https://coveralls.io/github/HindustanTimesLabs/party-time?branch=master)
Convert Indian party abbreviations to full names and back again.

![alt text](https://github.com/HindustanTimesLabs/party-time/blob/master/img/demo.gif "require('party-time')")

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

## Usage
* [Convert](#convert)
* [Get Info](#getInfo)
* [Get Type](#getType)

<a name="convert" href="#convert">#</a> pt.<b>convert</b>(<i>party</i>[, <i>options</i>])

Converts a party abbreviation to its full name or vice versa. If the party entered is not found in the library, returns the party entered.

#### Arguments
1. *string* of the party abbreviation or name.
2. *object* containing options for customizing the output. This is optional.

#### Options
| Option | Data Type | Default | Description                                                                                                                                                                                                                                                                 |
|--------|-----------|---------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| greedy | boolean   | `true`  | If `true`, the function does the conversion automatically and returns a string. If there is no match in the library, it will return the original string.  If `false`, the function returns an object with the properties `abbr`, `name` and, when applicable, `variations`. |
| type   | string    | `null`  | By default, the function will guess the type of the party string by matching it against the party names and abbreviations in the library. You can override this behavior and explicitly specify the type of party string by passing `"abbr"` or `"name"`.                   |

#### Examples
```js
pt.convert("BJP"); // "Bharatiya Janata Party"
pt.convert("BJP", { greedy: false }); // { abbr: "BJP", name: "Bharatiya Janata Party" }
pt.convert("BJP", { greedy: true }); // "Bharatiya Janata Party"
pt.convert("bjp"); // "Bharatiya Janata Party"
pt.convert("cpm", { greedy: false }); // { abbr: "CPI(M)", name: "Communist Party of India (Marxist)", variations: { abbr: ["CPM"] } }
pt.convert("Indian National Congress"); // "INC"
pt.convert("Not a real party"); // "Not a real party"
pt.convert("NARP"); // "NARP"
pt.convert("narp", { type: "abbr" }); // "NARP"
pt.convert("narp", { greedy: false, type: "name" }); // { name: "narp", warning: "No match in libary" }
```

<a name="getInfo" href="#getInfo">#</a> pt.<b>getInfo</b>(<i>party</i>[, <i>type</i>])

Gets information about a party. If the party entered is not found in the library, returns an object containing the party name and a warning.

#### Arguments
1. *string* of the party abbreviation or name.
2. *string* of the party type. This is optional.

#### Examples
```js
pt.getInfo("BJP");
//{ 
//	name: 'Bharatiya Janata Party',
//  abbr: 'BJP',
//  founded: 1980,
//  type: 'national',
//  location: 'India',
//  symbol: 'Lotus' 
//}

pt.getInfo("Indian National Congress");
//{ 
//	name: 'Indian National Congress',
//  abbr: 'INC',
//  founded: 1885,
//  type: 'national',
//  location: 'India',
//  symbol: 'Hand' 
//}

pt.getInfo("Not a real party") // { name: 'Not a real party', warning: 'No match in library' }
```

<a name="getType" href="#getType">#</a> pt.<b>getType</b>(<i>party</i>)

Guesses whether the party string entered is an abbreviation or the full name. Returns `"abbr"` or `"name"`.

## Tests
```bash
npm test
```

## Contributing
In lieu of a formal style guide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality.

If you find a party or abbreviation not in the library, please [open up an issue](https://github.com/HindustanTimesLabs/party-time/issues).