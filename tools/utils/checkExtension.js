// checkExtension.js

'use strict';

const path = require('path');

module.exports = function checkExtension(mFile, mExtensions) {
	if(mExtensions.length == 0) {
		return true;
	}
	let extensions;
	if(!mExtensions.concat) {
		extensions = [mExtensions];
	} else {
		extensions = mExtensions.concat();
	}
	const ext = path.extname(mFile);
	return mExtensions.indexOf(ext) > -1;
}
