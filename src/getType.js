import json from "./data/parties.json"
import isAllCaps from "./helpers/isAllCaps"

/**
* Guesses whether the party string entered is an abbreviation or the full name. 
* @param {string} party The party, either a full name or an abbrevation.
* @returns {string} Returns "abbr" or "name".
*/
export default function getType(party){

  var match = json.filter(function(d){

    return d.abbr.toLowerCase() == party.toLowerCase() || (d.variations && d.variations.abbr && (d.variations.abbr.indexOf(party.toUpperCase()) !== -1 || d.variations.abbr.indexOf(party) !== -1))

  }).length > 0;

  return isAllCaps(party) || match ? "abbr" : "name";
}