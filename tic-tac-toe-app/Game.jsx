const declareWinner = (states) => {
  const conditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < conditions.length; i++) {
    const [first, second, third] = conditions[i];
    if (states[first] && states[first] === states[second] && states[first] === states[third]) {
      return states[first];
    }
  }
  return null;
}

const Square = (props) => {
  const [buttonValue, setButtonValue] = React.useState('');
  function clickHandler() {
    if (!declareWinner(props.boardState) && !props.value) {
      props.clickEvent();
      props.setTurn((props.turn === 'O') ? 'X' : 'O');
      setButtonValue(props.turn);
    }
  }
  return <button onClick={clickHandler} className='square'>{buttonValue}</button>;
}

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


const Game = () => {
  const [turn, setTurn] = React.useState('X');
  return (
    <div>
      <h2 className='header'>Player {turn}, it's your turn</h2>
      <Board turn={turn} setTurn={setTurn}/>
    </div>
  );
}
