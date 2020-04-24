function GameBoard() {
  const [turn, setTurn] = React.useState(1);
  const [cells, setCells] = React.useState([
    null, null, null,
    null, null, null,
    null, null, null,
  ]);

  const checkWinner = () => {
    // turn >= 5 && turn !== 9
    if (true) {
      // horizontal wins
      if (cells[0] !== null && cells[0] === cells[1] && cells[1] === cells[2]) {
        console.log(cells[0]);
        return cells[0];
      }

      if (cells[3] !== null && cells[3] === cells[4] && cells[4] === cells[5]) {
        return cells[3];
      }

      if (cells[6] !== null && cells[6] === cells[7] && cells[7] === cells[8]) {
        return cells[6];
      }

      // diagonal wins
      if (cells[0] !== null && cells[0] === cells[4] && cells[4] === cells[8]) {
        return cells[0];
      }

      if (cells[2] !== null && cells[2] === cells[4] && cells[4] === cells[6]) {
        return cells[2];
      }
      // vertical wins
      if (cells[0] !== null && cells[0] === cells[3] && cells[3] === cells[6]) {
        return cells[0];
      }

      if (cells[1] !== null && cells[1] === cells[4] && cells[4] === cells[7]) {
        return cells[1];
      }

      if (cells[2] !== null && cells[2] === cells[5] && cells[5] === cells[8]) {
        return cells[2];
      }
    }
  };

  const winner = checkWinner(cells, turn);

  return (
    <article>
      <h2>Winner: {winner}</h2>
      <section className="board">
      {cells.map((cell, i) => (
        <GameCell
          key={i + cell}
          cellIndex={i}
          cells={cells}
          setCells={setCells}
          winner={winner}
          turn={turn}
          setTurn={setTurn}
        />
      ))}
      </section>
    </article>
  );
}
