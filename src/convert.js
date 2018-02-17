import getType from "./getType"
import getInfo from "./getInfo"

/**
* Converts a party abbreviation to its full name or vice versa. If the party entered is not found in the library, returns the party entered.
* @param {string} party The party, either a full name or an abbrevation, to convert.
* @param {object} [options = {greedy: TRUE}] An object specifying options for the conversion.
* @param {boolean} [options.greedy = TRUE] If `true`, the function does the conversion automatically and returns a string. If there is no match in the library, it will return the original string. If `false`, the function returns an object with the properties `abbr`, `name` and, when applicable, `variations`.
* @param {string} [options.type = null] By default, the function will guess the type of the party string by matching it against the party names and abbreviations in the library. You can override this behavior and explicitly specify the type of party string by passing `"abbr"` or `"name"`.
* @returns {(string|object)} A string with the converted party or, if the conversion is not set to greedy, an object with information about the party.
* @example
* pt.convert("BJP"); // "Bharatiya Janata Party"
* pt.convert("BJP", { greedy: false }); // { abbr: "BJP", name: "Bharatiya Janata Party" }
* pt.convert("BJP", { greedy: true }); // "Bharatiya Janata Party"
* pt.convert("bjp"); // "Bharatiya Janata Party"
* pt.convert("cpm", { greedy: false }); // { abbr: "CPI(M)", name: "Communist Party of India (Marxist)", variations: { abbr: ["CPM"] } }
* pt.convert("Indian National Congress"); // "INC"
* pt.convert("Not a real party"); // "Not a real party"
* pt.convert("NARP"); // "NARP"
* pt.convert("narp", { type: "abbr" }); // "narp"
* pt.convert("narp", { greedy: false, type: "name" }); // { name: "narp", warning: "No match in libary" }
*/
export default function convert(party, options){

  // Should the conversion be greedy? Defaults to TRUE.
  var greedy = options && options.greedy === false ? false : true;

  // Determine the type
  var type = options && options.type ? options.type : getType(party);

  // Get information about the party
  var info = getInfo(party, type);

  // Figure out what to return
  if (greedy) {
    if (info.warning) {
      return info[type];
    } else {
      return info[type == "abbr" ? "name" : "abbr"];
    }
  } else {
    var obj = {};
    if (info.warning){
      obj[type] = info[type];
      obj.warning = info.warning;
    } else {
      obj.abbr = info.abbr;
      obj.name = info.name;
      if (info.variations) {
        obj.variations = info.variations;
      }
    }
    return obj;
  }

}