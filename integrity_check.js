var io = require("indian-ocean"),
	jz = require("jeezy");

var parties = io.readDataSync("src/data/parties.json");

var pivot = jz.arr.pivot(parties, "name").filter(d => d.count > 1);

if (pivot.length > 0){
	console.log("Duplicate parties:");
	console.log(pivot);
} else {
	console.log("No duplicate parties.");
}

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

if (variations.every(d => jz.arr.is(d))) {
	console.log("All variations are set in arrays.");
} else {
	console.log("Variations not set in arrays:");
	console.log(variations.filter(d => !jz.arr.is(d)));
}

var variations_pivot = jz.arr.pivot(jz.arr.flatten(variations).map(d => { return {party: d}}), "party").filter(d => d.count > 1);
if (variations_pivot.length > 0){
	console.log("Duplicate variations:");
	console.log(variations_pivot);
} else {
	console.log("No duplicate variations.");
}