const Cell = (props) => {
  console.log(`Cell-Props: ${props}`);
  const checkPlayer = (id) => {
    console.log(`cell ${id} has been clicked`);
  };
  
  return (
    <div>
      <div id ={props.id}  className ="cell" onClick={() => checkPlayer(props.id)}></div>
    </div>
    );
};
