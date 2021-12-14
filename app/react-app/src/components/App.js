import React from "react"
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
        if (num > 0) console.log('Player: ' + (index + 1), '+');
        else console.log('Player: ' + (index + 1), '-');
    }

    handleRemovePlayer = (playerId) => {
        this.setState(prevState => ({
            players: prevState.players.filter(tmp => tmp.id !== playerId)
        }))
    }

    handleAddPlayer = (name, id) => {
        this.setState({
            players: [
                ...this.state.players,
                {
                    name: name,
                    score: 0,
                    id: id
                }
            ]
        })
    }

    render() {

        const playersLen = this.state.players.length

        const lastPlayerId = this.state.players[playersLen - 1].id;
        const newId = lastPlayerId + 1;

        const totalScore = this.state.players.reduce((total, player) => {
            return total + player.score;
        }, 0);

        const highScore = this.state.players.reduce((max, player) => {
            if (max < player.score) {
                max = player.score;
            }
            return max;
        }, -999999999);
        
        const silver = this.state.players.reduce((max, player) => {
            if (max < player.score && player.score !== highScore) {
                max = player.score;
            }
            return max;
        }, -999999999);
        
        const bronze = this.state.players.reduce((max, player) => {
            if (max < player.score && player.score !== highScore && player.score !== silver) {
                max = player.score;
            }
            return max;
        }, -999999999);


        const minScore = this.state.players.reduce((min, player) => {
            if (min > player.score) {
                min = player.score;
            }
            return min;
        }, 999999999);

        let isZero = true;
        for (let i = 0; i < playersLen; i++) {
            if (this.state.players[i].score !== 0)
                isZero = false;
        }
        // console.log(isZero)

        const stats = [totalScore, highScore, minScore, playersLen];

        return (
            <div className="scoreboard">
                <Header
                    stats={stats}
                    players={this.state.players}
                    headerName='Score Board'
                    totalPlayers={this.state.players.length}
                />

                {this.state.players.map((player, index) =>
                    <Player
                        playersList={this.state.players}
                        players={this.players}
                        playerName={`${player.name}-${player.id}`}
                        highScore={highScore}
                        silver={silver}
                        bronze={bronze}
                        equal={isZero}
                        playerScore={player.score}
                        key={player.id}
                        playerId={player.id}
                        index={index}
                        removePlayer={this.handleRemovePlayer}
                        changeScore={this.handleScoreChange}
                    />
                )}

                <AddPlayer
                    addPlayer={this.handleAddPlayer}
                    newId={newId}
                />
            </div>
        );
    }
};

export default App