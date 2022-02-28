const z = [
  [0, 1, 2, 3, 4],
  [0, 1, 2, 3, 4],
  [0, 1, 2, 3, 4],
  [0, 1, 2, 3, 4],
  [0, 1, 2, 3, 4]
]

console.log(z[2])

const y = [
  [0, 1, 2, 3, 2],
  [0, 1, 2, 3, 2],
  [0, 1, 2, 3, 2],
  [0, 1, 2, 3, 2],
  [0, 1, 2, 3, 3]
]

const arraymapped = z.map(x => y);
console.log(arraymapped)



if (world[y][x] === 0) {
  document.getElementById("world").innerHTML += "<div class=empty></div>"
} else if (world[y][x] === 1 || world[y][x] === 11) {
  document.getElementById("world").innerHTML += "<div class=squareShape></div>"
}
else if (world[y][x] === 2 || world[y][x] === 12) {
  document.getElementById("world").innerHTML += "<div class=lineShape></div>"
}
else if (world[y][x] === 3 || world[y][x] === 13) {
  document.getElementById("world").innerHTML += "<div class=elShape></div>"
}
else if (world[y][x] === 4 || world[y][x] === 14) {
  document.getElementById("world").innerHTML += "<div class=arShape></div>"
}
else if (world[y][x] === 5 || world[y][x] === 15) {
  document.getElementById("world").innerHTML += "<div class=tShape></div>"
}
else if (world[y][x] === 6 || world[y][x] === 16) {
  document.getElementById("world").innerHTML += "<div class=sShape></div>"
}
else if (world[y][x] === 7 || world[y][x] === 17) {
  document.getElementById("world").innerHTML += "<div class=zShape></div>"
}