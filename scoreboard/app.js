const Player = () => {
    return (
        <div className="player">
            <span className="player-name">Player</span>
            <Counter />
        </div>
    )
};

const Header = () => {
    return (
        <header>
            <h1>Score Board</h1>
            <span className="stats">Player: 1</span>
        </header>
    )
};

const Counter = () => {
    return (
        <div className="counter">
            <button className="counter-action decrement">-</button>
            <div className="counter-score">100</div>
            <button className="counter-action increment">+</button>
        </div>
    )
};

const App = () => {
    return (
        <div className="scoreboard">
            <Header />
            <Player />
        </div>
    )
};

ReactDOM.render(
    <App />,
    document.getElementById('root')
);