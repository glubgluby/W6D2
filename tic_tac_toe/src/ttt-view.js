class View {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;
    this.setupBoard();
    this.turn = 0;
    this.key = ['X', 'O'];
    this.bindEvents();

  }

  bindEvents() {

    $('ul').on('click','li',(e)=>{
      const $e = $(e.currentTarget);
//"X placed"
      if($e.attr("class").slice() === "placed"){
        alert("Invalid move! Try again!");
      } else {
        if (!this.game.isOver()) {
          this.makeMove($e);
          if (this.game.isOver()) {
            $('li').css("background", "white")
            $(`.${this.game.winner().toUpperCase()}`).css({"background":"green","color": "white"});
            $('body').append(`<footer> ${this.game.winner().toUpperCase()} Wins! </footer>`)
          }
        }
      }
    })
  }

  makeMove($e) {
    $e.css("background", "white");
    $e.text(this.key[this.turn % 2]);
    $e.addClass(this.key[this.turn % 2]);
    $e.addClass("placed");
    this.turn += 1;
    this.game.playMove([parseInt($e.attr('id')[0]), parseInt($e.attr('id')[1])])
  }

  setupBoard() {
    this.$el.append('<ul>');
    let $ul = $('ul')
    $ul.css({"display":"flex", "flex-wrap":"wrap"});
    for (let i = 0; i < 9; i++) {
      let j = Math.floor(i / 3);
      let c = i % 3;
      $ul.append(`<li id="${j}${c}" class="">`);
    }

  }
}

module.exports = View;
