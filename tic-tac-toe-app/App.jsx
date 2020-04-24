const App = () => {
	return (
		<div>
			<h1 className='header'>Tic-Tac-Toe</h1>
			<Game />
		</div>
	)
};

ReactDOM.render(<App />, document.querySelector('.container'));
