var io = require("indian-ocean"),
	jz = require("jeezy");

var parties = io.readDataSync("src/data/parties.json");

var pivot = jz.arr.pivot(parties, "name").filter(d => d.count > 1);

if (pivot.length > 0){
	console.log(pivot);
} else {
	console.log("No duplicate parties.");
}