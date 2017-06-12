function NodeGame(name) {
    this.name = name;
    this.world = {
        width: 300,
        height: 300
    };
    this.positionX = 0;
    this.positionY = 0;
    this.player = {
        playerX: 0,
        playerY: 0
    };
}

NodeGame.prototype.InitWorld = function(name, width, height, positionX, positionY, player) {
    this.name = name;
    this.world = {
        width: width,
        height: height
    };
    this.positionX = positionX;
    this.positionY = positionY;
    this.player = player;
}

module.exports = new NodeGame('DEFAULT');