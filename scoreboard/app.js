const userName = 'User Name';
const description = 'My description';
const title = 'My title';
const titleId = 'my-title';

const Header = () => (
    <header>
        <h1>Score Board</h1>
        <p id={titleId}>{userName}'s first react app!</p>
        <span className="stats">{title}</span>
    </header>
)

const Player = () => {
    return(
        <div className="player">
            <span className='player-name'>Player</span>
            <div className="counter">
                <div className="counter-action increment">+</div>
                <div className="counter-score">100</div>
                <div className="counter-action decrement">-</div>
            </div>
        </div>
    )
}

ReactDOM.render(
    // <Header/>,
    <Player/>,
    document.getElementById('root')
)

