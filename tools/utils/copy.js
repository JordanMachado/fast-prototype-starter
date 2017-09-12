const fs = require('fs-extra');
module.exports = function(source, dest, cb) {
	fs.copy(source, dest, function (err) {
		if (err) return console.error(err);
		if(cb)
		 cb();
	});
};
