
module.exports = function(mFolderPath) {

	const settings = {};

	if(mFolderPath.indexOf('{tps}') > -1) {
		settings.tps = true;
	}

	if(mFolderPath.indexOf('{manifest}') > -1) {
		settings.manifest = true;
	}

	if(mFolderPath.indexOf('{fix}') > -1) {
		settings.fix = true;
	}



	return settings;
}
