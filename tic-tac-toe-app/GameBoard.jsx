const calculateWinner = (board) =>{
  const winningConditions = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
  ];
  
  for(let i=0; i < winningConditions.length; i++){
    const [a,b,c] = winningConditions[i];
    if(board[a] && board[a] === board[b] && board[a] === board[c]){
      return board[a];
  }
}
  return null;
};


const GameBoard = () => {
  const [board, setBoard] = React.useState(new Array(9).fill(null));
  const [turn, setTurn] = React.useState('O');
  
  const updateBoard = (i,player) => {
    // add the player value on the board[i]
    const newBoard = board.slice();
    newBoard[i] = player;
    setBoard(newBoard);
  };
  
    const changeTurn = () => {
    if (turn === 'O'){
      setTurn('X');
    }
    if(turn === 'X'){
      setTurn('O');
    }
  };
  
  // first i want to check the state of board 
  const winner = calculateWinner(board);
  let status;
  if(winner){
    status = `The winner is ${winner}`;
  }
  return (
      <div className="gameBoard">
          <h1>It is currently {turn} turn</h1>
          <h1>{status}</h1>
          <div>
          <Cell id={0} turn={turn} changeTurn={changeTurn} updateBoard={updateBoard} />
          <Cell id={1} turn={turn} changeTurn={changeTurn} updateBoard={updateBoard}    />
          <Cell id={2} turn={turn} changeTurn={changeTurn} updateBoard={updateBoard}   />
          </div>
      
          <div>
          <Cell id={3} turn={turn} changeTurn={changeTurn} updateBoard={updateBoard}    />
          <Cell id={4} turn={turn} changeTurn={changeTurn} updateBoard={updateBoard}    />
          <Cell id={5} turn={turn} changeTurn={changeTurn} updateBoard={updateBoard}   />
          </div>
          <div>
        
          <Cell id={6} turn={turn} changeTurn={changeTurn} updateBoard={updateBoard}   />
          <Cell id={7} turn={turn} changeTurn={changeTurn} updateBoard={updateBoard}  />
          <Cell id={8} turn={turn} changeTurn={changeTurn} updateBoard={updateBoard}  />
          </div>
      </div>
    );
};
