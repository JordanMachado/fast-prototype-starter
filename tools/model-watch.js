
const fs 		  										= require('fs-extra');
const path 			    							= require('path');
const dir 												= require('node-dir');
const paths 											= require('./paths');
const checkExtension 							= require('./utils/checkExtension');
const optimize 										= require('./tasks/optimizeModel');
const copy 												= require('./utils/copy');
const getFileSubdirectory 				= require('./utils/getFileSubdirectory');
const getFileOptions   						= require('./utils/getFileOptions');
const removeOptions   = require('./utils/removeOptions');
const cleanDir 										= require('./utils/cleanDir');
const watcher 										= require('./watcher');


const sourceDir = path.resolve(paths.source.model);

const watcherModel = watcher([ sourceDir ],
	{
		ignoreInitial: true
	}
);


watcherModel.on('all',(event, file) => {
	if(event === 'unlink') {
		const sub = getFileSubdirectory(sourceDir , path.resolve(file));
		const fileName = removeOptions(path.basename(file));
		fs.removeSync(`${paths.destination.model}${sub}${fileName}`);
		cleanDir(path.resolve(`${paths.destination.model}${sub}`));
		return;
	}
	if (event !== 'change' && event !== 'add') return;
	if (file.indexOf('.DS_Store') > -1) return;

	let fileName = removeOptions(path.basename(file));
	let sub = getFileSubdirectory(path.resolve(paths.source.model), path.resolve(file));
	const outputPath = path.resolve(`${paths.destination.model}${sub}${fileName}`);
	const options = getFileOptions(file);

	console.log(fileName,sub,outputPath);
	if(checkExtension(file, '.obj')) {
		optimize(file, outputPath, options);
	} else {
		copy(file, outputPath);
	}

});
