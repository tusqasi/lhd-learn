let cellSize;
let board;
let playing;
function setup() {
  playing = 1;
  createCanvas(800, 800);
  cellSize = floor(height / 3);
  board = Array();
  for (let i = 0; i < 3; i++) {
    board.push([0, 0, 0]);
  }
}

function draw() {
  background(150);
  drawGrid();
  drawBoard();
}

function drawGrid() {
  strokeWeight(6);
  for (let i = 0; i < 3; i++) {
    line(cellSize * i, 0, cellSize * i, width);
    line(0, cellSize * i, width, cellSize * i);
  }
}
function mouseClicked() {
  let cellX = floor((3 * mouseX) / 800);
  let cellY = floor((3 * mouseY) / 800);
  console.log(cellX, cellY);
  board[cellX][cellY] = playing;
  if (playing == 1) {
    playing = 2;
  } else {
    playing = 1;
  }
  console.table(board);
}

function drawX(x, y) {
  push();
	let step = cellSize/4
  translate(x * cellSize + cellSize / 2, y * cellSize + cellSize / 2);
  line(-step, -step, step, step);
  line(-step, step, step, -step);
  pop();
}
function drawO(x, y) {
  let step = cellSize / 2  ;
  circle(step + x * cellSize, step + y * cellSize, 150);
}

function drawBoard() {
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      if (board[i][j] == 1) {
        drawX(i, j);
      } else if (board[i][j] == 2) {
        drawO(i, j);
      }
    }
  }
}
