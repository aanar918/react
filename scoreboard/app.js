const title = 'My first react element by babel';

const description = 'Babel P element';

const header = (
    <header>
        <h1>{title}</h1>
        <p>{description}</p>
    </header>
)

ReactDOM.render(
    header,
    document.getElementById('root')
)

