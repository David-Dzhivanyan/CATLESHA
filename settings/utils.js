const fs = require('fs');
const path = require('path');

// Вернуть пути ко всем файлам в дирректории
const getAllFilesInPathSync = (src, files = [], recursive = true) => {
  fs.readdirSync(src).forEach((file) => {
    let name = path.join(src, file);
    if (fs.statSync(name).isDirectory()) {
      if (recursive) {
        getAllFilesInPathSync(name, files);
      }
    } else {
      files.push(name);
    }
  });
  return files;
};

// Вернуть пути ко всем файлам в дирректории
const getAllDirectoriesInPathSync = (src, files = [], recursive = true) => {
  fs.readdirSync(src).forEach((file) => {
    let name = path.join(src, file);
    if (fs.statSync(name).isDirectory()) {
      if (recursive) {
        files.push(name);
        getAllDirectoriesInPathSync(name, files);
      }
    }
  });
  return files;
};

// Создать SCSS файл с иконками
const createScss = async (output, iconName, fileFolder, fontFolder) => {
  console.log('START BUILD')
  let parseData = JSON.stringify(JSON.parse(fs.readFileSync(`${output}/${iconName}.json`)), null, '\t');
  parseData = parseData.replace(/({|})/g, '');
  parseData = parseData.replace(/\\\\/g, '\\');
  let styleData =
    `$icons-font-folder: "${fontFolder}" !default;
$icons: (${parseData}) !default;`;

  await fs.writeFileSync(`${fileFolder}.scss`, styleData);
  console.log('SCSS DONE');
}

module.exports = {
  getAllFilesInPathSync,
  getAllDirectoriesInPathSync,
  createScss,
};
