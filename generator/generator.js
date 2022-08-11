const fs = require('fs').promises;
const glob = require('glob-promise');

async function converter() {
  // define a root folder (parent of generator folder)
  const rootFolder = `${__dirname}/..`;

  // find all script.js extensions files
  const files = await glob.promise("extensions/**/script.js");

  for (const one of files) {
    // read file
    const data = await fs.readFile(`${rootFolder}/${one}`, 'utf8');

    // encode data (version from https://meyerweb.com/eric/tools/dencoder/ + revering initial ':')
    const dataEncoded = encodeURIComponent(data)
      .replace(/'/g,"%27")
      .replace(/"/g,"%22")
      .replace('javascript%3A', 'javascript:');

    // convert file path
    const minifiedFilePath = one.replace('script.js', 'script.minified.js');

    // write encoded data to target file
    await fs.writeFile(`${rootFolder}/${minifiedFilePath}`, dataEncoded);
  }
}

converter().then(() => {
  console.log('\x1b[33m', 'Files converted');
}).catch(e => {
  console.log('\x1b[41m', `Error occurred ${e}`);
});


