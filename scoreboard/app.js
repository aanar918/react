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

ReactDOM.render(
    <Header/>,
    document.getElementById('root')
)

