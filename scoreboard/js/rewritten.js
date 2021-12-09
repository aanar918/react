

const players = [
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
];

class Header extends React.Components {
    render() {
        return(
            <header>
                <h1>{this.props.headerName}</h1>
                <span className="stats">PLAYER: {this.props.totalPlayers}</span>
            </header>
        )
    }
};

class Player extends React.Components {
    render() {
        return(
            <div className="player">
                <span className="player-name">{this.props.playerName}</span>
                <Counter 
                    score={this.props.playerScore} 
                />
            </div>
        )
    }
}

class Counter extends React.Components {

    state = {
        score: 0
    }

    decrementScore = () => {
        this.setState(prevState => ({
            score: --prevState.score
        }));
    }

    incrementScore = () => {
        this.setState(prevState => ({
            score: ++prevState.score
        }));
    }
    

    render () {
        return(
            <div className="counter">
                <button className="counter-action decrement" onClick={this.decrementScore}>-</button>
                <div className="counter-score">{this.state.score}</div>
                <button className="counter-action increment" onClick={this.incrementScore}>+</button>
            </div>
        )
    }
}



class App extends React.Components {
    render() {
        return(
            <div className='scoreboard'>
                <Header 
                    headerName = 'Score Board'
                    totalPlayers = {initialPlayers.length}
                />
                
                {this.props.initialPlayers.map(player => 
                    <Player 
                        playerName = {player.name}
                        // playerScore = {player.score}
                        key = {player.id}
                    />
                )}
            </div>
        )
    }
}

ReactDOM.render(
    <App initialPlayers = {players} />,
    document.getElementById('root')
)