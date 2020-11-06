let subdomain_name = process.argv[2];
let folder_name = process.argv[3];
let pj = require("../../package.json");
let fs = require("fs");
console.log("before adding homepage:", pj.homepage);
pj.homepage = subdomain_name+"/"+folder_name;
let json = JSON.stringify(pj, null, 2);
fs.writeFile("../../package.json", json, "utf-8", () => {
	console.log("added homepage to package.json");
});
pj = require("../../package.json");
console.log("after adding homepage:", pj.homepage);
console.log("package.json", pj);
