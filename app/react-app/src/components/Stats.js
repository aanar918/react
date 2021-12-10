import React from "react";

class Stats extends React.Component {
    render() {
        const totalPlayers = this.props.players.length;
        const totalScore = this.props.players.reduce((total, player) => {
            return total + player.score;
        }, 0);
        const highScore = this.props.players.reduce((max, player) => {
            if(max < player.score) {
                max = player.score;
            }
            return max;
        }, -999999999);

        // let scores = () => {
        //     let tmp = [];
        //     this.props.players.map(player => tmp.push(player.score));
        //     return tmp;
        // };
        // const highScore = Math.max(...scores);

        return(
            <table className="stats">
                <tbody>
                    <tr>
                        <td>Total Players</td>
                        <td>{totalPlayers}</td>
                    </tr>
                    <tr>
                        <td>Total Score</td>
                        <td>{totalScore}</td>
                    </tr>
                    <tr className='is-high-score'>
                        <td>High Score</td>
                        <td>{highScore}</td>
                    </tr>
                </tbody>
            </table>
        )
    }
}

export default Stats