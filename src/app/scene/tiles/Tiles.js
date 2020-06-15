class Tiles {
  constructor(sideLength, tileSize) {
    this.sideLength = sideLength;
    this.tileSize = tileSize;
    this.numTiles = sideLength ** 2;
  }

  static offsetsAreEqual(prev, next) {
    for (let i = 0; i < 9; i += 1) {
      for (let j = 0; j < 2; j += 1) {
        if (prev[i][j] !== next[i][j]) {
          return false;
        }
      }
    }
    return true;
  }

  getOffsets(x, y) {
    const tileX = Math.floor(x / this.tileSize) * this.tileSize;
    const tileY = Math.floor(y / this.tileSize) * this.tileSize;

    const newTiles = [];

    for (let i = -this.sideLength / 2; i < this.sideLength / 2; i += 1) {
      for (let j = -this.sideLength / 2; j < this.sideLength / 2; j += 1) {
        newTiles.push([tileX + (j + 0.5) * this.tileSize, tileY + (i + 0.5) * this.tileSize]);
      }
    }

    return newTiles;
  }
}

export default Tiles;
