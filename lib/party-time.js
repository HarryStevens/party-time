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
    "symbol": "Nagol"
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
    "name": "Hill State People's Democratic Party",
    "abbr": "HSPDP",
    "founded": 1968,
    "type": "state",
    "location": "Meghalaya",
    "symbol": "Lion"
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
    "symbol": "Inkpot and pen"
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
    "symbol": "Bunglow"
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
    "symbol": "Lion"
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
    "symbol": "Electric Bulb"
  },{
    "name": "Naga People's Front",
    "abbr": "NPF",
    "founded": 2002,
    "type": "state",
    "location": "Manipur, Nagaland",
    "symbol": "Cock"
  },{
    "name": "National People's Party",
    "abbr": "NPP",
    "founded": 2013,
    "type": "state",
    "location": "Meghalaya, Manipur",
    "symbol": "Book"
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
    "symbol": "Maize"
  },{
    "name": "People's Democratic Alliance",
    "abbr": "PDA",
    "founded": "",
    "type": "state",
    "location": "Manipur",
    "symbol": "Crown"
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
      "name": ["Shiv Sena"]
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
    "name": "YSR Congress Party",
    "abbr": "YSRCP",
    "founded": 2011,
    "type": "state",
    "location": "Andhra Pradesh, Telangana",
    "symbol": "Ceiling fan"
  },{
    "name": "Zoram Nationalist Party",
    "abbr": "ZNP",
    "founded": 1997,
    "type": "state",
    "location": "Mizoram",
    "symbol": "Sun (without rays)"
  }];
  
  function partyTime(){
    this.convert = convert;
    this.getInfo = getInfo;
    this.getType = getType;
  }

  function convert(party, options){

    // Should the conversion be greedy? Defaults to TRUE.
    // Dependencies: getInfo, getType
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

  // Get information about the party. If you do not specify a type in the second argument, it will guess the type.
  // Dependencies: getType
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

  // Guess the type of a party.
  function getType(party){

    var match = json.filter(function(d){

      return d.abbr == party.toUpperCase() || (d.variations && d.variations.abbr && d.variations.abbr.indexOf(party.toUpperCase()) !== -1)

    }).length > 0;

    return isAllCaps(party) || match ? "abbr" : "name";
  }

  // A utility function that is not exported with the module.
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