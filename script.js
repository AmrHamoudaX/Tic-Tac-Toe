function GameBoard() {
  const board = [];
  const rows = 3;
  const columns = 3;
  for (i = 0; i < rows; i++) {
    board[i] = [];
    for (j = 0; j < columns; j++) {
      board[i].push(Cell());
    }
  }

  const getBoard = () => board;
  const applyMark = (row, column, player) => {
    return board[row][column].addMark(player);
  };
  const printBoard = () => {
    console.log(board.map((row) => row.map((cell) => cell.getValue())));
  };
  return { getBoard, applyMark, printBoard };
}

function Cell() {
  let value = 0;

  const addMark = (player) => {
    value = player;
  };
  const getValue = () => value;
  return { addMark, getValue };
}

function GameController(player1 = "firstPlayer", player2 = "secondPlayer") {
  const board = GameBoard();
  const players = [
    {
      name: player1,
      mark: "X",
    },
    {
      name: player2,
      mark: "O",
    },
  ];

  function CheckForWinner() {
    const array = board
      .getBoard()
      .map((row) =>
        row.reduce(
          (accummulator, current) => accummulator + current.getValue(),
          "",
        ),
      );
    //Check for winning horizontally
    const winnerX = () => {
      for (i = 0; i < 3; i++) {
        if (array[i] === "XXX") {
          console.log(`It's ${players[0].name}'s win!!!`);
        }
      }
      //Check for winning for first vertical line
      let verticalX0 = 0;
      for (i = 0; i < 3; i++) {
        if (board.getBoard()[i][0].getValue() === "X") {
          verticalX0 += 1;
        }
      }
      if (verticalX0 === 3) {
        console.log(`It's ${players[0].name}'s win!!!`);
      }
      //Check for winning for second vertical line
      let verticalX1 = 0;
      for (i = 0; i < 3; i++) {
        if (board.getBoard()[i][1].getValue() === "X") {
          verticalX1 += 1;
        }
      }
      if (verticalX1 === 3) {
        console.log(`It's ${players[0].name}'s win!!!`);
      }
      //Check for winning for third vertical line
      let verticalX2 = 0;
      for (i = 0; i < 3; i++) {
        if (board.getBoard()[i][2].getValue() === "X") {
          verticalX2 += 1;
        }
      }
      if (verticalX2 === 3) {
        console.log(`It's ${players[0].name}'s win!!!`);
      }
    };
    const winnerO = () => {
      for (i = 0; i < 3; i++) {
        if (array[i] === "OOO") {
          console.log(`It's ${players[1].name}'s win!!!`);
        }
      }

      //Check for winning for first vertical line
      let verticalO0 = 0;
      for (i = 0; i < 3; i++) {
        if (board.getBoard()[i][0].getValue() === "O") {
          verticalO0 += 1;
        }
      }
      if (verticalO0 === 3) {
        console.log(`It's ${players[1].name}'s win!!!`);
      }
      //Check for winning for second vertical line
      let verticalO1 = 0;
      for (i = 0; i < 3; i++) {
        if (board.getBoard()[i][1].getValue() === "O") {
          verticalO1 += 1;
        }
      }
      if (verticalO1 === 3) {
        console.log(`It's ${players[1].name}'s win!!!`);
      }
      //Check for winning for third vertical line
      let verticalO2 = 0;
      for (i = 0; i < 3; i++) {
        if (board.getBoard()[i][2].getValue() === "O") {
          verticalO2 += 1;
        }
      }
      if (verticalO2 === 3) {
        console.log(`It's ${players[1].name}'s win!!!`);
      }
    };
    winnerX();
    winnerO();
    return { winnerX, winnerO };
  }
  let activePlayer = players[0];
  const getActivePlayer = () => activePlayer;
  const switchPlayer = () => {
    activePlayer = activePlayer === players[0] ? players[1] : players[0];
  };
  const playNextRound = () => {
    console.log(`Now it's ${getActivePlayer().name}'s turn to play`);
    board.printBoard();
  };
  const playRound = (row, column) => {
    console.log(
      `${getActivePlayer().name} played in ${row} row and in ${column} column`,
    );
    board.applyMark(row, column, getActivePlayer().mark);
    CheckForWinner();
    switchPlayer();
    playNextRound();
  };
  playNextRound();
  return {
    playRound,
    getBoard: board.getBoard(),
  };
}
const game = GameController();
