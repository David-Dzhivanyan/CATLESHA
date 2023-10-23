const execSync = require('child_process').execSync;
const fs = require('fs');

build();

/**
 * Сборка иконок
 * @return {Promise<void>}
 */
async function build() {
  const buildCommand =
    'icon-font-generator src/blocks.01-base/fi/svg/*.svg ' +
    '-o src/blocks.01-base/fi/font ' +
    '--name fi ' +
    '-c true ' +
    '--html true ' +
    '--htmltp src/blocks.01-base/fi/templates/html.hbs ' +
    '--csstp src/blocks.01-base/fi/templates/css.hbs ' +
    '-p fi_icon ' +
    '--types woff2';

  const output = await execSync(buildCommand, {encoding: 'utf-8'});
  console.log(output);
  createScss('src/blocks.01-base/fi/font', 'fi', 'src/blocks.01-base/fi/variables');
}

// Создать SCSS файл с иконками
const createScss = async(output, iconName, fileFolder) => {
  console.log('START BUILD');
  let parseData = JSON.stringify(JSON.parse(fs.readFileSync(`${output}/${iconName}.json`)), null, '\t');
  parseData = parseData.replace(/({|})/g, '');
  parseData = parseData.replace(/\\\\/g, '\\');

  let styleData = `$icons: (${parseData}) !default;`;

  await fs.writeFileSync(`${fileFolder}.scss`, styleData);
  console.log('SCSS DONE');
};
