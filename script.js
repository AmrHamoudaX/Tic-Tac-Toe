//GameBoard
function Gameboard() {
  const rows = 3;
  const columns = 3;
  const board = [];

  for (i = 0; i < rows; i++) {
    board[i] = [];
    for (j = 0; j < columns; j++) {
      board[i].push(Cell());
    }
  }
  const getBoard = () => board;
  const printBoard = () => {
    return board.map((row) => row.map((cell) => cell.getValue()));
  };
  const applyMark = (row, column, player) => {
    return board[row][column].addMark(player);
  };
  return { printBoard, getBoard, applyMark };
}

function Cell() {
  let value = 0;

  let addMark = (player) => {
    value = player;
  };
  const getValue = () => value;
  return { addMark, getValue };
}

function Gamecontroller(player1 = "firstPlayer", player2 = "secondPlayer") {
  const board = Gameboard();
  const players = [
    { name: player1, mark: "X" },
    { name: player2, mark: "O" },
  ];
}
const board = Gameboard();
