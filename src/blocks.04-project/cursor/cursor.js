class Cursor {
  constructor(elem) {
    this.block = elem;
    this.block.Cursor = this;

    this.cursor();
    this.init();
  }
  init = () => {
    this.block.classList.add('cursor_inited');
  };
  cursor = () => {
    console.log(document.body.offsetWidth, this.block.offsetWidth);

    window.addEventListener('mousemove', e => {
      let x = e.pageX + 10;
      let y = e.pageY - 10;
      const width = this.block.offsetWidth;
      const bodyWidth = document.body.offsetWidth;
      const bodyHeight = document.body.offsetHeight;

      if (x + width > bodyWidth) {
        this.block.style.left = e.pageX - width + 'px';
      } else {
        this.block.style.left = e.pageX + 10 + 'px';
      }

      if (y + width > bodyHeight) {
        this.block.style.top = e.pageY - 10 - width + 'px';
      } else {
        this.block.style.top = e.pageY - 10 + 'px';
      }
    })
  }

  static init() {
    return Array.from(document.querySelectorAll('.cursor:not(.cursor_inited)')).forEach((elem) => new Cursor(elem));
  }
}

document.addEventListener('DOMContentLoaded', Cursor.init);

// Экспорт;
window.Block = window.Block ? window.Block : {};
window.Block.Cursor = Cursor;

