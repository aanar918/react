import React from "react"
import Counter from './Counter'

class Player extends React.Component {
    render() {
        return (
            <div className='player'>
                <button className="remove-player" type="submit" onClick={() => this.props.removePlayer(this.props.playerId)} >X</button>
                <span className="player-name">{this.props.playerName}</span>
                <Counter
                    index={this.props.index}
                    change={this.props.changeScore}
                    score={this.props.playerScore}
                />
            </div>
        )
    }
};

export default Player