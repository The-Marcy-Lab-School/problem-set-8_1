const container = document.querySelector('.container')



const App = () => {
  return (
    <div>
      <div>A tic-tac-toe game</div>
      <Board />
    </div>
  )
}


ReactDOM.render(<App />, container);