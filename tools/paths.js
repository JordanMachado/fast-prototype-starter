// path.js
'use strict';

const sourcePath = './raw-assets/';
const absoluteSourcePath = 'raw-assets/';
const destPath = './dist/assets/';


module.exports = {
	source:
	{
		absolute: absoluteSourcePath,
		path: sourcePath,
		audio: sourcePath + 'audio',
		image: sourcePath + 'image',
		json: sourcePath + 'json',
		video: sourcePath + 'video',
		model: sourcePath + 'model'
	},
	destination:
	{
		path: destPath,
		audio: destPath + 'audio',
		image: destPath + 'image',
		json: destPath + 'json',
		video: destPath + 'video',
		model: destPath + 'model'

	},
	manifest: './src/scripts/manifests/'
};
