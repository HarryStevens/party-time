"use strict";

var fsz = require("fsz"),
	jz = require("jeezy");

var json = fsz.readJSON("data/parties.json");

module.exports.convert = function(party, greedy, type){
	greedy = greedy !== false ? true : false;

	if (type == "abbr"){
		party = party.toUpperCase();
	} else if (!type){
		type = jz.str.isAllCaps(party) ? "abbr" : "name";
	}

	var out =  json.filter(function(d){
		return d[type] == party;
	});

	return greedy ? out[0][type == "abbr" ? "name" : "abbr"] : out[0];
}