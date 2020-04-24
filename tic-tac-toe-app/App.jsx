const App = () => {
	return (
		<div>
			<h1>A tic-tac-toe game</h1>
			<Board />
		</div>
	)

};

ReactDOM.render(<App />, document.querySelector('.container'));
