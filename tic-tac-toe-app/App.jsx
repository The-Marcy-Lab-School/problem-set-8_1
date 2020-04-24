
const App = () => {
	return (
	    <div className="game">
	    	<h1>Tic Tac Toe</h1>
	    	<Game/>
	    </div>
	    );
};

ReactDOM.render(<App />, document.querySelector('.container'));
