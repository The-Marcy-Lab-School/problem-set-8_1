const Cell = (props) => {
  const [square, setSquare] = React.useState('')
  
  //the cell only know its own value
  const changeCellValue = () => {
    setSquare(props.turn);
    props.changeTurn();
    props.updateBoard(props.id, props.turn);
  };
  
  return (
    <div>
      <div id ={props.id}  className ="cell" onClick={changeCellValue}>{square}</div>
    </div>
    );
};
