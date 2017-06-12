var game = require('./game-lib');

var player1 = {
    playerX: 10,
    playerY: 20
}

game.InitWorld('Skyrim', 300, 300, 0, 0, player1);

console.log(game);