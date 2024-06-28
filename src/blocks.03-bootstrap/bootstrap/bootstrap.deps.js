module.exports = {
  mustDeps: [{block: 'swiper'}], // Стили свайпера должны подключаться раньше, чтобы сохранялась сетка бутстрапа
  shouldDeps: [
    {block: 'type'},
    {block: 'buttons'}
  ],
};
