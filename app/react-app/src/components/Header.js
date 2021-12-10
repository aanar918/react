import React from "react"

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

export default Header