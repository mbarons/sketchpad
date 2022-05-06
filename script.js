const panel = document.querySelector(".panel");
let numberOfTiles = 16;
let lineTiles = [];
let tiles = [];
let columnTiles = [];
let mode = "classic";

/* buttons variables */
const tilesbutton = document.querySelector("#input-tiles");
const rainbow = document.querySelector("#rainbow-button");
const grayScale = document.querySelector("#gray-button");
const classic = document.querySelector("#classic-button");
const clear = document.querySelector("#clear-button");


clear.addEventListener("click", () => {
  deleteTiles();
  createBoard(numberOfTiles);
  tiles.forEach(div => processTile(div, mode));
})

classic.addEventListener("click", () => {
  mode = "classic";
  tiles.forEach(div => processTile(div, mode));
})

rainbow.addEventListener("click", () => {
  mode = "rainbow";
  tiles.forEach(div => processTile(div, mode));
})

grayScale.addEventListener("click", () => {
  mode = "gradient";
  tiles.forEach(div => processTile(div, mode));;
  })

tilesbutton.addEventListener("click", () => {
do { 
  numberOfTiles = prompt("Type the number of tiles per side for your board. Max of 100.")}
while (numberOfTiles > 100 || numberOfTiles < 1)
deleteTiles();
createBoard(numberOfTiles);
tiles.forEach(div => processTile(div, mode));
});

function createBoard(numberOfTiles) {
for (let i = 0; i < numberOfTiles; i++) { 
  lineTiles[i] = document.createElement("div");
  lineTiles[i].classList.add("lines");
  panel.appendChild(lineTiles[i]);
    for (z = 0; z < numberOfTiles; z++){
      columnTiles[z] = document.createElement("div");
      columnTiles[z].classList.add("columns");
      lineTiles[i].appendChild(columnTiles[z]);
    }
};

tiles = document.querySelectorAll("div.columns");
};

function processTile(square, mode) {
  if (mode == "classic") { 
    square.addEventListener("mouseover", () => {
      square.style.cssText = "background-color: black;"
    })
}
  else if (mode == "rainbow") {
    square.addEventListener("mouseover", () => {
      square.style.cssText = `background-color: rgb(${randomNumber()}, ${randomNumber()}, ${randomNumber()});`;

    })
  }
  else if (mode == "gradient") {
    let j = 0.1;
    square.addEventListener("mouseover", () => {
      j += 0.1;
      square.style.cssText = `background-color: rgba(0, 0, 0, ${j})`;
    })
  }
};

function deleteTiles() {
  let lastElementPanel = panel.lastElementChild;
  while (lastElementPanel) {
    panel.removeChild(lastElementPanel);
    lastElementPanel = panel.lastElementChild;
  }};

function randomNumber(){
  let random
  return random = Math.floor(Math.random() * 256);
};

createBoard(numberOfTiles);
tiles.forEach(div => processTile(div, mode));