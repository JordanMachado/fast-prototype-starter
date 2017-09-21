const fs 									= require('fs-extra');
const path 								= require('path');
const watcher 						= require('./watcher');
const convertAudio 				= require('./tasks/convertAudio');
const paths 							= require('./paths');
const getFileSubdirectory = require('./utils/getFileSubdirectory');
const cleanDir 						= require('./utils/cleanDir');
const checkExtension 			= require('./utils/checkExtension');


const sourceDir = path.resolve(paths.source.audio);
const destDir = path.resolve(paths.destination.audio);

const watcherAudio = watcher([ sourceDir ],
	{
		ignoreInitial: true
	}
);


watcherAudio.on('all',(event, file) => {
	if(event === 'unlink') {
		const sub = getFileSubdirectory(sourceDir , path.resolve(file));
		const ext = path.extname(file);
		const fileName = path.basename(file).replace(ext, '');

		fs.removeSync(`${paths.destination.audio}${sub}${fileName}.mp3`);
		fs.removeSync(`${paths.destination.audio}${sub}${fileName}.ogg`);

		if(checkExtension(file, '.wav')) {
			fs.removeSync(`${paths.destination.audio}${sub}${fileName}.wav`);
		}
		cleanDir(path.resolve(`${paths.destination.audio}${sub}`));

		return;
	}
	if (event !== 'change' && event !== 'add') return;
	if (file.indexOf('.DS_Store') > -1) return;

	if(checkExtension(file, ['.mp3', '.ogg', '.wav'])) {
		convertAudio(file , destDir);
	} else {
		// do nothing
	}

});
