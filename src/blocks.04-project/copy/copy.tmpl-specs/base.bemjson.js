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
              {elem: 'copy-text', cls: 'text-uppercase', content: 'EQAK2J1WU9AuVYR2X_CwL_Tg_DfjFQf8LaRGN2kTLLNPV1Ww'},
              {block: 'fi', cls: 'd-none d-sm-block', mods: {icon: 'copy'}}
            ]},
          {block: 'btn', cls: 'btn-yellow text-uppercase', attrs: {href: 'https://t.me/catleshaton'}, content: 'JOIN OUR COMMUNITY TELEGRAM!'}
        ]}
    ]}
];