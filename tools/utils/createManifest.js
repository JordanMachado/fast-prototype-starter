const path 				= require('path');
const fs                = require('fs-extra');
const paths             = require('../paths');
const formatAssetsString = require('./formatAssetsString');
const removeOptions = require('./removeOptions')
function replace(str, pattern, strToReplace)  {
	return str.replace(new RegExp(pattern, 'g'), strToReplace);
}

module.exports = function createManifest(files, sourceDir, dir, fileName, type) {

	files = files.map((s)=> {
		return s.replace(sourceDir, `assets/${dir}`);
	});
	files = files.map((s)=> {
		return removeOptions(s);
	});
	const outputPath = path.resolve(paths.manifest, fileName);

  fs.ensureDir(path.resolve(paths.manifest), (err)=> {
    if(err) {
      console.log(err);
      return;
    }
    const strList = formatAssetsString(files, type)
    fs.readFile(path.resolve(__dirname, 'template.js'), 'utf8', (err, data) => {
      if(err) {
        console.log(err);
        return;
      }
      data = replace(data, '{{ASSETS}}', strList);
      fs.writeFile(outputPath, data, 'utf8', (err)=> {
        if(err) {
          console.log(err);
          return;
        }
        console.log(`Manifest ${fileName} updated`);
      });
    });

  });
}
