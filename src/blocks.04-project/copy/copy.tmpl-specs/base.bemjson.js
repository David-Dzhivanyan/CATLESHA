module.exports = ({cls} = {}) => [
  {block: 'copy', cls, content: [
      {elem: 'inner', content: [
          {elem: 'handle', content: [
              {block: 'img', src: './images/copy/handle.png'},
            ]},
          {elem: 'bag', content: [
              {block: 'img', src: './images/copy/bag.png'},
            ]},
          {cls: 'text-uppercase', content: 'contract address'},
          {elem: 'copy', content: [
              {elem: 'copy-text', cls: 'text-uppercase', content: '0x0781694823f34e3bcbc8192e668960cc96163eb7'},
              {block: 'img', cls: 'd-none d-sm-block', src: './images/copy/copy.png'},
            ]},
          {block: 'btn', cls: 'btn-yellow text-uppercase', content: 'JOIN PRESALE RIGHT NOW!!!'}
        ]}
    ]}
];