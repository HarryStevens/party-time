# party-time
Convert party abbreviations to full names and back again.

## Installation

### npm
```bash
npm i party-time -s
```
```js
var pt = require("party-time");
```

## Usage

<a name="convert" href="#convert">#</a> pt.<b>convert</b>(<i>party</i>[, <i>greedy</i>, <i>type</i>])

Converts a party abbreviation to its full name or vice versa. 

Arguments:
1. *string* of the party abbreviation or name.
2. *boolean* to determine whether the function should be greedy or not. 
	* If it's greedy, it will guess whether the party string is an abbreviation or the full name, and return the converted version.
	* If it's not greedy, it will return an object with the properties `abbr`, `name`, and, sometimes, `variations`.
3. *string* to specify the type of the party string. If every letter in the string is a capital letter, the function will assume it's an abbreviation. If this isn't the case, you can specify either "abbr" or "name".

## Examples

```js
pc.convert("BJP"); // "Bharatiya Janata Party"
pc.convert("BJP", true); // "Bharatiya Janata Party"

pc.convert("BJP", false); // {abbr: "BJP", name: "Bharatiya Janata Party"}

pc.convert("Indian National Congress"); // "INC"

pc.convert("Indian National Congress", false); // {abbr: "INC", "Indian National Congress"}

pc.convert("bjp", true, "abbr"); // "Bharatiya Janata Party"
pc.convert("bjp", null, "abbr"); // "Bharatiya Janata Party"

pc.convert("Communist Party of India (Marxist)", false); 
/*
{
	abbr: "CPI(M)",
	"name": "Communist Party of India (Marxist)", 
	"variations": {
		"abbr": ["CPM"]
	}
}
*/
```

## Tests
```bash
npm test
```

## Contributing
In lieu of a formal style guide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code.