var io = require("indian-ocean"),
  	jz = require("jeezy");

var json = io.readDataSync("src/data/parties.json");

io.writeDataSync("src/data/parties.json", jz.arr.sortBy(json, "name"), {indent: 2});