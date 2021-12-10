import React from "react"
import Header from './Header'
import Player from './Player'

class App extends React.Component {

    state = {
        players: [
            {
                name: 'Player',
                score: 0,
                id: 1
            },
            {
                name: 'Player',
                score: 0,
                id: 2
            },
            {
                name: 'Player',
                score: 0,
                id: 3
            },
            {
                name: 'Player',
                score: 0,
                id: 4
            },
            {
                name: 'Player',
                score: 0,
                id: 5
            },
        ]
    }

    handleScoreChange = (index, num) => {
        this.setState(previousState => {
            const updatedPlayers = [...previousState.players];
            const updatedPlayer = {...updatedPlayers[index]};
            updatedPlayer.score += num;
            updatedPlayers[index] = updatedPlayer;
            previousState.players[index].score += num;
            return {
                players: updatedPlayers
            };
        });
        // if (num > 0) console.log('Player: '+ (index + 1), '+');
        // else console.log('Player: '+ (index + 1), '-');
    }

    handleRemovePlayer = (playerId) => {
        this.setState(prevState => ({
            players: prevState.players.filter(tmp => tmp.id !== playerId)
        }))
    }
    
    addPlayer = () => {
        let obj = {
            name: 'Player',
            score: 0,
            id: 1
        };
        this.setState(prevState => ({
            players: prevState.players.push(obj)
        }))
    }

    render() {
        return (
            <div className="scoreboard">
                <Header
                    headerName='Score Board'
                    totalPlayers={this.state.players.length}
                />
                {this.state.players.map((player, index) =>
                    <Player
                        players={this.players}
                        playerName={`${player.name}-${player.id}`}
                        playerScore={player.score}
                        key={player.id}
                        playerId={player.id}
                        index={index}
                        removePlayer={this.handleRemovePlayer}
                        changeScore={this.handleScoreChange}
                    />
                )}
            </div>
        );
    }
};

export default App