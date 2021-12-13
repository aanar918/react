import React from "react";

class StopWatch extends React.Component {
    render(){
        return(
            <div className="stopwatch">
                <h2>Time runs !</h2>
                <div className="stopwatch-time">{this.props.time}</div>
                <button onClick=''>{this.props.buttonStatus}</button>
            </div>
        )
    }
}

export default StopWatch