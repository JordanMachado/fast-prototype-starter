const path = require('path');

module.exports = function(basePath, file) {
	const fileName = path.basename(file);
	return file
	.replace(fileName,'')
	.replace(basePath, '')
	.replace('./', '');

};
