// when someone click on each cell it should call a function "setCell" and it should do something
const GameBoard = (props) => {
  // const [board, setBoard] = React.useState('')
  
  return (
      <div className="gameBoard">
      <Cell id={0} />
      <Cell id={1}/>
      <Cell id={2}/>
      <Cell id={3}/>
      <Cell id={4}/>
      <Cell id={5}/>
      <Cell id={6}/>
      <Cell id={7}/>
      <Cell id={8}/>
      </div>
    );
};

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
