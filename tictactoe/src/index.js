const View = require("./ttt-view.js")
const Game = require("../solution/game.js") // require appropriate file

  $(() => {
    const g = new Game();
    const $figure = $('figure');
    const view = new View(g, $figure)
    // Your code here
  });
