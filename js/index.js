const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d');




window.onload = () => {
  document.getElementById('start-button').onclick = () => {
    startGame();
  };

  function startGame() {}
};

const game = new Game(ctx)
game.start()
