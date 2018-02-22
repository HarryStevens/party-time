var io = require("indian-ocean"),
	jz = require("jeezy");

var parties = io.readDataSync("src/data/parties.json");

var pivot_abbr = jz.arr.pivot(parties, "abbr").filter(d => d.count > 1);
console.log(" ");
if (pivot_abbr.length > 0){
	console.log("Duplicate abbr:");
	console.log(pivot_abbr);
} else {
	console.log("No duplicate abbreviations.");
}

console.log(" ");

var pivot = jz.arr.pivot(parties, "name").filter(d => d.count > 1);

if (pivot.length > 0){
	console.log("Duplicate parties:");
	console.log(pivot);
} else {
	console.log("No duplicate parties.");
}

console.log(" ");

var keys = parties.map(party => {return {name: party.name, keys: Object.keys(party)}}).filter(k => k.keys.indexOf("name") == -1 || k.keys.indexOf("abbr") == -1);
if (keys.length > 0){
	console.log("Missing keys:")
	console.log(keys);
} else {
	console.log("All parties have name and abbr.");
}

console.log(" ");

var variations = [];

parties.forEach(party => {
	if (party.variations){
		if (party.variations.name){
			variations.push(party.variations.name);
		}

		if (party.variations.abbr){
			variations.push(party.variations.abbr);	
		}	
	}
	
});

var variations_not_arrays = variations.filter(d => !jz.arr.is(d))

if (variations_not_arrays.length > 0) {
	console.log("Variations not set in arrays:");
	console.log(variations_not_arrays);
} else {
	console.log("All variations are set in arrays.");
}

console.log(" ");

var variations_pivot = jz.arr.pivot(jz.arr.flatten(variations).map(d => { return {party: d}}), "party").filter(d => d.count > 1);
if (variations_pivot.length > 0){
	console.log("Duplicate variations:");
	console.log(variations_pivot);
} else {
	console.log("No duplicate variations.");
}

console.log(" ");