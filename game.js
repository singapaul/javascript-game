console.log("hello");



var world = [
  [0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 11, 11, 0, 0, 0, 0],
  [0, 0, 0, 0, 11, 11, 0, 0, 0, 0],
];




console.log(world);
console.log(world.length)

const drawWorld = () => {
  document.getElementById("world").innerHTML = ""
  for (var y = 0; y < world.length; y++) {
    for (var x = 0; x < world[y].length; x++) {

      if (world[y][x] === 0) {
        document.getElementById("world").innerHTML += "<div class=empty></div>"
      } else if (world[y][x] === 1 || world[y][x] === 11) {
        document.getElementById("world").innerHTML += "<div class=squareShape></div>"
      }
    }
  }
}

// generate new piece function 

const newPiece = () => {
  // at middle of index at y0/y1 --> x = 4/5 we want to set the value equal to squares 

    world[0] = [0,0,0,0,1,1,0,0,0,0];
    world[1] = [0,0,0,0,1,1,0,0,0,0];

    drawWorld();
}


// function for line clear

const checkLine = (cellValue) => {
  return cellValue > 10;
};
const clearLine = () => {
  for (var y = 0; y < world.length; y++) {
    var arrayToTest = world[y].every(checkLine);
    console.log(arrayToTest);
    if (!arrayToTest) {
      console.log("No score no points")

    } else if (arrayToTest) {
      world[y] = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
      console.log("That's 10 points to gryffindor");

    }
    console.log(world[y]);

  }
  console.log(world)

}
// end of line clear function 









const moveDown = () => {
  // just going to assume for a single piece in the grid for now
  var canMoveFlag = true;
  for (var y = 0; y < world.length; y++) {
    for (var x = 0; x < world[y].length; x++) {
      if (world[y][x] > 0 && world[y][x] < 10) {
        // checking if the piece is a moveable piece i.e. 1-9
        if (y ==((world.length)-1) || world[y + 1][x] > 10) {
          // checking if the piece is already at the bottom or if the piece below the current piece is fixed in place
          canMoveFlag = false;
          // This means that the piece if frozen in place. We will call the freeze function so that we can keep running our game loop
          // Need to define a freeze function here where we change the value when it lands
          freezePiece();
          // now we are going to run the code to generate the new piece in the line below: 

        }
      }
    }
  }
  if (canMoveFlag) {
    for (var y = world.length - 1; y >= 0; y--) {
      for (var x = 0; x < world[y].length; x++) {
        if (world[y][x] > 0 && world[y][x] < 10) {
          world[y + 1][x] = world[y][x];
          world[y][x] = 0;

        }
      }
    }
  }
};


const freezePiece = () => {
  for (var y = 0; y < world.length; y++) {
    for (var x = 0; x < world[y].length; x++) {
      if (world[y][x] > 0 && world[y][x] < 10 ) {
        world[y][x] = world[y][x] + 10;
        newPiece();
      }
    }
  }
  
};


const moveLeft = () => {
  // It can move left if 1) there is space 2) it's not on the boundary already
  // if world[y][x-1] === 0 
  var canMoveFlag = true;
  for (var y = 0; y < world.length; y++) {
    for (var x = 0; x < world[y].length; x++) {
      // checking if the piece is a moveable piece i.e. 1-9
      if (world[y][x] > 0 && world[y][x] < 10) {
        // if theres a frozen piece in the next square or we are in the first column we can't move left. 
        if (x === 0 || world[y][x - 1] > 10) {
          canMoveFlag = false;
          // we don't want to freeze the piece though, we might want to move it to the right
          // freezePiece();
        }
      }
    }
  }


  if (canMoveFlag) {
    for (var y = world.length - 1; y >= 0; y--) {
      for (var x = 0; x < world[y].length; x++) {
        // if it is a moveable square
        if (world[y][x] > 0 && world[y][x] < 10) {
          // assign the square to the left the current value of y,x
          world[y][x - 1] = world[y][x];
          // remove the value of the square from this cell. 
          world[y][x] = 0;
          // console .log 
          console.log("it can move left")


        }
      }
    }
  }
};


// move right function 


const moveRight = () => {
  console.log("ive been called")
  // It can move left if 1) there is space 2) it's not on the boundary already
  // if world[y][x-1] === 0 
  var canMoveFlag = true;
  for (var y = 0; y < world.length; y++) {
    for (var x = 0; x < world[y].length; x++) {
      // checking if the piece is a moveable piece i.e. 1-9
      if (world[y][x] > 0 && world[y][x] < 10) {
        // if theres a frozen piece in the next square or we are in the first column we can't move left. if the index of x = 9 OR the square to the right is > 10 
        if (x === 9 || world[y][x + 1] > 10) {
          canMoveFlag = false;
          // we don't want to freeze the piece though, we might want to move it to the right
          // freezePiece();
        }
      }
    }
  }

  if (!canMoveFlag) {
    return;
  }

  for (var y = world.length - 1; y >= 0; y--) {
    for (var x = world[y].length - 1; x > -1; x--) {
      // if it is a moveable square
      if (world[y][x] > 0 && world[y][x] < 10) {
        // assign the square to the left the current value of y,x
        // world[y][x - 1] = world[y][x];
        // remove the value of the square from this cell. 
        // world[y][x] = 0;
        // console .log 
        console.log("it can move right");
        world[y][x + 1] = world[y][x];
        world[y][x] = 0;

      }
    }
  }

};

// Refactor by writing a function for the code 


const keyPress = (evnt) => {
  if (evnt.code === "ArrowLeft") {
    console.log("arrow left pressed")
    moveLeft();
  } else if (evnt.code === "ArrowRight") {
    console.log("arrow right pressed")
    moveRight();
  } else if (evnt.code === "ArrowDown") {
    console.log("arrow down pressed")
    moveDown();
  } else {
    console.log("This key doesn't do anything")
  };
  drawWorld();
}








function gameLoop() {

  setTimeout(gameLoop, 1000);
  drawWorld();
  moveDown();
  // just runnign the function here for now, I will replace it somewhere else later so then it checks more frequently! 
  clearLine();
}

gameLoop();


// Arrow keys buttons//code
const gameListener = document.querySelector("body");
console.log(gameListener);
gameListener.addEventListener("keydown", keyPress);



// Write code for new piecee


//3. write line clear logic 

//4. write different shapes logic 

//5. write rotational logic 

// 6. Clean up and sort the files out