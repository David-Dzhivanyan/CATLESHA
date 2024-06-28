module.exports = ({cls} = {}) => [
  {block: 'about', cls, attrs: {id: 'about'}, content: [
      {cls: 'container', content: [
          {block: 'img', cls: 'd-none d-sm-block', src: './images/about/bg.png'},
          {elem: 'inner', content: [
              {elem: 'title', content: [
                  {elem: 'what-is', content: [
                      {block: 'img', src: './images/about/what-is.png'},
                    ]},
                  {elem: 'cat-lesha', content: [
                      {block: 'img', src: './images/about/cat-lesha.png'},
                    ]},
                ]},
              {elem: 'body', content: [
                  {block: 'img', src: './images/about/lesha.png'},
                  {elem: 'description', content: [
                      {elem: 'text', content: [
                          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in vo',
                        ]},
                      {elem: 'buttons', content: [
                          {block: 'btn', cls: 'btn-yellow', attrs: {href: 'https://dedust.io/swap/TON/EQA5-G7djF86kQlspnEu4RI2HN-zgu81DcE_ap0yuA84fa1x?amount=1000000000'}, content: 'buy now'},
                          {block: 'btn', cls: 'btn-yellow', attrs: {href: 'https://www.geckoterminal.com/ton/pools/EQAK2J1WU9AuVYR2X_CwL_Tg_DfjFQf8LaRGN2kTLLNPV1Ww'}, content: 'chart'},
                        ]},
                    ]}
                ]}
            ]}
        ]},
    ]}
];