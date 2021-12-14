import React, { PureComponent } from "react"
import Counter from './Counter'
import Icon from "./Icon"

class Player extends PureComponent {

    render() {

        const currentPlayerScore = this.props.playerScore;
        
        const highScore = this.props.highScore;
        const silver = this.props.silver;
        const bronze = this.props.bronze;

        const isWinner = currentPlayerScore === highScore ? true : false;
        const isSecond = currentPlayerScore === silver ? true : false;
        const isThird = currentPlayerScore === bronze ? true : false;

        return (
            <div className='player'>
                <span className="player-name">
                    <button
                        className="remove-player"
                        type="submit" onClick={() => this.props.removePlayer(this.props.playerId)}
                    >
                        X
                    </button>
                    {/* Name */}
                    <Icon
                        equal={this.props.equal}
                        winner={isWinner}
                        silver={isSecond}
                        bronze={isThird}
                    />
                    {this.props.playerName}
                </span>
                <Counter
                    index={this.props.index}
                    change={this.props.changeScore}
                    score={currentPlayerScore}
                />
            </div>
        )
    }
};

export default Player