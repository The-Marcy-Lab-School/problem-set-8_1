const Cells = (props) => {
  const [cell, setCell] = React.useState('')
  const players = () => {
    console.log(`cell:${cell} has been clicked`)
    setCell(cell)
  }
  return (
    <div className="gameBoard">
    <div data-testid = '0' className = 'cell' onClick={players}></div>
    <div data-testid = '1' className = 'cell' onClick={players}></div>
    <div data-testid = '2' className = 'cell' onClick={players}></div>
    <div data-testid = '3' className = 'cell' onClick={players}></div>
    <div data-testid = '4' className = 'cell' onClick={players}></div>
    <div data-testid = '5' className = 'cell' onClick={players}></div>
    <div data-testid = '6' className = 'cell' onClick={players}></div>
    <div data-testid = '7' className = 'cell' onClick={players}></div>
    <div data-testid = '8' className = 'cell' onClick={players}></div>

  </div>
    )
}