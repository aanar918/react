
const players = [
    {
        name: 'Player',
        score:  0,
        id: 1
    },
    {
        name: 'Player',
        score:  0,
        id: 2
    },
    {
        name: 'Player',
        score:  0,
        id: 3
    },
    {
        name: 'Player',
        score:  0,
        id: 4
    },
    {
        name: 'Player',
        score:  0,
        id: 5
    },
];

const Player = (props) => {
    return (
        <div className='player'>
            <span className="player-name">{props.playerName}</span>

            <Counter
                score={props.playerScore}
            />
        </div>
    )
};

const Header = (props) => {
    return (
        <header>
            <h1>{props.headerName}</h1>
            <span className="stats">Player: {props.totalPlayers}</span>
        </header>
    );
};

const Counter = (props) => {
    return (
        <div className="counter">
            <button className="counter-action decrement">-</button>
            <div className="counter-score">{props.score}</div>
            <button className="counter-action increment">+</button>
        </div>
    );
};

const App = (props) => {
    return (
        <div className="scoreboard">
            <Header
                headerName='Score Board'
                totalPlayers={players.length}
            />

            {props.initialPlayers.map(player => 
                <Player
                    playerName={`${player.name}-${player.id}`}
                    playerScore={player.score}
                    key={player.id}
                />    
            )}
        </div>
    );
};

ReactDOM.render(
    <App initialPlayers = {players}/>,
    document.getElementById('root')
);