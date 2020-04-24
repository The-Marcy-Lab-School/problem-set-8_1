function GameCell({
  cellIndex,
  cells,
  setCells,
  winner,
  turn,
  setTurn,
}) {
  const playCell = () => {
    if (cells[cellIndex] || winner) return;
    const newCells = [...cells];
    if (turn % 2 === 0) {
      newCells[cellIndex] = 'O';
    }
    else {
      newCells[cellIndex] = 'X';
    }
    setCells(newCells);
    setTurn(turn + 1);
  };

  return (
    <div className="gameCell" onClick={playCell}>
      <p>{cells[cellIndex]}</p>
    </div>
  );
}
