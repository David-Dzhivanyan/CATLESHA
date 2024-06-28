module.exports = ({cls} = {}) => [
  {block: 'logo', cls, content: [
      {elem: 'logo__bg', content: {}},
      {block: 'img', cls: '', src: './images/logo/bg.png'},
      {block: 'img', cls: 'logo__money m1', src: './images/logo/money.png'},
      {block: 'img', cls: 'logo__money m2', src: './images/logo/money.png'},
      {block: 'img', cls: 'logo__money m3', src: './images/logo/money.png'},
      {block: 'img', cls: 'logo__money m4', src: './images/logo/money.png'},
    ]}
];