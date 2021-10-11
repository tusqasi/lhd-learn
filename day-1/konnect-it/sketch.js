// the game board
let cellSize;
let board;
let cellX;
let cellY;
let cellPressedX;

function setup() {
  createCanvas(1330, 800);
  cellSize = 200;
  cellX = floor(width / cellSize);
  cellY = floor(height / cellSize);
  board = [];
  for (let i = 0; i < cellX; i++) {
    board.push([0]);
  }
}

function mouseClicked(e) {
  cellPressedX = floor(mouseX / cellSize);
  board[cellPressedX].push(1);
}

function draw() {
  background(122);
  drawGrid();
	drawBoard();
}

function drawGrid() {
  fill(240, 200, 0);
  rect(0, 0, cellX * cellSize, cellY * cellSize);

  // vertical
  for (let i = 1; i < cellX + 1; i++) {
    line(cellSize * i, 0, cellSize * i, cellY * cellSize);
  }
  // console.log(y * cellSize);
  for (let i = 1; i < cellY + 1; i++) {
    line(0, cellSize * i, cellX * cellSize, cellSize * i);
  }
}

function drawBoard() {
  for (let i = 0; i < board.length; i++) {

    for (let j = 0; j < board[i].length; j++) {
			fill(0,0,50);
			rect(height - cellSize*j,j*cellSize,height,j*cellSize);
    }
      // console.log("\n");
  }
}
