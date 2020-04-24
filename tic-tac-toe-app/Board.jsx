// main board component
function Board() {
  // creating state for the board squares
  const [boardSquares, setBoardSquares] = React.useState(
    new Array(9).fill(null)
  );

  // state for the next turn
  const [isXPlayer, setXPlayer] = React.useState(true);

// fucntion for when a sqaure is clicked
  const whenClicked = index => {
    // spread the items in boardSquare to new array to make a copy
    const squares = [...boardSquares];
    // check if square has a value
    if (squares[index]) return;
    // add next turn
    squares[index] = isXPlayer ? 'X' : 'O';

    // set the new state of the board squares
    setBoardSquares(squares);

    // change the state for the next turn
    setXPlayer(!isXPlayer);
  };

  // rendering the squares using square component
  const renderSquare = index => {
    return (
      <Square value={boardSquares[index]} onClick={() => whenClicked(index)} />
    );
  };

  // create the gameStatus to determine next player
  const gameStatus = isXPlayer ? 'X' : 'O';

  return (
    <div className="board">
      <h2 className={gameStatus}>It is {gameStatus}'s turn</h2>
      <div className="boardRow">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="boardRow">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="boardRow">
        {renderSquare(7)}
        {renderSquare(8)}
        {renderSquare(9)}
      </div>
    </div>
  );
}
