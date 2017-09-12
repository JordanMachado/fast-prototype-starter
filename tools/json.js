const fs          = require('fs-extra');
const path        = require('path');
const paths       = require('./paths');
const dir         = require('node-dir');
const minifyJson  = require('./tasks/minifyJson');

const destDir = path.resolve(paths.destination.json);
const sourceDir = path.resolve(paths.source.json);

fs.emptyDir(destDir, (err) => {
	if(err) {
		console.log(err);
		return;
	}
	processJson();
});

function processJson() {
  dir.files(sourceDir, (err, files) => {
    if (err) console.log(err);

    files = files.filter(function (file) {
    	return file.indexOf('.DS_Store') === -1;
    });
    	for (var i = 0; i < files.length; i++) {
    		const file = files[i];
    		minifyJson(file);
    	}
  });

}
