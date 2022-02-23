console.log("hi paul");


// const keyInput = document.getElementsByClassName("sandbox__main");
// console.log(keyInput);

// const clickFunction = (targetEvent) => {
//   console.log(targetEvent)
//   console.log("you clicked in the box")
// };

// keyInput.addEventListener("click", clickFunction);



// when you use getElementbyclassName you get an array any time you get more than one result back you are trying to apply an event listener to multiple things
// 

// const pageListener = document.querySelector("body");
// console.log(pageListener);

// const bodyArrows = (evnt) => {
//   const inputKey = evnt.code;
//   if ((inputKey = ArrowLeft)) {s
//     console.log("you pressed " + inputKey)
//   } else if (inputKey = ArrowRight) {
//     console.log("you pressed " + inputKey)
//   }
// };

// pageListener.addEventListener("keydown", bodyArrows);


// var world = [
//   [0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
//   [0, 0, 0, 0, 11, 11, 0, 0, 0, 0],
//   [0, 0, 0, 0, 11, 11, 0, 0, 0, 0],
// ];


const ages = [32, 33, 20, 40];

var x = ages.every(checkAge)

function checkAge(age) {
  return age > 18;
}

//console.log(x)
// if the val is greater than 10 it us frozen


function checkVal(age) {
  return age > 10;
}

const checkLine = (cellValue) => {
  return cellValue > 10;
}

var world = [
  
  [0, 0, 0, 3, 0, 5, 0, 0, 0, 0],
  [12, 12, 12, 12, 12, 12, 12, 12, 12, 12],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
];
console.log(world.length)


// defining a function 
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

clearLine();