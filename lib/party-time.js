/*
@license: MIT License

Copyright (c) 2017 Hindustan Times

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

"use strict";

var output = (function () {

  // a json with all the parties
  var json = [{
    "name": "Aam Aadmi Party",
    "abbr": "AAP",
    "founded": 2012,
    "type": "state",
    "location": "Delhi, Punjab",
    "symbol": "Broom"
  },{
    "name": "All India Anna Dravida Munnetra Kazhagam",
    "abbr": "AIADMK",
    "founded": 1972,
    "type": "state",
    "location": "Tamil Nadu, Puducherry",
    "symbol": "Two leaves"
  },{
    "name": "All India Forward Bloc",
    "abbr": "AIFB",
    "founded": 1939,
    "type": "state",
    "location": "West Bengal",
    "symbol": "Lion"
  },{
    "name": "All India Majlis-e-Ittehadul Muslimeen",
    "abbr": "AIMIM",
    "founded": 1927,
    "type": "state",
    "location": "Telangana",
    "symbol": "Kite",
    "variations": {
        "name": ["All India Majlis-E-Ittehadul Muslimeen"]
    }
  },{
    "name": "All India N.R. Congress",
    "abbr": "AINRC",
    "founded": 2011,
    "type": "state",
    "location": "Puducherry",
    "symbol": "Jug"
  },{
    "name": "All India Trinamool Congress",
    "abbr": "AITC",
    "founded": 1998,
    "type": "national",
    "location": "India",
    "symbol": "Flowers & grass"
  },{
    "name": "All India United Democratic Front",
    "abbr": "AIUDF",
    "founded": 2004,
    "type": "state",
    "location": "Assam",
    "symbol": "Lock and key"
  },{
    "name": "All Jharkhand Students Union",
    "abbr": "AJSU",
    "founded": 1986,
    "type": "state",
    "location": "Jharkhand",
    "symbol": "Banana"
  },{
    "name": "Asom Gana Parishad",
    "abbr": "AGP",
    "founded": 1985,
    "type": "state",
    "location": "Assam",
    "symbol": "Elephant"
  },{
    "name": "Bahujan Samaj Party",
    "abbr": "BSP",
    "founded": 1984,
    "type": "national",
    "location": "India",
    "symbol": "Elephant (except in Assam)"
  },{
    "name": "Bharatiya Janata Party",
    "abbr": "BJP",
    "founded": 1980,
    "type": "national",
    "location": "India",
    "symbol": "Lotus"
  },{
    "name": "Biju Janata Dal",
    "abbr": "BJD",
    "founded": 1997,
    "type": "state",
    "location": "Odisha",
    "symbol": "Conch"
  },{
    "name": "Bodoland People's Front",
    "abbr": "BPF",
    "founded": 1985,
    "type": "state",
    "location": "Assam",
    "symbol": "Nagol",
    "variations": {
        "name": ["Bodoland Peoples Front", "Bodoland People’s Front"]
    }
  },{
    "name": "Communist Party of India",
    "abbr": "CPI",
    "founded": 1925,
    "type": "national",
    "location": "India",
    "symbol": "Ears of corn and sickle"
  },{
    "name": "Communist Party of India (Marxist)",
    "abbr": "CPI(M)",
    "founded": 1964,
    "type": "national",
    "location": "India",
    "symbol": "Hammer sickle and star",
    "variations": {
      "abbr": ["CPM"]
    }
  },{
    "name": "Communist Party of India (Marxist-Leninist) (Liberation)",
    "abbr": "CPI(ML)(L)",
    "founded": 1974,
    "type": "",
    "location": "",
    "symbol": ""
  },{
    "name": "Desiya Murpokku Dravida Kazhagam",
    "abbr": "DMDK",
    "founded": 2005,
    "type": "state",
    "location": "Tamilnadu",
    "symbol": "Nagara"
  },{
    "name": "Dravida Munnetra Kazhagam",
    "abbr": "DMK",
    "founded": 1949,
    "type": "state",
    "location": "Tamil Nadu, Puducherry",
    "symbol": "Rising sun"
  },{
    "name": "Goa Forward Party",
    "abbr": "GFP",
    "founded": 2016,
    "type": "state",
    "location": "Goa",
    "symbol": "Coconut"
  },{
    "name": "Haryana Janhit Congress (BL)",
    "abbr": "HJC(BL)",
    "founded": 2007,
    "dissolved": 2016,
    "merged_into": "Indian National Congress",
    "type": "state",
    "location": "Haryana",
    "symbol": "tractor",
    "variations": {
        "abbr": ["HJC"]
    }
  },
  {
    "name": "Hill State People's Democratic Party",
    "abbr": "HSPDP",
    "founded": 1968,
    "type": "state",
    "location": "Meghalaya",
    "symbol": "Lion",
     "variations": {
        "name": ["Hill State Peoples Democratic Party", "Hill State People’s Democratic Party"]
    }   
  },{
    "name": "Indian National Congress",
    "abbr": "INC",
    "founded": 1885,
    "type": "national",
    "location": "India",
    "symbol": "Hand"
  },{
    "name": "Indian National Lok Dal",
    "abbr": "INLD",
    "founded": 1999,
    "type": "state",
    "location": "Haryana",
    "symbol": "Spectacles"
  },{
    "name": "Indian Union Muslim League",
    "abbr": "IUML",
    "founded": 1948,
    "type": "state",
    "location": "Kerala",
    "symbol": "Ladder"
  },{
    "name": "Independent",
    "abbr": "IND"
  },{
    "name": "Jammu & Kashmir National Conference",
    "abbr": "JKNC",
    "founded": 1932,
    "type": "state",
    "location": "Jammu & Kashmir",
    "symbol": "Plough"
  },{
    "name": "Jammu & Kashmir National Panthers Party",
    "abbr": "JKNPP",
    "founded": 1982,
    "type": "state",
    "location": "Jammu & Kashmir",
    "symbol": "Bicycle"
  },{
    "name": "Jammu and Kashmir People's Democratic Party",
    "abbr": "JKPDP",
    "founded": 1998,
    "type": "state",
    "location": "Jammu & Kashmir",
    "symbol": "Inkpot and pen",
    "variations": {
        "name": ["Jammu and Kashmir Peoples Democratic Party", "Jammu and Kashmir People’s Democratic Party"]
    }
  },{
    "name": "Janata Dal (Secular)",
    "abbr": "JD(S)",
    "founded": 1999,
    "type": "state",
    "location": "Karnataka, Kerala",
    "symbol": "Lady farmer carrying paddy on her head"
  },{
    "name": "Janata Dal (United)",
    "abbr": "JD(U)",
    "founded": 1999,
    "type": "state",
    "location": "Bihar",
    "symbol": "Arrow"
  },{
    "name": "Jharkhand Mukti Morcha",
    "abbr": "JMM",
    "founded": 1972,
    "type": "state",
    "location": "Jharkhand",
    "symbol": "Bow and arrow"
  },{
    "name": "Jharkhand Vikas Morcha (Prajatantrik)",
    "abbr": "JVM(P)",
    "founded": 2006,
    "type": "state",
    "location": "Jharkhand",
    "symbol": "Comb"
  },{
    "name": "Karnataka Janata Paksha",
    "abbr": "KJP",
    "founded": 2012,
    "type": "state",
    "location": "Karnataka",
    "symbol": "symbol not decided yet"
  },{
    "name": "Kerala Congress (M)",
    "abbr": "KC(M)",
    "founded": 1979,
    "type": "state",
    "location": "Kerala",
    "symbol": "Two leaves"
  },{
    "name": "Kisan Party Of India",
    "abbr": "KPI",
    "founded": 2014,
    "type": "state",
    "location": "BIHAR",
    "symbol": "Stool"
  },{
    "name": "Lok Janshakti Party",
    "abbr": "LJP",
    "founded": 2000,
    "type": "state",
    "location": "Bihar",
    "symbol": "Bungalow",
    "variations": {
        "name": ["Lok Jan Shakti Party"]
    }
  },{
    "name": "Maharashtra Navnirman Sena",
    "abbr": "MNS",
    "founded": 2006,
    "type": "state",
    "location": "Maharashtra",
    "symbol": "Railway engine"
  },{
    "name": "Maharashtrawadi Gomantak Party",
    "abbr": "MGP",
    "founded": 1963,
    "type": "state",
    "location": "Goa",
    "symbol": "Lion",
    "variations": {
        "name": ["Maharashtrawadi Gomantak"]
    }
  },{
    "name": "Mizo National Front",
    "abbr": "MNF",
    "founded": 1959,
    "type": "state",
    "location": "Mizoram",
    "symbol": "Star"
  },{
    "name": "Mizoram People's Conference",
    "abbr": "MPC",
    "founded": 1972,
    "type": "state",
    "location": "Mizoram",
    "symbol": "Electric Bulb",
    "variations": {
        "name": ["Mizoram Peoples Conference", "Mizoram People’s Conference"]
    }
  },{
    "name": "Naga People's Front",
    "abbr": "NPF",
    "founded": 2002,
    "type": "state",
    "location": "Manipur, Nagaland",
    "symbol": "Cock",
    "variations": {
        "name": ["Nagaland Peoples Front", "Nagaland People’s Front"]
    }
  },{
    "name": "National People's Party",
    "abbr": "NPP",
    "founded": 2013,
    "type": "state",
    "location": "Meghalaya, Manipur",
    "symbol": "Book",
    "variations": {
        "name": ["National Peoples Party", "National People’s Party"]
    }
  },{
    "name": "Nationalist Congress Party",
    "abbr": "NCP",
    "founded": 1999,
    "type": "national",
    "location": "India",
    "symbol": "Clock"
  },{
    "name": "Pattali Makkal Katchi",
    "abbr": "PMK",
    "founded": 1989,
    "type": "state",
    "location": "Puducherry",
    "symbol": "Mango"
  },{
    "name": "People's Party of Arunachal",
    "abbr": "PPA",
    "founded": 1987,
    "type": "state",
    "location": "Arunachal Pradesh",
    "symbol": "Maize",
    "variations": {
        "name": ["Peoples Party of Arunachal", "People’s Party of Arunachal"]
    }

  },{
    "name": "People's Democratic Alliance",
    "abbr": "PDA",
    "founded": "",
    "type": "state",
    "location": "Manipur",
    "symbol": "Crown",
    "variations": {
        "name": ["Peoples Democratic Alliance", "People’s Democratic Alliance"]
    }
  },{
    "name": "Rashtriya Janata Dal",
    "abbr": "RJD",
    "founded": 1997,
    "type": "state",
    "location": "Bihar, Jharkhand",
    "symbol": "Hurricane Lamp"
  },{
    "name": "Rashtriya Lok Dal",
    "abbr": "RLD",
    "founded": 1996,
    "type": "state",
    "location": "Uttar Pradesh",
    "symbol": "Hand pump"
  },{
    "name": "Rashtriya Lok Samta Party",
    "abbr": "RLSP",
    "founded": 2013,
    "type": "state",
    "location": "Bihar",
    "symbol": "Ceiling fan"
  },{
    "name": "Republican Party of India",
    "abbr": "RPI",
    "founded": 1956,
    "type": "",
    "location": "",
    "symbol": ""
  },{
    "name": "Republican Party of India (A)",
    "abbr": "RPI(A)",
    "founded": 1999,
    "type": "",
    "location": "",
    "symbol": ""
  },{
    "name": "Revolutionary Socialist Party",
    "abbr": "RSP",
    "founded": 1940,
    "type": "state",
    "location": "Kerala, West Bengal",
    "symbol": "Spade and stoker"
  },{
    "name": "Samajwadi Party",
    "abbr": "SP",
    "founded": 1992,
    "type": "state",
    "location": "Uttar Pradesh",
    "symbol": "Bicycle"
  },{
    "name": "Shiromani Akali Dal",
    "abbr": "SAD",
    "founded": 1920,
    "type": "state",
    "location": "Punjab",
    "symbol": "Scale"
  },{
    "name": "Shivsena",
    "abbr": "SS",
    "founded": 1966,
    "type": "state",
    "location": "Maharashtra",
    "symbol": "Bow and arrow",
    "variations": {
      "name": ["Shiv Sena"],
      "abbr": ["SHS"]
    }
  },{
    "name": "Sikkim Democratic Front",
    "abbr": "SDF",
    "founded": 1993,
    "type": "state",
    "location": "Sikkim",
    "symbol": "Umbrella"
  },{
    "name": "Sikkim Krantikari Morcha",
    "abbr": "SKM",
    "founded": 2013,
    "type": "state",
    "location": "Sikkim",
    "symbol": "Table lamp"
  },{
    "name": "Socialist Unity Centre of India (Communist)",
    "abbr": "SUCI(C)",
    "founded": "",
    "type": "",
    "location": "",
    "symbol": ""
  },{
    "name": "Telangana Rashtra Samithi",
    "abbr": "TRS",
    "founded": 2001,
    "type": "state",
    "location": "Telangana,Andhra Pradesh",
    "symbol": "Car"
  },{
    "name": "Telugu Desam Party",
    "abbr": "TDP",
    "founded": 1982,
    "type": "state",
    "location": "Andhra Pradesh, Telangana",
    "symbol": "Bicycle"
  },{
    "name": "United Democratic Party",
    "abbr": "UDP",
    "founded": 1972,
    "type": "state",
    "location": "Meghalaya",
    "symbol": "Drum"
  },{
    "name": "Yuvajana Sramika Rythu Congress Party",
    "abbr": "YSRCP",
    "founded": 2011,
    "type": "state",
    "location": "Andhra Pradesh, Telangana",
    "symbol": "Ceiling fan",
    "variations": {
        "name": ["YSR Congress Party"]
    }
  },{
    "name": "Zoram Nationalist Party",
    "abbr": "ZNP",
    "founded": 1997,
    "type": "state",
    "location": "Mizoram",
    "symbol": "Sun (without rays)"
  }];
  
  /**
  * The partyTime Class.
  * @returns {Object} The partyType Class Object.
  * @private
  */
  function partyTime(){
    this.convert = convert;
    this.getInfo = getInfo;
    this.getType = getType;
    this.meta = {
        parties_count: json.length,
        version: "2.1.0",
        last_updated: "August 18, 2017"
    }
  }

  // Dependencies: getInfo, getType
  /**
  * Converts a party abbreviation to its full name or vice versa. If the party entered is not found in the library, returns the party entered.
  * @param {string} party The party, either a full name or an abbrevation, to convert.
  * @param {Object} [options = {greedy: TRUE}] An Object specifying options for the conversion.
  * @param {Boolean} [options.greedy = TRUE] If `true`, the function does the conversion automatically and returns a string. If there is no match in the library, it will return the original string. If `false`, the function returns an object with the properties `abbr`, `name` and, when applicable, `variations`.
  * @param {string} [options.type = null] By default, the function will guess the type of the party string by matching it against the party names and abbreviations in the library. You can override this behavior and explicitly specify the type of party string by passing `"abbr"` or `"name"`.
  * @returns {(string|Object)} A string with the converted party or, if the conversion is not set to greedy, an Object with information about the party.
  * @example
  * pt.convert("BJP"); // "Bharatiya Janata Party"
  * pt.convert("BJP", { greedy: false }); // { abbr: "BJP", name: "Bharatiya Janata Party" }
  * pt.convert("BJP", { greedy: true }); // "Bharatiya Janata Party"
  * pt.convert("bjp"); // "Bharatiya Janata Party"
  * pt.convert("cpm", { greedy: false }); // { abbr: "CPI(M)", name: "Communist Party of India (Marxist)", variations: { abbr: ["CPM"] } }
  * pt.convert("Indian National Congress"); // "INC"
  * pt.convert("Not a real party"); // "Not a real party"
  * pt.convert("NARP"); // "NARP"
  * pt.convert("narp", { type: "abbr" }); // "NARP"
  * pt.convert("narp", { greedy: false, type: "name" }); // { name: "narp", warning: "No match in libary" }
  */
  function convert(party, options){

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

  // Dependencies: getType
  /**
  * Gets information about the party. If you do not specify a type in the second argument, it will guess the type.
  * @param {string} party The party, either a full name or an abbrevation, to get information about.
  * @param {string} [type = null] A type, which can be either "abbr" or "name". This is argument is optional. `party-time` usually can determine the type by itself, but you can declare it explicitly, just in case.
  * @returns {Object} An object with information about the party. If the party entered is not found in the library, returns an object containing the party name and a warning.
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
  function getInfo(party, type){
    
    type = type ? type : getType(party);

    party = type == "abbr" ? party.toUpperCase() : party;

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

  /**
  * Guesses whether the party string entered is an abbreviation or the full name. 
  * @param {string} party The party, either a full name or an abbrevation.
  * @returns {string} Returns "abbr" or "name".
  */
  function getType(party){

    var match = json.filter(function(d){

      return d.abbr == party.toUpperCase() || (d.variations && d.variations.abbr && d.variations.abbr.indexOf(party.toUpperCase()) !== -1)

    }).length > 0;

    return isAllCaps(party) || match ? "abbr" : "name";
  }

  /**
  * A utility function that is not exported with the module.
  * @param {string} x A string 
  * @returns {Boolean} Whether all the letters in the string entered are uppercase.
  * @private
  */
  function isAllCaps(x) {
    return x === x.toUpperCase();
  }

  return new partyTime();

}());


if (typeof window === "undefined") {
  module.exports = output;
} else {
  window.pt = output;
}