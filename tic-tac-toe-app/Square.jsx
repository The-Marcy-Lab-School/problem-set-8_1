function Square(props) {
  return (
    <div className="boardSquare" onClick={props.onClick}>
      {props.value}
    </div>
  );
}
