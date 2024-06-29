module.exports = ({cls} = {}) => [
  {block: 'copy', cls, attrs: {id: 'contract'}, content: [
      {elem: 'inner', content: [
          {elem: 'handle', content: [
              {block: 'img', src: './images/copy/handle.png'},
            ]},
          {elem: 'bag', content: [
              {block: 'img', src: './images/copy/bag.png'},
            ]},
          {cls: 'text-uppercase', content: 'contract address'},
          {elem: 'copy', content: [
              {elem: 'copy-text', cls: 'text-nowrap text-uppercase', content: 'EQA5-G7djF86kQlspnEu4RI2HN-zgu81DcE_ap0yuA84fa1x'},
              {block: 'fi', cls: 'd-none d-sm-block', mods: {icon: 'copy'}}
            ]},
          {block: 'btn', cls: 'btn-yellow text-uppercase', attrs: {href: 'https://t.me/catleshaton'}, content: 'JOIN OUR COMMUNITY TELEGRAM!'}
        ]},
      {block: 'img', cls: 'copy__money m1', src: './images/logo/money.png'},
      {block: 'img', cls: 'copy__money m2', src: './images/logo/money.png'},
      {block: 'img', cls: 'copy__money m3', src: './images/logo/money.png'},
    ]}
];