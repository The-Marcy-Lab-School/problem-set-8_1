function GameCell({ index, content, dispatchFn }) {
  return (
    <div className="gameCell" onClick={() => dispatchFn(index)}>
      {content}
      {' '}
      Index:
      {index}
    </div>
  );
}
