"use strict";

console.log("hello"); //const gameGridArea = document.querySelector(".gameContainer__gameGrid")
// The world is an 18x10 grid with a 4x10 grid on top of it build as a staging area;

var newGameButton = document.querySelector("#newGameButton");
console.log(newGameButton);

var newGameFunction = function newGameFunction() {
  alert("HI");
};

newGameButton.addEventListener("press", newGameFunction);
var score = "";
var world = [[0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 1, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0], [0, 0, 0, 11, 0, 0, 0, 0, 0, 0]];

var drawWorld = function drawWorld() {
  document.getElementById("world").innerHTML = ""; // staging area 

  for (var y = 0; y < 4; y++) {
    for (var x = 0; x < world[y].length; x++) {
      if (world[y][x] === 0) {
        document.getElementById("world").innerHTML += "<div class=staging></div>";
      } else {
        document.getElementById("world").innerHTML += "<div class=squareShape></div>";
      }
    }
  } // main game area 


  for (var y = 4; y < world.length; y++) {
    for (var x = 0; x < world[y].length; x++) {
      if (world[y][x] === 0) {
        document.getElementById("world").innerHTML += "<div class='empty'></div>";
      } else if (world[y][x] == 1 || world[y][x] == 11) {
        document.getElementById("world").innerHTML += "<div class='squareShape'>1</div>";
      } else if (world[y][x] == 2 || world[y][x] == 12) {
        document.getElementById("world").innerHTML += "<div class='lineShape'>2</div>";
      } else if (world[y][x] == 3 || world[y][x] == 13) {
        document.getElementById("world").innerHTML += "<div class='elShape'>3</div>";
      } else if (world[y][x] == 4 || world[y][x] == 14) {
        document.getElementById("world").innerHTML += "<div class='arShape'>4</div>";
      } else if (world[y][x] == 5 || world[y][x] == 15) {
        document.getElementById("world").innerHTML += "<div class='tShape'>5</div>";
      } else if (world[y][x] == 6 || world[y][x] == 16) {
        document.getElementById("world").innerHTML += "<div class='sShape'>6</div>";
      } else if (world[y][x] == 7 || world[y][x] == 17) {
        document.getElementById("world").innerHTML += "<div class='zShape'>7</div>";
      } else {
        document.getElementById("world").innerHTML += "<div class='squareShape'></div>";
      }
    } // squareShape.style.transform = 'rotate(90deg)';
    // squareShape.addEventListener('keydown', () => {
    //   rotatePiece(squareShape);
    // });

  }
}; // generate new piece function 


var newPiece = function newPiece() {
  // Generates number between 1 and 17
  var pieceNum = Math.floor(Math.random() * 17); // square shape

  if (pieceNum == 1) {
    // console.log('square created');
    // let square = `<div class="square">
    //     <div class="square__item"></div>
    //     <div class="square__item"></div>
    //     <div class="square__item"></div>
    //     <div class="square__item"></div>
    // </div>`
    // gameGridArea.innerHTML += square;
    // let squareShape = document.querySelector('.square');
    // squareShape.style.gridColumn = 3;
    // squareShape.style.gridRow = 2;
    // const rotatePiece = () => {
    //   squareShape.style.transform = 'rotate(90deg)';
    // }
    // squareShape.addEventListener('keydown', rotatePiece)
    world[0] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    world[1] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    world[2] = [0, 0, 0, 0, 1, 1, 0, 0, 0, 0];
    world[3] = [0, 0, 0, 0, 1, 1, 0, 0, 0, 0];
  } else if (pieceNum == 2) {
    world[0] = [0, 0, 0, 0, 2, 0, 0, 0, 0, 0];
    world[1] = [0, 0, 0, 0, 2, 0, 0, 0, 0, 0];
    world[2] = [0, 0, 0, 0, 2, 0, 0, 0, 0, 0];
    world[3] = [0, 0, 0, 0, 2, 0, 0, 0, 0, 0];
  } else if (pieceNum == 3) {
    world[0] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    world[1] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    world[2] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    world[3] = [0, 0, 0, 2, 2, 2, 2, 0, 0, 0];
  } else if (pieceNum == 4) {
    world[0] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    world[1] = [0, 0, 0, 0, 3, 0, 0, 0, 0, 0];
    world[2] = [0, 0, 0, 0, 3, 0, 0, 0, 0, 0];
    world[3] = [0, 0, 0, 0, 3, 3, 0, 0, 0, 0];
  } else if (pieceNum == 5) {
    world[0] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    world[1] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    world[2] = [0, 0, 0, 3, 3, 3, 0, 0, 0, 0];
    world[3] = [0, 0, 0, 3, 0, 0, 0, 0, 0, 0];
  } else if (pieceNum == 6) {
    world[0] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    world[1] = [0, 0, 0, 0, 3, 3, 0, 0, 0, 0];
    world[2] = [0, 0, 0, 0, 0, 3, 0, 0, 0, 0];
    world[3] = [0, 0, 0, 0, 0, 3, 0, 0, 0, 0];
  } else if (pieceNum == 7) {
    world[0] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    world[1] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    world[2] = [0, 0, 0, 0, 0, 3, 0, 0, 0, 0];
    world[3] = [0, 0, 0, 3, 3, 3, 0, 0, 0, 0];
  } else if (pieceNum == 8) {
    world[0] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    world[1] = [0, 0, 0, 0, 0, 4, 0, 0, 0, 0];
    world[2] = [0, 0, 0, 0, 0, 4, 0, 0, 0, 0];
    world[3] = [0, 0, 0, 0, 4, 4, 0, 0, 0, 0];
  } else if (pieceNum == 9) {
    world[0] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    world[1] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    world[2] = [0, 0, 0, 4, 0, 0, 0, 0, 0, 0];
    world[3] = [0, 0, 0, 4, 4, 4, 0, 0, 0, 0];
  } else if (pieceNum == 10) {
    world[0] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    world[1] = [0, 0, 0, 0, 4, 4, 0, 0, 0, 0];
    world[2] = [0, 0, 0, 0, 4, 0, 0, 0, 0, 0];
    world[3] = [0, 0, 0, 0, 4, 0, 0, 0, 0, 0];
  } else if (pieceNum == 11) {
    world[0] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    world[1] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    world[2] = [0, 0, 0, 4, 4, 4, 0, 0, 0, 0];
    world[3] = [0, 0, 0, 0, 0, 4, 0, 0, 0, 0];
  } else if (pieceNum == 12) {
    world[0] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    world[1] = [0, 0, 0, 0, 5, 0, 0, 0, 0, 0];
    world[2] = [0, 0, 0, 0, 5, 5, 0, 0, 0, 0];
    world[3] = [0, 0, 0, 0, 5, 0, 0, 0, 0, 0];
  } else if (pieceNum == 13) {
    world[0] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    world[1] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    world[2] = [0, 0, 0, 0, 5, 5, 5, 0, 0, 0];
    world[3] = [0, 0, 0, 0, 0, 5, 0, 0, 0, 0];
  } else if (pieceNum == 14) {
    world[0] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    world[1] = [0, 0, 0, 0, 0, 5, 0, 0, 0, 0];
    world[2] = [0, 0, 0, 0, 5, 5, 0, 0, 0, 0];
    world[3] = [0, 0, 0, 0, 0, 5, 0, 0, 0, 0];
  } else if (pieceNum == 15) {
    world[0] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    world[1] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    world[2] = [0, 0, 0, 0, 5, 0, 0, 0, 0, 0];
    world[3] = [0, 0, 0, 5, 5, 5, 0, 0, 0, 0];
  } else if (pieceNum == 16) {
    world[0] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    world[1] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    world[2] = [0, 0, 0, 0, 6, 6, 0, 0, 0, 0];
    world[3] = [0, 0, 0, 6, 6, 0, 0, 0, 0, 0];
  } else if (pieceNum == 17) {
    world[0] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    world[1] = [0, 0, 0, 0, 6, 0, 0, 0, 0, 0];
    world[2] = [0, 0, 0, 0, 6, 6, 0, 0, 0, 0];
    world[3] = [0, 0, 0, 0, 0, 6, 0, 0, 0, 0];
  } else if (pieceNum == 18) {
    world[0] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    world[1] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    world[2] = [0, 0, 0, 7, 7, 0, 0, 0, 0, 0];
    world[3] = [0, 0, 0, 0, 7, 7, 0, 0, 0, 0];
  } else if (pieceNum == 19) {
    world[0] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    world[1] = [0, 0, 0, 0, 0, 7, 0, 0, 0, 0];
    world[2] = [0, 0, 0, 0, 7, 7, 0, 0, 0, 0];
    world[3] = [0, 0, 0, 0, 7, 0, 0, 0, 0, 0];
  } else {
    console.log("help!");
  }

  drawWorld(); // console.log(world);
}; // function for line clear -- need to make the next pieces move down
// after changing the value of the line we need to drop everything down one line 


var checkLine = function checkLine(cellValue) {
  return cellValue > 10;
};

var clearLine = function clearLine() {
  for (var y = 0; y < world.length; y++) {
    var arrayToTest = world[y].every(checkLine);

    if (arrayToTest) {
      world.splice([y], 1);
      world.splice(1, 0, [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]); // instead of splice - can we map every value to a new one? 

      drawWorld();
    }

    ;
  }
};

var freezePiece = function freezePiece() {
  for (var y = world.length - 1; y >= 4; y--) {
    for (var x = 0; x < world[y].length; x++) {
      if (world[y][x] > 0 && world[y][x] < 10) {
        world[y][x] = world[y][x] + 10;
        newPiece();
      }
    }
  }

  return;
}; // A function to ask if the next piece can fall down


var canMoveDown = function canMoveDown() {
  var canMoveFlag = true;

  for (var y = 0; y < world.length; y++) {
    for (var x = 0; x < world[y].length; x++) {
      // checking if the piece is a moveable piece i.e. 1-9
      if (world[y][x] > 0 && world[y][x] < 10) {
        // if theres a frozen piece in the next square or we are in the first column we can't move left. 
        if (y == world.length - 1 || world[y + 1][x] > 10) {
          canMoveFlag = false; // we don't want to freeze the piece though, we might want to move it to the right

          freezePiece();
          return canMoveFlag;
        }
      }
    }
  }

  return canMoveFlag;
};

var moveDown = function moveDown() {
  var canMoveFlag = canMoveDown();

  if (canMoveFlag) {
    for (var y = world.length - 1; y >= 0; y--) {
      for (var x = 0; x < world[y].length; x++) {
        // if it is a moveable square
        if (world[y][x] > 0 && world[y][x] < 10) {
          world[y + 1][x] = world[y][x];
          world[y][x] = 0;
        }
      }
    }
  }
}; // Move left function 


var canMoveLeft = function canMoveLeft() {
  var canMoveFlag = true;

  for (var y = 0; y < world.length; y++) {
    for (var x = 0; x < world[y].length; x++) {
      if (world[y][x] > 0 && world[y][x] < 10) {
        if (x === 0 || world[y][x - 1] > 10) {
          canMoveFlag = false;
          return canMoveFlag;
        }
      }
    }
  }

  return canMoveFlag;
};

var moveLeft = function moveLeft() {
  var canMoveFlag = canMoveLeft();

  if (canMoveFlag) {
    for (var y = world.length - 1; y >= 0; y--) {
      for (var x = 0; x < world[y].length; x++) {
        if (world[y][x] > 0 && world[y][x] < 10) {
          world[y][x - 1] = world[y][x];
          world[y][x] = 0;
        }
      }
    }
  }
}; // move right function 


var canMoveRight = function canMoveRight() {
  var canMoveFlag = true;

  for (var y = 0; y < world.length; y++) {
    for (var x = 0; x < world[y].length; x++) {
      // checking if the piece is a moveable piece i.e. 1-9
      if (world[y][x] > 0 && world[y][x] < 10) {
        // if theres a frozen piece in the next square or we are in the first column we can't move left. if the index of x = 9 OR the square to the right is > 10 
        if (x === 9 || world[y][x + 1] > 10) {
          canMoveFlag = false;
          return canMoveFlag;
        }
      }
    }
  }

  return canMoveFlag;
};

var moveRight = function moveRight() {
  var canMoveFlag = canMoveRight();

  if (canMoveFlag) {
    for (var y = world.length - 1; y >= 0; y--) {
      for (var x = world[y].length - 1; x > -1; x--) {
        if (world[y][x] > 0 && world[y][x] < 10) {
          world[y][x + 1] = world[y][x];
          world[y][x] = 0;
        }
      }
    }
  }
}; // This function is fine


var dropPiece = function dropPiece() {
  // while the cell below yx has a value <10 (not frozen not another piece) {execture move down function}
  // draw world 
  while (canMoveDown() === true) {
    moveDown();
  }

  drawWorld();
  score += 100;
  console.log(score);
};

var rotatePiece = function rotatePiece() {
  console.log("called the function"); // rotation will go clockwise
}; // newgame


var keyPress = function keyPress(evnt) {
  if (evnt.code === "ArrowLeft") {
    moveLeft();
  } else if (evnt.code === "ArrowRight") {
    moveRight();
  } else if (evnt.code === "ArrowDown") {
    moveDown();
  } else if (evnt.code === "ArrowUp") {
    rotatePiece();
  } else if (evnt.code === "Space") {
    dropPiece();
  } else {
    console.log("This key doesn't do anything");
  }

  ;
  drawWorld();
};

function gameLoop() {
  setTimeout(gameLoop, 500);
  drawWorld();
  moveDown();
  clearLine();
}

gameLoop();
var gameListener = document.querySelector("body");
gameListener.addEventListener("keydown", keyPress);