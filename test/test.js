"use strict";

var expect = require("chai").expect;
var pt = require("../lib/party-time.js");

describe("#partyConverter", function(){

	it("should guess the type of a party", function(){
		var a = pt.getType("BJP");
		var b = pt.getType("bjp");
		var c = pt.getType("cpm");
		var d = pt.getType("Indian National Congress");
		var e = pt.getType("Not a real party");
		var f = pt.getType("NARP");
		var g = pt.getType("narp");

		expect(a).to.equal("abbr");
		expect(b).to.equal("abbr");
		expect(c).to.equal("abbr");
		expect(d).to.equal("name");
		expect(e).to.equal("name");
		expect(f).to.equal("abbr");
		expect(g).to.equal("name");
	});

	it("should return information about a party", function(){
		var a = pt.getInfo("BJP");
		var b = pt.getInfo("bjp");
		var c = pt.getInfo("cpm");
		var d = pt.getInfo("Indian National Congress");
		var e = pt.getInfo("Not a real party");
		var f = pt.getInfo("NARP");
		var g = pt.getInfo("narp");
		var h = pt.getInfo("narp", "abbr");
		
		expect(a.name).to.equal("Bharatiya Janata Party");
		expect(b.name).to.equal("Bharatiya Janata Party");
		expect(c.name).to.equal("Communist Party of India (Marxist)");
		expect(d.abbr).to.equal("INC");
		expect(e.warning).to.equal("No match in library");
		expect(e.name).to.equal("Not a real party");
		expect(e.abbr).to.equal(undefined);
		expect(f.warning).to.equal("No match in library");
		expect(f.name).to.equal(undefined);
		expect(f.abbr).to.equal("NARP");
		expect(g.warning).to.equal("No match in library");
		expect(g.name).to.equal("narp");
		expect(g.abbr).to.equal(undefined);
		expect(h.warning).to.equal("No match in library");
		expect(h.name).to.equal(undefined);
		expect(h.abbr).to.equal("NARP");
	});

	it("should convert acronyms and parties greedily or not greedily", function(){
		var a = pt.convert("BJP", { greedy: false });
		var b = pt.convert("BJP");
		var c = pt.convert("BJP", { greedy: true });
		var d = pt.convert("bjp");
		var e = pt.convert("cpm");
		var f = pt.convert("Indian National Congress");
		var g = pt.convert("Not a real party");
		var h = pt.convert("NARP");
		var i = pt.convert("narp", { type: "abbr" });
		var j = pt.convert("narp", { greedy: false, type: "name" });
		
		expect(a.name).to.equal("Bharatiya Janata Party");
		expect(a.abbr).to.equal("BJP");
		expect(b).to.equal("Bharatiya Janata Party");
		expect(c).to.equal("Bharatiya Janata Party");
		expect(d).to.equal("Bharatiya Janata Party");
		expect(e).to.equal("Communist Party of India (Marxist)");
		expect(f).to.equal("INC");
		expect(g).to.equal("Not a real party");
		expect(h).to.equal("NARP");
		expect(i).to.equal("NARP");
		expect(j.name).to.equal("narp");
		expect(j.warning).to.equal("No match in library");
		
	});

	
});