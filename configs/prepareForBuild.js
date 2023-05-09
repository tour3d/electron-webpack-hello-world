const fs = require('fs-extra');

//заменить главный js файл для сборки
const packageObj = fs.readJsonSync('./package.json');
packageObj.main = 'dist/main/index.js';
fs.writeJsonSync('./package.json', packageObj, { spaces: 2 });

// удалить папки перед сборкой
const deleteFolders = ['./dist', './build'];
deleteFolders.forEach((folder) => {
  if (fs.existsSync(folder)) {
    fs.removeSync(folder);
  }
});
