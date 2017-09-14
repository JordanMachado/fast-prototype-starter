// convert-audio.js
const fs = require('fs-extra')

const ffmpeg            = require('fluent-ffmpeg');
const path             = require('path');
const paths             = require('../paths');
const checkExtension             = require('../utils/checkExtension');
const getFileSubdirectory       = require('../utils/getFileSubdirectory');
const copy = require('../utils/copy');
const MP3_BITRATE          = 128;
const MP3_CHANNELS         = 2;

function mp3(mSource, bitrate, channels, mDestDir, subdir) {
	const ext = path.extname(mSource);
	const fileName = path.basename(mSource).replace(ext, '');
	const outputPath = `${mDestDir}${subdir}${fileName}.mp3` ;
	const command = ffmpeg(mSource).audioBitrate(bitrate + 'k').audioChannels(channels).audioCodec('libmp3lame');

	command.save(outputPath);

	return outputPath;
}

function ogg(mSource, mDestDir, subdir) {
  const ext = path.extname(mSource);
	const fileName = path.basename(mSource).replace(ext, '');
	const outputPath = `${mDestDir}${subdir}${fileName}.ogg` ;
	const command = ffmpeg(mSource).audioChannels(2).audioCodec('libvorbis');
	command.save(outputPath);

	return outputPath;
}


function convertAudio(mSource, mDestDir) {
	// console.log(`Converting audio:${mSource}`);
	const subdir = getFileSubdirectory(path.resolve(paths.source.audio),path.resolve(mSource));
	if(subdir) {
		fs.mkdirs(`${paths.destination.audio}${subdir}`);
	}
	if(checkExtension(mSource, '.wav')) {
    console.log('ccc');
		const fileName = path.basename(mSource);
		const outputPath = `${mDestDir}${subdir}${fileName}` ;
		fs.copy(mSource, outputPath);
	}
  //
	mp3(mSource, MP3_BITRATE, MP3_CHANNELS, mDestDir , subdir);
	ogg(mSource, mDestDir, subdir);
}


module.exports = convertAudio;
