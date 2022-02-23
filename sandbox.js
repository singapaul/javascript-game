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


console.log(world.length)