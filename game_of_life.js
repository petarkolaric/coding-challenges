var sleep = require('sleep');

const boardSize = 45
const aliveCell = "*"
const deadCell = " "

let randomiseInitialState = () => (Math.floor(Math.random() * 2) == 0) ? deadCell : aliveCell

let checkNeighbours = (x, y, gameBoard) => {
  let xLeft = (x == 0) ? boardSize-1 : x-1
  let xRight = (x == boardSize -1) ? 0 : x+1
  let yUp = (y == 0) ? boardSize-1 : y-1
  let yDown = (y == boardSize -1) ? 0 : y+1

  let currentState = gameBoard[x][y]
  let neighbourCount = 0
  if (gameBoard[xLeft][y] == aliveCell) neighbourCount++
  if (gameBoard[xLeft][yUp] == aliveCell) neighbourCount++
  if (gameBoard[x][yUp] == aliveCell) neighbourCount++
  if (gameBoard[xRight][yUp] == aliveCell) neighbourCount++
  if (gameBoard[xRight][y] == aliveCell) neighbourCount++
  if (gameBoard[xRight][yDown] == aliveCell) neighbourCount++
  if (gameBoard[x][yDown] == aliveCell) neighbourCount++
  if (gameBoard[xLeft][yDown] == aliveCell) neighbourCount++
  return neighbourCount
}

let isAlive = (numberOfNeighbours, currentState) => numberOfNeighbours == 3 || numberOfNeighbours == 2 && currentState == aliveCell

let cellState = (x, y, gameBoard) => gameBoard[x][y]

let gameBoard = new Array(boardSize)

for (let i=0; i<gameBoard.length; i++) {
  gameBoard[i] = new Array(boardSize)
  for (let j=0; j<gameBoard[i].length; j++) {
    gameBoard[i][j] = randomiseInitialState()
  }
}

while (true) {
  console.log("\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n")
  for (let i=0; i<gameBoard.length; i++) {
    console.log(gameBoard[i].join(" "))
  }
  let nextBoard = new Array(boardSize)

  for (let i=0; i<nextBoard.length; i++) {
    nextBoard[i] = new Array(boardSize)
    for (let j=0; j<nextBoard[i].length; j++) {
      nextBoard[i][j] = (isAlive(checkNeighbours(i, j, gameBoard), cellState(i, j, gameBoard)) ? aliveCell : deadCell)
    }
  }
  gameBoard = nextBoard
  sleep.usleep(50000)
}
