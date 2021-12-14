import React from "react";

class Stats extends React.Component {
    render() {
        const totalScore = this.props.stats[0];
        const highScore = this.props.stats[1];
        const minScore = this.props.stats[2];
        const totalPlayers = this.props.stats[3];

        // let scores = () => {
        //     let tmp = [];
        //     this.props.players.map(player => tmp.push(player.score));
        //     return tmp;
        // };
        // const highScore = Math.max(...scores);

        return (
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
                        <td>Highest Score</td>
                        <td>{highScore}</td>
                    </tr>
                    <tr>
                        <td>Lowest Score</td>
                        <td>{minScore}</td>
                    </tr>
                </tbody>
            </table>
        )
    }
}

export default Stats