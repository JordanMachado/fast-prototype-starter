const fs = require('fs-extra');

module.exports = function (dirname) {
  fs.readdir(dirname, function(err, files) {
      if (err) {
         // some sort of error
      } else {
         if (!files.length) {
            fs.rmdirSync(dirname);
         }
      }
  });
}
