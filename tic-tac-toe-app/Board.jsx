const Board = (props) => {
  const [state, setState] = React.useState([]);

  const clickEvent = (num) => {
    state[num] = props.turn;
    setState(state);
  }

  const winner = declareWinner(state);
  let status;
  if (winner) {
    status = `The winner is ${winner}!`;
  }

  const renderSquare = (num) => {
    return <Square clickEvent={() => clickEvent(num)} boardState={state} value={state[num]} turn={props.turn} setTurn={props.setTurn}/>;
  }

  return (
    <div className='board'>
      <h3>{status}</h3>
      <div className='row'>
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className='row'>
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className='row'>
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
    </div>
  );
}
