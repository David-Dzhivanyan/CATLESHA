import debounce from "lodash-es/debounce";

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
    window.addEventListener('mousemove', e => {
      this.block.style.left = e.pageX + 10 + 'px';
      this.block.style.top = e.pageY - 10 + 'px';
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

