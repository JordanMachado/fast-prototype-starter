module.exports = function(fileName) {

	let options = fileName.match(/{[0-9]}*/g);
	if(options) {
		for(var i=0; i < options.length; i++) {
			options[i] = options[i].replace(/{|}/g, '');
		}
	}
	return options;
};
