const App = () => {
	return (
	  <GameBoard />
	  
	  )
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
const GameBoard = (props) => {
  const [board, setBoard] = React.useState([])
  
  return (
    <Cells />
    );
};

ReactDOM.render(<App />, document.querySelector('.container'));
