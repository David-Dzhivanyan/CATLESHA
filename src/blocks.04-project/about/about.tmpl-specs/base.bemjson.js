module.exports = ({cls} = {}) => [
  {block: 'about', cls, content: [
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
                          'Lorem ipsum dolor sit amet, consectetur adipiscing elit, Lorem ipsum dolomet, consectetur adio Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do Lorem ipsum dolor sit amet',
                        ]},
                      {elem: 'buttons', content: [
                          {block: 'btn', cls: 'btn-yellow', content: 'buy now'},
                          {block: 'btn', cls: 'btn-yellow', content: 'chart'},
                        ]},
                    ]}
                ]}
            ]}
        ]},
    ]}
];