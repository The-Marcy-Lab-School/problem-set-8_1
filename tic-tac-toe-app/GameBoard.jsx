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
      console.log(board);
      console.log(`The winner is player ${board[a]}`);
      return board[a];
  }
}
  return null;
};


const GameBoard = () => {
  const [board, setBoard] = React.useState([]);
  const [turn, setTurn] = React.useState('O');
  // first i want to check who turn it is and alternate between the two
  // this function is responsible for changing the player turns
  const changeTurn = () => {
    if (turn === 'O'){
      setTurn('X');
    }
    if(turn === 'X'){
      setTurn('O');
    }
  };

  const updateBoard = (i,player) => {
    // add the player value on the board[i]
    const newBoard = board.slice();
    newBoard[i] = player;
    console.log(newBoard);
    setBoard(newBoard);
  };
  
  // first i want to check the state of board 
  const winner = calculateWinner(board);
  let status;
  console.log(winner);
  if(winner){
    status = `The winner is ${winner}`;
  }
  return (
    
      <div className="gameBoard">
        <div className="row">
          <h1>It is currently {turn} turn</h1>
          <h1>{status}</h1>
        </div>
        
        <div className="row">
          <Cell id={0} turn={turn} updateBoard={updateBoard} changeTurn={changeTurn}    />
          <Cell id={1} turn={turn} updateBoard={updateBoard}  changeTurn={changeTurn}  />
          <Cell id={2} turn={turn} updateBoard={updateBoard} changeTurn={changeTurn}  />
        </div>
        
        <div className="row">
          <Cell id={3} turn={turn} updateBoard={updateBoard}  changeTurn={changeTurn}  />
          <Cell id={4} turn={turn} updateBoard={updateBoard}  changeTurn={changeTurn}  />
          <Cell id={5} turn={turn} updateBoard={updateBoard} changeTurn={changeTurn}  />
        </div>
        
        <div className="row">
          <Cell id={6} turn={turn} updateBoard={updateBoard} changeTurn={changeTurn}  />
          <Cell id={7} turn={turn} updateBoard={updateBoard} changeTurn={changeTurn} />
          <Cell id={8} turn={turn} updateBoard={updateBoard} changeTurn={changeTurn} />
        </div>
       
       
      </div>
    );
};



