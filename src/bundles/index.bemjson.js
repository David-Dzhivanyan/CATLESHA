module.exports = {
  block: 'page',
  title: 'Пустая',
  content: [
    require('./common/header.bemjson'),
    {cls: 'container', content: [
        {block: 'image', mods: {size: '1200x200'}, cls: 'text-center align-middle', content: [
            {block: 'img', attrs: {lazy: true}, src: 'https://placehold.co/1200x200' },
          ]},
      ]},
    require('./common/footer.bemjson'),
    ],
};
