const userName = 'Anar';

const Header = () => {
    return(
        <header>
            <h1>Score Board</h1>
            <span className="stats">Player: 1</span>
        </header>
    )
};

const Player = () => {
    return(
        <div className="player">
            <span className='player-name'>{userName}</span>
            <Counter/>
        </div>
    )
};

const Counter = () => {
    return(
        <div className="counter">
            <div className="counter-action increment">+</div>
            <div className="counter-score">100</div>
            <div className="counter-action decrement">-</div>
        </div>
    )
}

const App = () => {
    return(
        <div className="scoreboard">
            <Header/>
            <Player/>
        </div>
    )
};

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);

