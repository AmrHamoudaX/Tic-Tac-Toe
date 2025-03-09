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
    board[row][column].addMark(player);
  };

  //Check for winner
  const checkForWinner = () => {
    const array = board.map((row) =>
      row.reduce(
        (accummulator, current) => accummulator + current.getValue(),
        "",
      ),
    );
    //Check for winning horizontally
    const winnerX = () => {
      for (i = 0; i < 3; i++) {
        if (array[i] === "XXX") {
          console.log("X wins!!");
        }
      }
      //Check for winning for first vertical line
      let verticalX0 = 0;
      for (i = 0; i < 3; i++) {
        if (board[i][0].getValue() === "X") {
          verticalX0 += 1;
        }
      }
      if (verticalX0 === 3) {
        console.log("X wins!!");
      }
      //Check for winning for second vertical line
      let verticalX1 = 0;
      for (i = 0; i < 3; i++) {
        if (board[i][1].getValue() === "X") {
          verticalX1 += 1;
        }
      }
      if (verticalX1 === 3) {
        console.log("X wins!!");
      }
      //Check for winning for third vertical line
      let verticalX2 = 0;
      for (i = 0; i < 3; i++) {
        if (board[i][2].getValue() === "X") {
          verticalX2 += 1;
        }
      }
      if (verticalX2 === 3) {
        console.log("X wins!!");
      }
    };
    const winnerO = () => {
      for (i = 0; i < 3; i++) {
        if (array[i] === "OOO") {
          console.log("O wins");
        }
      }

      //Check for winning for first vertical line
      let verticalO0 = 0;
      for (i = 0; i < 3; i++) {
        if (board[i][0].getValue() === "O") {
          verticalO0 += 1;
        }
      }
      if (verticalO0 === 3) {
        console.log("O wins!!");
      }
      //Check for winning for second vertical line
      let verticalO1 = 0;
      for (i = 0; i < 3; i++) {
        if (board[i][1].getValue() === "O") {
          verticalO1 += 1;
        }
      }
      if (verticalO1 === 3) {
        console.log("O wins!!");
      }
      //Check for winning for third vertical line
      let verticalO2 = 0;
      for (i = 0; i < 3; i++) {
        if (board[i][2].getValue() === "O") {
          verticalO2 += 1;
        }
      }
      if (verticalO2 === 3) {
        console.log("O wins!!");
      }
    };
    console.log(array);
    winnerX();
    winnerO();
  };
  return { checkForWinner, printBoard, getBoard, applyMark };
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
  let activePlayer = players[0];
  const getActivePlayer = () => activePlayer;
  const switchPlayer = () => {
    activePlayer = activePlayer === players[0] ? players[1] : players[0];
  };
  const nextRound = () => {
    console.log(board.printBoard());
    console.log(`Now it's ${getActivePlayer().name}'s turn to play`);
  };
  const playRound = (row, column) => {
    console.log(
      `${getActivePlayer().name} has played in ${row}row and ${column}column`,
    );
    board.applyMark(row, column, getActivePlayer().mark);
    board.checkForWinner();
    switchPlayer();
    nextRound();
  };
  nextRound();
  return { nextRound, getActivePlayer, playRound };
}
const board = Gameboard();
const game = Gamecontroller();
