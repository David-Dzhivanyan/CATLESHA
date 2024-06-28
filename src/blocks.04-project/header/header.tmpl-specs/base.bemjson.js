module.exports = ({cls} = {}) => [
  {block: 'header', cls, content: [
      {cls: 'container', content: [
          {elem: 'inner', content: [
              {block: 'a', attrs: {href: '#'}, content: [
                  {block: 'img', src: './images/header/logo.png'}
                ]},
              {elem: 'nav', tag: 'nav', content: [
                  {block: 'a', attrs: {href: '#'}, content: 'about'},
                  {block: 'a', attrs: {href: '#'}, content: 'advantages'},
                  {block: 'a', attrs: {href: '#'}, content: 'socials'},
                ]},
              {elem: 'buttons', content: [
                  {block: 'btn', cls: 'btn-around btn-purple', content: [
                      {block: 'img', src: './images/header/tg.png'}
                    ]},
                  {block: 'btn', cls: 'btn-around btn-yellow', content: [
                      {block: 'img', src: './images/header/x.png'}
                    ]},
                  {block: 'btn', cls: 'btn-white text-uppercase', content: 'buy now'},
                ]}
            ]}
        ]}
    ]}
]; 