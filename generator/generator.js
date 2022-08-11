const fs = require('fs');
const glob = require('glob');

(function() {
  // define a root folder (parent of generator folder)
  const rootFolder = `${__dirname}/..`;

  // find all script.js extensions files
  glob("extensions/**/script.js", function (er, files) {
    console.log(files);

    files.forEach(one => {
      // read filds
      fs.readFile(`${rootFolder}/${one}`, 'utf8', (err, data) => {
        if (err) {
          console.error(err);
          return;
        }

        // version from https://meyerweb.com/eric/tools/dencoder/ + revering initial ':'
        const dataEncoded = encodeURIComponent(data)
          .replace(/'/g,"%27")
          .replace(/"/g,"%22")
          .replace('javascript%3A', 'javascript:');
        
        const minifiedFileName = one.replace('script.js', 'script.minified-new.js');
        fs.writeFile(`${rootFolder}/${minifiedFileName}`, dataEncoded, function(err) {
          if(err) {
            return console.log(err);
          }

        });
        // console.log(dataEncoded);
      });
    });
  });
})();


