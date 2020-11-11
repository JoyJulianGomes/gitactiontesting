function beforeWrite() {
	let pj = require("package.json");
	let subdomain_name = process.argv[2];
	let folder_name = process.argv[3];
	let fs = require("fs");
	console.log("subdomain: ", subdomain_name);
	console.log("before adding homepage: ", pj.homepage);
	pj.homepage = subdomain_name + "/" + folder_name;
	console.log("homepage value: ", pj.homepage);
	let json = JSON.stringify(pj, null, 2);
	fs.writeFileSync("package.json", json)
}
function afterWrite() {
	console.log("added homepage to package.json");
	pj_after = require("package.json");
	console.log("after adding homepage:", pj_after.homepage);
	console.log("package.json", pj_after);
}
beforeWrite();
afterWrite();