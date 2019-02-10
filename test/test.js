var tape = require("tape"),
		pt = require("../");

tape("should return meta information", function(test){
	var meta = pt.meta;
	test.equal(Object.keys(meta).length, 3);

	test.end();
});

tape("should guess the type of a party", function(test){
	var a = pt.getType("BJP");
	var b = pt.getType("bjp");
	var c = pt.getType("cpm");
	var d = pt.getType("Indian National Congress");
	var e = pt.getType("Not a real party");
	var f = pt.getType("NARP");
	var g = pt.getType("narp");

	test.equal(a, "abbr");
	test.equal(b, "abbr");
	test.equal(c, "abbr");
	test.equal(d, "name");
	test.equal(e, "name");
	test.equal(f, "abbr");
	test.equal(g, "name");

	test.end();
});

tape("should return information about a party", function(test){
	var a = pt.getInfo("BJP");
	var b = pt.getInfo("bjp");
	var c = pt.getInfo("cpm");
	var d = pt.getInfo("Indian National Congress");
	var e = pt.getInfo("Not a real party");
	var f = pt.getInfo("NARP");
	var g = pt.getInfo("narp");
	var h = pt.getInfo("narp", "abbr");
	
	test.equal(a.name, "Bharatiya Janata Party");
	test.equal(b.name, "Bharatiya Janata Party");
	test.equal(c.name, "Communist Party of India (Marxist)");
	test.equal(d.abbr, "INC");
	test.equal(e.warning, "No match in library");
	test.equal(e.name, "Not a real party");
	test.equal(e.abbr, undefined);
	test.equal(f.warning, "No match in library");
	test.equal(f.name, undefined);
	test.equal(f.abbr, "NARP");
	test.equal(g.warning, "No match in library");
	test.equal(g.name, "narp");
	test.equal(g.abbr, undefined);
	test.equal(h.warning, "No match in library");
	test.equal(h.name, undefined);
	test.equal(h.abbr, "narp");

	test.end();
});

tape("should convert acronyms and parties greedily or not greedily", function(test){
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
	var k = pt.convert("SHS");
	
	test.equal(a.name, "Bharatiya Janata Party");
	test.equal(a.abbr, "BJP");
	test.equal(b, "Bharatiya Janata Party");
	test.equal(c, "Bharatiya Janata Party");
	test.equal(d, "Bharatiya Janata Party");
	test.equal(e, "Communist Party of India (Marxist)");
	test.equal(f, "INC");
	test.equal(g, "Not a real party");
	test.equal(h, "NARP");
	test.equal(i, "narp");
	test.equal(j.name, "narp");
	test.equal(j.warning, "No match in library");
	test.equal(k, "Shivsena");

	test.end();
});