function GameBoard() {
  const [turn, setTurn] = React.useState(1);
  const [cells, setCells] = React.useState([
    null, null, null,
    null, null, null,
    null, null, null,
  ]);
  const [winner, setWinner] = React.useState('');

  const checkWinner = () => {
    const board = cells;
    // turn >= 5 && turn !== 9
    if (true) {
      // horizontal wins
      if (board[0] !== null && board[0] === board[1] && board[1] === board[2]) {
        console.log(board[0]);
        return board[0];
        // return true;
      }

      if (board[3] !== null && board[3] === board[4] && board[4] === board[5]) {
        return board[3];
        // return true;
      }

      if (board[6] !== null && board[6] === board[7] && board[7] === board[8]) {
        return board[6];
        // return true;
      }

      // diagonal wins
      if (board[0] !== null && board[0] === board[4] && board[4] === board[8]) {
        return board[0];
        // return true;
      }

      if (board[2] !== null && board[2] === board[4] && board[4] === board[6]) {
        return board[2];
        // return true;
      }
      // vertical wins
      if (board[0] !== null && board[0] === board[3] && board[3] === board[6]) {
        return board[0];
        // return true;
      }

      if (board[1] !== null && board[1] === board[4] && board[4] === board[7]) {
        return board[1];
        // return true;
      }

      if (board[2] !== null && board[2] === board[5] && board[5] === board[8]) {
        return board[2];
        // return true;
      }
    }
    if (turn === 9) {
      'draw';
      return true;
    }
  };

  const playCell = (index) => {
    console.log('state just after click', cells);
    setTurn(turn + 1);
    if (cells[index]) return;
    const newCells = [...cells];
    if (turn % 2 === 0) {
      newCells[index] = 'O';
    }
    else {
      newCells[index] = 'X';
    }
    setCells(newCells);
    console.log('state just after attempting to change it', cells);
  };

  return (
    <section>
      <h2>{winner}</h2>
      {cells.map((cell, i) => (
        <GameCell
          key={i + cells[i]}
          index={i}
          content={cells[i]}
          dispatchFn={playCell}
        />
      ))}
    </section>
  );
}
