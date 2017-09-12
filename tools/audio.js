const fs          = require('fs-extra');
const path        = require('path');
const paths       = require('./paths');
const dir         = require('node-dir');
const convertAudio  = require('./tasks/convertAudio');

const destDir = path.resolve(paths.destination.audio);
const sourceDir = path.resolve(paths.source.audio);

const checkExtension 							= require('./utils/checkExtension');

fs.emptyDir(destDir, (err) => {
	if(err) {
		console.log(err);
		return;
	}
	processAudio();
});

function processAudio() {
  dir.files(sourceDir, (err, files) => {
    if (err) console.log(err);

    files = files.filter(function (file) {
    	return file.indexOf('.DS_Store') === -1;
    });
    	for (var i = 0; i < files.length; i++) {
    		const file = files[i];
        if(checkExtension(file, ['.mp3', '.ogg', '.wav'])) {
          convertAudio(file , destDir);
        } else {
          // do nothing
        }
    	}
  });

}
