import React from "react"
import Stats from "./Stats"
import StopWatch from "./StopWatch"

class Header extends React.Component {
    render() {
        // console.log()
        return (
            <header>
                <Stats
                    players={this.props.players}
                    stats={this.props.stats}
                />
                <h1>{this.props.headerName}</h1>
                <span className="stats">Total Players: {this.props.totalPlayers}</span>
                <StopWatch />
            </header>
        )
    }
};

export default Header