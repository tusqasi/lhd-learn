function setup() {
  createCanvas(800, 800);
}

function draw() {
  drawGrid(4)
  // background(0);

}

function drawGrid(n) {
  let cellSize = width / n;
  for (let i = 1; i < n + 1; i++) {
    // veritcal
    line(cellSize * (i), 0, cellSize * i, width);
    // horizontal
    line(0, cellSize * i, width, cellSize * i);
  }
}