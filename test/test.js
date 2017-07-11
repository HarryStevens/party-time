"use strict";

var expect = require("chai").expect;
var pc = require("../lib/party-time.js");

console.log(pc);

describe("#partyConverter", function(){

	it("should convert an acronym to a party greedily", function(){
		var a = pc.convert("BJP");
		var a = pc.convert("BJP", true);
		expect(a).to.equal("Bharatiya Janata Party");
	});

	it("should convert an acronym to a party object", function(){
		var a = pc.convert("BJP", false);
		expect(a.abbr).to.equal("BJP");
		expect(a.name).to.equal("Bharatiya Janata Party");
	});

	it("should convert a party to an acronym greedily", function(){
		var a = pc.convert("Indian National Congress");
		expect(a).to.equal("INC");
	});

	it("should convert a party name to a party object", function(){
		var a = pc.convert("Indian National Congress", false);
		expect(a.name).to.equal("Indian National Congress");
		expect(a.abbr).to.equal("INC");
	});

	it("should take a third type argument", function(){
		var a = pc.convert("BJP", true, "abbr");
		var b = pc.convert("bjp", null, "abbr");
		expect(a).to.equal("Bharatiya Janata Party");
		expect(b).to.equal("Bharatiya Janata Party");
	});
	
	it("should return variations", function(){
		var a = pc.convert("Communist Party of India (Marxist)", false);
		expect(a.variations.abbr[0]).to.equal("CPM");
	});
	
});