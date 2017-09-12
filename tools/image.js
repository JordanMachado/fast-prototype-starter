const fs          = require('fs-extra');
const path        = require('path');
const paths       = require('./paths');
const dir         = require('node-dir');
const convertImages  = require('./tasks/convertImages');

const sourceDir = path.resolve(paths.source.image);
const destDir = path.resolve(paths.destination.image);

fs.emptyDir(destDir, (err) => {
	if(err) {
		console.log(err);
		return;
	}
	processImages();
});

function processImages() {
  dir.files(sourceDir, (err, files) => {
    if (err) console.log(err);
    console.log(files);

    files = files.filter(function (file) {
    	return file.indexOf('.DS_Store') === -1;
    });
    	for (var i = 0; i < files.length; i++) {
    		const file = files[i];
    		convertImages(file, sourceDir, destDir);
    	}
  });

}
