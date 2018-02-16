import json from "./data/parties.json"
import getType from "./getType"

/**
* Gets information about the party. If you do not specify a type in the second argument, it will guess the type.
* @param {string} party The party, either a full name or an abbrevation, to get information about.
* @param {string} [type = null] A type, which can be either "abbr" or "name". This argument is optional. `party-time` usually can determine the type by itself, but you can declare it explicitly, just in case.
* @returns {object} An object with information about the party. If the party entered is not found in the library, returns an object containing the party name and a warning.
* @example
* pt.getInfo("BJP");
* //{   
* //  name: "Bharatiya Janata Party",
* //  abbr: "BJP",
* //  founded: 1980,
* //  type: "national",
* //  location: "India",
* //  symbol: "Lotus" 
* //}
* 
* pt.getInfo("Indian National Congress");
* //{ 
* //  name: "Indian National Congress",
* //  abbr: "INC",
* //  founded: 1885,
* //  type: "national",
* //  location: "India",
* //  symbol: "Hand"
* //}
* 
* pt.getInfo("cpm");
* //{ 
* //  name: "Communist Party of India (Marxist)",
* //  abbr: "CPI(M)",
* //  founded: 1964,
* //  type: "national",
* //  location: "India",
* //  symbol: "Hammer sickle and star",
* //  variations: { abbr: [ "CPM" ] } 
* // }
* 
* pt.getInfo("Not a real party") // { name: 'Not a real party', warning: 'No match in library' }
*/  
export default function getInfo(party, type){
  
  type = type ? type : getType(party);

  var out = json.filter(function(d){
    return d[type] == party || (d.variations && d.variations[type] && d.variations[type].indexOf(party) != -1);
  });

  if (out.length > 0){
    return out[0];
  } else {
    var obj = {};
    obj[type] = party;
    obj.warning = "No match in library";
    return obj;
  }

}