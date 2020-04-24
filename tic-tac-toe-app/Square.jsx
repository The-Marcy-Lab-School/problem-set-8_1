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
