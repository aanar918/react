import React from "react"
import Stats from "./Stats"

class Header extends React.Component {
    render() {
        return (
            <header>
                <Stats
                    players={this.props.players}
                />
                <h1>{this.props.headerName}</h1>
                <span className="stats">Total Players: {this.props.totalPlayers}</span>
            </header>
        )
    }
};

export default Header