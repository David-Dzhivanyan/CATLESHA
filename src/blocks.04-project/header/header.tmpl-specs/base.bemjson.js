module.exports = ({cls} = {}) => [
  {block: 'header', cls, content: [
      {cls: 'container', content: [
          {elem: 'inner', content: [
              {block: 'a', cls: 'header__logo', attrs: {href: '#'}, content: [
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
                  {block: 'btn', cls: 'btn-white text-uppercase', attrs: {href: 'https://dedust.io/swap/TON/EQA5-G7djF86kQlspnEu4RI2HN-zgu81DcE_ap0yuA84fa1x?amount=1000000000'}, content: 'buy now'},
                ]}
            ]}
        ]}
    ]}
]; 