module.exports = {
    block: 'page',
    title: 'Пустая',
    content: [
        require('./common/header.bemjson'),
        {cls: 'container', content: [
                {block: 'img', mods: {lazy: true}, src: 'http://place-hold.it/1200x200'},
                {block: 'img', mods: {lazy: true}, src: 'http://place-hold.it/1200x200'},
                {block: 'img', mods: {lazy: true}, src: 'http://place-hold.it/1200x200'},
            ]},
        require('./common/footer.bemjson'),
    ],
};
