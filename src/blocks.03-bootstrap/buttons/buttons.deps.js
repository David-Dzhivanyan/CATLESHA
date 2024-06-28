module.exports = {
  mustDeps: [], // Стили свайпера должны подключаться раньше, чтобы сохранялась сетка бутстрапа
  shouldDeps: [
    {block: 'bootstrap'},
  ],
};