module.exports = {
  block: 'page',
  title: 'Пустая',
  content: [
    require('../blocks.04-project/header/header.tmpl-specs/base.bemjson')(),
    {cls: 'container', content: [
        require('../blocks.04-project/logo/logo.tmpl-specs/base.bemjson')({cls: 'mt-60'}),
        require('../blocks.04-project/line/line.tmpl-specs/base.bemjson')(),
        require('../blocks.04-project/copy/copy.tmpl-specs/base.bemjson')(),
        require('../blocks.04-project/about/about.tmpl-specs/base.bemjson')()
      ]},
    require('../blocks.04-project/footer/footer.tmpl-specs/base.bemjson')(),
    ],
};
