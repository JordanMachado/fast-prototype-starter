const fs = require('fs-extra');
const regex = new RegExp(/[0-9]+\.[0-9]+/,'g');

module.exports = function(file, ouputPath, options) {
	let obj = fs.readFileSync(file,'utf8');
	if (options) {
		const precision = options[0];
		function replacer(value) {
			const float = parseFloat(value).toFixed(precision);
			return float;
		}
		obj = obj.replace(regex,replacer);
	}

	fs.outputFile(ouputPath, obj, function(err) {
		if (err) { return console.log(err); }
		// console.log('Obj optimized');
	});
};
