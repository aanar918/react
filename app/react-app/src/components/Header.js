import React from "react"
import Stats from "./Stats"
import StopWatch from "./StopWatch"

class Header extends React.Component {
    render() {

        

        return (
            <header>
                <Stats
                    players={this.props.players}
                />
                <h1>{this.props.headerName}</h1>
                <span className="stats">Total Players: {this.props.totalPlayers}</span>
                <StopWatch 
                    time = '02:33'
                    buttonStatus = 'Start'
                    start = ''
                    stop=''
                    reset = ''
                />
            </header>
        )
    }
};

export default Header