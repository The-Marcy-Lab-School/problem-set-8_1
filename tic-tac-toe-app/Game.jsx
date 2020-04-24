function Game(){
    const [turn, setTurn] = React.useState('X');
    
    return (
    <div>
        <h1>It's your turn player {turn}</h1>
        <Board turn={turn} setTurn={setTurn}/>
    </div>
    );
}