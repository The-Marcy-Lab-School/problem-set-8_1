function Board() {
    const [squares, setSquares] = React.useState(new Array(9).fill(null));

    squares[index] = props.turn;
    setSquares(squares[index]);

    const declareWinner = () => {
        const conditions = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];

        for (let i = 0; i < conditions.length; i++) {
            const [first, second, third] = conditions[i];
            if (squares[first] && squares[second] === squares[first] && squares[third] === squares[first]) {
                return squares[first];
            }
        }
    }

    const winner = declareWinner(squares);
    
    let status;
    if (winner) {
        status = `The winner is ${winner}`;
    }

    function clickHandle(index) {
        if (!winner || !squares[index]) {
            squares[index] = props.turn;
            setSquares(squares)
            props.setTurn(() => {
                if (props.turn === 'X') {
                    props.turn = 'O'
                }
                props.turn = 'X'
            })
        }
    }

    return (
            <section className='board'>
                <h3>The winner is {winner}</h3>
                <section className="row row1">
                    <Square onClick={() => pickSquare(0)} value={setSquares[0]}/>
                    <Square onClick={() => pickSquare(1)} value={setSquares[1]}/>
                    <Square onClick={() => pickSquare(2)} value={setSquares[2]}/>
                </section>
                <section className="row row2">
                    <Square onClick={() => pickSquare(3)} value={setSquares[3]}/>
                    <Square onClick={() => pickSquare(4)} value={setSquares[4]}/>
                    <Square onClick={() => pickSquare(5)} value={setSquares[5]}/>
                </section>
                <section className="row row3">
                    <Square onClick={() => pickSquare(6)} value={setSquares[6]}/>
                    <Square onClick={() => pickSquare(7)} value={setSquares[7]}/>
                    <Square onClick={() => pickSquare(8)} value={setSquares[8]}/>
                </section>
            </section>
        )
    }

function Game() {

    function Square(props) {
        return <button className='square' onClick={props.click}>{props.value}</button>
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
                    <Cells click={() => clickHandler(0)} value={boardState[0]} />
                    <Cells click={() => clickHandler(1)} value={boardState[1]} />
                    <Cells click={() => clickHandler(2)} value={boardState[2]} />
                </div>
                <div className='rows'>
                    <Cells click={() => clickHandler(3)} value={boardState[3]} />
                    <Cells click={() => clickHandler(4)} value={boardState[4]} />
                    <Cells click={() => clickHandler(5)} value={boardState[5]} />
                </div>
                <div className='rows'>
                    <Cells click={() => clickHandler(6)} value={boardState[6]} />
                    <Cells click={() => clickHandler(7)} value={boardState[7]} />
                    <Cells click={() => clickHandler(8)} value={boardState[8]} />
                </div>
            </div>
        )
    }

    const [turn, setTurn] = React.useState('X');

    return (
        <div>
            <h1>Player {turn}, it's your turn</h1>
            <Board turn={turn} setTurn={setTurn} />
        </div>
    )
}



