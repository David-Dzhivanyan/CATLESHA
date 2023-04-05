const {createScss} = require('./utils')
const execSync = require('child_process').execSync;

build();

/**
 * Сборка иконок
 * @returns {Promise<void>}
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
    '--types woff';

  const output = await execSync(buildCommand, { encoding: 'utf-8' });
  console.log(output);
  createScss('src/blocks.01-base/fi/font', 'fi', 'src/blocks.01-base/fi/variables', './font');
}


