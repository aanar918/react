import React from "react"
// import AddPlayer from "./AddPlayer"
import Header from './Header'
import Player from './Player'
import AddPlayer from "./AddPlayer"

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
    
    lastId = 5

    // const len = this.state.players.length
    // const lastId = this.state.players[len - 1].id;
    // console.log(lastId)
    
    handleScoreChange = (index, num) => {
        this.setState(previousState => {
            const updatedPlayers = [...previousState.players];
            const updatedPlayer = { ...updatedPlayers[index] };
            updatedPlayer.score += num;
            updatedPlayers[index] = updatedPlayer;
            previousState.players[index].score += num;
            return {
                players: updatedPlayers
            };
        });
        if (num > 0) console.log('Player: '+ (index + 1), '+');
        else console.log('Player: '+ (index + 1), '-');
    }

    handleRemovePlayer = (playerId) => {
        this.setState(prevState => ({
            players: prevState.players.filter(tmp => tmp.id !== playerId)
        }))
    }

    handleAddPlayer = (name) => {
        this.setState({
            players: [
                ...this.state.players,
                {
                    name: name,
                    score: 0,
                    id: this.lastId += 1                
                }
            ]
        })
    }

    render() {
        return (
            <div className="scoreboard">
                <Header
                    players={this.state.players}
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
                
                <AddPlayer addPlayer = {this.handleAddPlayer}/>
            </div>
        );
    }
};

export default App