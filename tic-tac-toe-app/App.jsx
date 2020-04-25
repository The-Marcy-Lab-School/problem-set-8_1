function Cells(props) {
  return <button onClick={props.click} className='button'>{props.value}</button>
}

function Board(props) {
  const [boardState, setBoardState] = React.useState(new Array(9).fill(null));

  function declareWinner(board) {
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
      const [first, second, third] = conditions[i]
      if (board[first] && board[second] === board[first] && board[third] === board[first]) {
        return board[first];
      }
    }
    return null;
  }

  const winner = declareWinner(boardState)
  let status;
  if (winner) {
    status = `The winner is ${winner}!`;
  }

  function clickHandler(num) {
    if (!winner && !boardState[num]) {
      boardState[num] = props.turn;
      setBoardState(boardState)
      props.setTurn((props.turn === 'X') ? 'O' : 'X');
    }
  }

  return (
    <div className='board'>
      <h3>{status}</h3>
      <div className='rows'>
        <Cells click={() => clickHandler(0)} value={boardState[0]}/>
        <Cells click={() => clickHandler(1)} value={boardState[1]}/>
        <Cells click={() => clickHandler(2)} value={boardState[2]}/>
      </div>
      <div className='rows'>
        <Cells click={() => clickHandler(3)} value={boardState[3]}/>
        <Cells click={() => clickHandler(4)} value={boardState[4]}/>
        <Cells click={() => clickHandler(5)} value={boardState[5]}/>
      </div>
      <div className='rows'>
        <Cells click={() => clickHandler(6)} value={boardState[6]}/>
        <Cells click={() => clickHandler(7)} value={boardState[7]}/>
        <Cells click={() => clickHandler(8)} value={boardState[8]}/>
      </div>
    </div>
  )
}

function Game() {
  const [turn, setTurn] = React.useState('X');

  return (
    <div>
      <h1>Player {turn}, it's your turn</h1>
      <Board turn={turn} setTurn={setTurn}/>
    </div>
  )
}


const App = () => {
	return (
			<div className="game">
				<h1>Tic Tac Toe</h1>
				<Game/>
			</div>
			);
};


ReactDOM.render(<App />, document.querySelector('.container'));
