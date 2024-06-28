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
                          'Meet Lesha, the cat who\'s taking the internet by storm! This adorable furball has not only melted hearts on TikTok but also landed a starring role in a Netflix movie. Lesha might be a bit of a messy mischief-maker (his owner claims he\'s the dirtiest cat ever!), but his playful energy and undeniable cuteness win everyone over. Lesha\'s even inspired his own meme token on the ton blockchain - talk about pawsome fame!',
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