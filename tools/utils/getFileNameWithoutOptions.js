// getFullFileName.js

'use strict';

module.exports = function getFilenameWithoutOptions(filename) {
	return filename.replace(/{.*}/g, '');
}
