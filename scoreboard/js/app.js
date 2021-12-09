class Header extends React.Component {
    render() {
        return (
            <header>
                <h1>{this.props.headerName}</h1>
                <span className="stats">Total Players: {this.props.totalPlayers}</span>
            </header>
        )
    }
};

class Player extends React.Component {
    render() {
        return (
            <div className='player'>
                <button className="remove-player" onClick={ () => this.props.removePlayer(this.props.playerId)} >X</button>
                <span className="player-name">{this.props.playerName}</span>
                <Counter
                    score={this.props.playerScore}
                />
            </div>
        )
    }
};


class Counter extends React.Component {

    state = {
        score: 0
    }

    incrementScore = () => {
        this.setState(previousState => ({
            score: ++previousState.score
        }));
        // console.log("+");
    }

    decrementScore = () => {
        this.setState(previousState => ({
            score: --previousState.score
        }));
        // console.log("-");
    }

    render() {
        return (
            <div className="counter">
                <button className="counter-action decrement" onClick={this.decrementScore}>-</button>
                <div className="counter-score">{this.state.score}</div>
                <button className="counter-action increment" onClick={this.incrementScore}>+</button>
            </div>
        );
    }
};



class App extends React.Component {

    state = {
        players: [
            {
                name: 'Player',
                score: 0,
                id: 1
            },
            {
                name: 'Player',
                score: 0,
                id: 2
            },
            {
                name: 'Player',
                score: 0,
                id: 3
            },
            {
                name: 'Player',
                score: 0,
                id: 4
            },
            {
                name: 'Player',
                score: 0,
                id: 5
            },
        ]
    }

    handleRemovePlayer = (playerId) => {
        this.setState(prevState => ({
            players: prevState.players.filter(tmp => tmp.id !== playerId)
        }))
    }

    render() {

        return (
            <div className="scoreboard">
                <Header
                    headerName='Score Board'
                    totalPlayers={this.state.players.length}
                />

                {this.state.players.map(player =>
                    <Player
                        players = {this.players}
                        playerName={`${player.name}-${player.id}`}
                        playerScore={player.score}
                        key={player.id}
                        playerId = {player.id}
                        removePlayer = {this.handleRemovePlayer}
                    />
                )}
            </div>
        );
    }
};

ReactDOM.render(

    <App />,
    document.getElementById('root')
);