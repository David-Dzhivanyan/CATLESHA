module.exports = ({cls} = {}) => [
  {block: 'footer', cls, attrs: {id: 'socials'}, content: [
      {cls: 'container', content: [
          {elem: 'inner', content: [
              {block: 'a', cls: 'footer__logo', attrs: {href: '#'}, content: [
                  {block: 'img', src: './images/header/logo.png'}
                ]},
              {elem: 'nav', tag: 'nav', content: [
                  {block: 'a', attrs: {href: '#about'}, content: 'about'},
                  {block: 'a', attrs: {href: '#contract'}, content: 'contract'},
                  {block: 'a', attrs: {href: '#socials'}, content: 'socials'},
                ]},
              {elem: 'buttons', content: [
                  {block: 'btn', cls: 'btn-around btn-purple', attrs: {href: 'https://t.me/catleshaton'}, content: [
                      {block: 'img', src: './images/header/tg.png'}
                    ]},
                  {block: 'btn', cls: 'btn-around btn-yellow', attrs: {href: 'https://x.com/leshaonton'}, content: [
                      {block: 'img', src: './images/header/x.png'}
                    ]},
                ]}
            ]}
        ]},
      {elem: 'under', content: '© 2024 CAT LESHA Token. All Rights Reserved.'}
    ]}
]; 