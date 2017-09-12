const fs          = require('fs-extra');
const path        = require('path');
const paths       = require('./paths');
const dir         = require('node-dir');
const minifyJson  = require('./tasks/minifyJson');

dir.files(path.resolve(paths.source.json), (err, files) => {
  if (err) console.log(err);

  files = files.filter(function (file) {
  	return file.indexOf('.DS_Store') === -1;
  });
  	for (var i = 0; i < files.length; i++) {
  		const file = files[i];
  		minifyJson(file);
  	}
});
