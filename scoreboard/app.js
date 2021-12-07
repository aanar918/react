const title = 'My first react element by babel';
const description = 'Babel P element';

const header = (
    <header>
        <h1>{title}</h1>
        <p>{description}</p>
    </header>
)

function Header() {
    return(
        <header>
            <h1>Score Board</h1>
            <span className="stats">Player: 1</span>
        </header>
    )
}

ReactDOM.render(
    <Header/>,
    document.getElementById('root')
)

