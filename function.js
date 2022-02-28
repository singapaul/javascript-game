


export const canMoveDown = () => {
  var canMoveFlag = true;
  for (var y = 0; y < world.length; y++) {
    for (var x = 0; x < world[y].length; x++) {
      // checking if the piece is a moveable piece i.e. 1-9
      if (world[y][x] > 0 && world[y][x] < 10) {
        // if theres a frozen piece in the next square or we are in the first column we can't move left. 
        if (y == ((world.length) - 1) || world[y + 1][x] > 10) {
          canMoveFlag = false;
          // we don't want to freeze the piece though, we might want to move it to the right
          freezePiece();
          return canMoveFlag;
        }
      }
    }
  }
  return canMoveFlag;
}


export const canMoveLeft = () => {
  var canMoveFlag = true;
  for (var y = 0; y < world.length; y++) {
    for (var x = 0; x < world[y].length; x++) {
      if (world[y][x] > 0 && world[y][x] < 10) {
        if (x === 0 || world[y][x - 1] > 10) {
          canMoveFlag = false;
          return canMoveFlag
        }
      }
    }
  }
  return canMoveFlag;
}



export const canMoveRight = () => {

  var canMoveFlag = true;
  for (var y = 0; y < world.length; y++) {
    for (var x = 0; x < world[y].length; x++) {
      // checking if the piece is a moveable piece i.e. 1-9
      if (world[y][x] > 0 && world[y][x] < 10) {
        // if theres a frozen piece in the next square or we are in the first column we can't move left. if the index of x = 9 OR the square to the right is > 10 
        if (x === 9 || world[y][x + 1] > 10) {
          canMoveFlag = false;
          return canMoveFlag;
          // we don't want to freeze the piece though, we might want to move it to the right
          // freezePiece();
        }
      }
    }
  }
  return canMoveFlag;
};


export const freezePiece = () => {
  for (var y = world.length - 1; y >= 0; y--) {
    for (var x = 0; x < world[y].length; x++) {
      if (world[y][x] > 0 && world[y][x] < 10) {
        world[y][x] += 10;
        newPiece();
      }
    }
  }
}

const freezePiece = () => {
  if (world[y][x] > 0 && world[y][x] < 10) {
    world[y][x] += 10};
    else {}