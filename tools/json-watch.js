const fs 									= require('fs-extra');
const path 								= require('path');
const watcher 						= require('./watcher');
const minifyJson 				= require('./tasks/minifyJson');
const paths 							= require('./paths');
const getFileSubdirectory = require('./utils/getFileSubdirectory');
const cleanDir = require('./utils/cleanDir');


const sourceDir = path.resolve(paths.source.json);

const watcherJSON = watcher([ sourceDir ],
	{
		ignoreInitial: true
	}
);


watcherJSON.on('all',(event, file) => {
	if(event === 'unlink') {
		const sub = getFileSubdirectory(sourceDir , path.resolve(file));
		const fileName = path.basename(file);
		fs.removeSync(`${paths.destination.json}${sub}${fileName}`);
		cleanDir(path.resolve(`${paths.destination.json}${sub}`));

		return;
	}
	if (event !== 'change' && event !== 'add') return;
	if (file.indexOf('.DS_Store') > -1) return;

	minifyJson(file);

});
