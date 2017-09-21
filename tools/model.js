const fs 		  										= require('fs-extra');
const path 			    							= require('path');
const dir 												= require('node-dir');
const paths 											= require('./paths');
const checkExtension 							= require('./utils/checkExtension');
const optimize 										= require('./tasks/optimizeModel');
const copy 												= require('./utils/copy');
const getFileSubdirectory 				= require('./utils/getFileSubdirectory');
const getFileOptions   						= require('./utils/getFileOptions');
const removeOptions   						= require('./utils/removeOptions');
const createManifest							= require('./utils/createManifest');

const destDir = path.resolve(paths.destination.model);
const sourceDir = path.resolve(paths.source.model);


fs.emptyDir(destDir, (err) => {
	if(err) {
		console.log(`Error empty folder : ${destDir}`.red);
		return;
	}
	processObj();
});


function processObj() {
	dir.files(sourceDir, function(err, files) {
		if (err) throw err;
		files = files.filter(function (file) {
			return file.indexOf('.DS_Store') === -1;
		});

		for (var i = 0; i < files.length; i++) {
			const file = files[i];
			const options = getFileOptions(file);

			let fileName = removeOptions(path.basename(file));
		  let sub = getFileSubdirectory(path.resolve(paths.source.model), path.resolve(file));
			const outputPath = path.resolve(`${paths.destination.model}${sub}${fileName}`);

			if(checkExtension(file, '.obj')) {
				optimize(file, outputPath, options);
			} else {
				copy(file, outputPath);
			}
		}
		createManifest(files, sourceDir, 'model', 'manifest-model.js', 'binary');

	});

}
