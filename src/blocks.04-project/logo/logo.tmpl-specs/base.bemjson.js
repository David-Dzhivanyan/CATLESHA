module.exports = ({cls} = {}) => [
  {block: 'logo', cls, content: [
      {block: 'img', cls: 'd-block d-md-none', src: './images/logo/logo-bg.png'},
      {block: 'img', cls: 'd-none d-md-block', src: './images/logo/bg.png'},
      {block: 'img', cls: 'logo__money m1', src: './images/logo/money.png'},
      {block: 'img', cls: 'logo__money m2', src: './images/logo/money.png'},
      {block: 'img', cls: 'logo__money m3', src: './images/logo/money.png'},
      {block: 'img', cls: 'logo__money m4', src: './images/logo/money.png'},
    ]}
];