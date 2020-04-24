const Game = () => {
  const [turn, setTurn] = React.useState('X');
  return (
    <div>
      <h2 className='header'>Player {turn}, it's your turn</h2>
      <Board turn={turn} setTurn={setTurn}/>
    </div>
  );
}
