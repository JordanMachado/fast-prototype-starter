// according to assets-loader {id,url,type}
module.exports = function formatAssetsString(mFiles, type) {
	let strList = Array.isArray(mFiles) ? JSON.stringify(mFiles) : mFiles;
	let manifest = [];
	for (var i = 0; i < mFiles.length; i++) {
		let id = mFiles[i].split(/(\\|\/)/g).pop().replace(/\.[^/.]+$/, "")
		let obj = {
			id,
			url: mFiles[i],
		}
		if(type) {
			obj.type = type;
		}
		manifest.push(obj);

	}
	// beautify JSON just for lisibility
	let json = JSON.stringify(manifest);
	json = json.replace('[', '[\n\t');
	json = json.replace(']', '\n]');
	json = json.replace(/{/g,'{\n\t');
	json = json.replace(/}/g,'\n\t}');
	json = json.replace(/,/g,',\n\t');

	return json;
}
