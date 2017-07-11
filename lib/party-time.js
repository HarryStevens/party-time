"use strict";

var output = (function () {

  var json = [{
    "abbr": "AAP",
    "name": "Aam Aadmi Party"
  },{
    "abbr": "AIADMK",
    "name": "All India Anna Dravida Munnetra Kazhagam"
  },{
    "abbr": "AIFB",
    "name": "All India Forward Bloc"
  },{
    "abbr": "AITC",
    "name": "All India Trinamool Congress"
  },{
    "abbr": "AIMIM",
    "name": "All India Majlis-e-Ittehadul Muslimeen",
    "variations": {
      "name": ["All India Majlis-E-Ittehadul Muslimeen"]
    }
  },{
    "abbr": "AIUDF",
    "name": "All India United Democratic Front"
  },{
    "abbr": "BJP",
    "name": "Bharatiya Janata Party"
  },{ 
    "abbr": "BSP",
    "name": "Bahujan Samaj Party"
  },{
    "abbr": "CPI",
    "name": "Communist Party of India"
  },{
    "abbr": "CPI(M)",
    "name": "Communist Party of India (Marxist)",
    "variations": {
      "abbr": ["CPM"]
    }
  },{
    "abbr": "CPI(ML)(L)",
    "name": "Communist Party of India (Marxist-Leninist) (Liberation)"
  },{
    "abbr": "DMK",
    "name": "Dravida Munnetra Kazhagam"
  },{
    "abbr": "INC",
    "name": "Indian National Congress"
  },{
    "abbr": "IND",
    "name": "Independent"
  },{
    "abbr": "IUML",
    "name": "Indian Union Muslim League"
  },{
    "abbr": "JD(U)",
    "name": "Janata Dal (United)"
  },{
    "abbr": "JKNPP",
    "name": "Jammu & Kashmir National Panthers Party"
  },{
    "abbr": "NCP",
    "name": "Nationalist Congress Party"
  },{
    "abbr": "PMK",
    "name": "Pattali Makkal Katchi"
  },{
    "abbr": "RLD",
    "name": "Rashtriya Lok Dal"
  },{
    "abbr": "RPI",
    "name": "Republican Party of India"
  },{
    "abbr": "RPI(A)",
    "name": "Republican Party of India (A)"
  },{
    "abbr": "SAD",
    "name": "Shiromani Akali Dal"
  },{
    "abbr": "SHS",
    "name": "Shivsena",
    "variations": {
      "name": ["Shiv Sena"]
    }
  },{
    "abbr": "SP",
    "name": "Samajwadi Party"
  },{
    "abbr": "SUCI(C)",
    "name": "Socialist Unity Centre of India (Communist)"
  },{
    "abbr": "TDP",
    "name": "Telugu Desam Party"
  },{
    "abbr": "TRS",
    "name": "Telangana Rashtra Samithi"
  },{
    "abbr": "UKD",
    "name": "Uttarakhand Kranti Dal"
  },{
    "abbr": "LJP",
    "name": "Lok Jan Shakti Party"
  }];
  
  function partyTime(){
    this.convert = convert;
  }

  function convert(party, greedy, type){
    greedy = greedy !== false ? true : false;

    if (type == "abbr"){
      party = party.toUpperCase();
    } else if (!type){
      type = isAllCaps(party) ? "abbr" : "name";
    }

    var out = json.filter(function(d){
      return d[type] == party || (d.variations && d.variations[type] && d.variations[type].indexOf(party) != -1);
    });

    // in case we don't have that party
    out = out.length == 0 ? party : out;

    return greedy ? out[0][type == "abbr" ? "name" : "abbr"] : out[0];

  }

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