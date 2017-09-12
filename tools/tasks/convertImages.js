const path 			    							= require('path');
const getFileSubdirectory 				= require('../utils/getFileSubdirectory');
const paths 											= require('../paths');

const getFileOptions = require('../utils/getFileOptions');
const getFolderSettings = require('../utils/getFolderSettings')
const removeOptions = require('../utils/removeOptions')
const copy = require('../utils/copy')
module.exports = function(file, sourceDir, destDir) {


  let fileWithoutOptions = removeOptions(file)
  let fileName = path.basename(fileWithoutOptions);
	let sub = getFileSubdirectory(sourceDir, path.resolve(fileWithoutOptions));
	const outputPath = path.resolve(`${paths.destination.image}${sub}${fileName}`);

  copy(file, outputPath);

};
