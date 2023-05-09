const fs = require('fs-extra');

const packageObj = fs.readJsonSync('./package.json');
packageObj.main = 'src/main/index.js';
fs.writeJsonSync('./package.json', packageObj, { spaces: 2 });