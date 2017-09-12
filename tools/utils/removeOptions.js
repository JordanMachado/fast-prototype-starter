// getFullFileName.js

'use strict';

module.exports = function removeOptions(filename) {
	return filename.replace(/{.*}/g, '');
}
