import React, { Component } from "react";

class StopWatch extends Component {

    state = {
        isRunning: false,
        elapsedTime: 0,
        previousTime: 0,
        timer: 0
    }

    handleStopwatch = () => {
        this.setState(prev => ({
            isRunning: !prev.isRunning
        }));
        if (!this.state.isRunning) {
            this.setState({ 
                previousTime: Date.now()
            })
        };
    }

    componentDidMount() {
        this.intervalID = setInterval(() =>
            this.tick(), 100
        );
    }
    componentWillUnmount() {
        clearInterval(this.intervalID)
    }

    tick = () => {
        const now = Date.now();
        if(this.state.isRunning){
            this.setState(prev => ({
                previousTime: now,
                timer: ++this.state.timer,
                elapsedTime: prev.elapsedTime + (now - prev.previousTime)
            }));
        }
    }

    handleReset = () => {
        this.setState({
            elapsedTime: 0,
            timer: 0,
            isRunning: false
        });
    }

    render() {
        const millis = this.state.timer;
        return (
            <div className="stopwatch">
                <h2>Time runs !</h2>
                <span className="stopwatch-time">{millis}</span>
                <button onClick={this.handleStopwatch}>{this.state.isRunning ? 'Stop' : 'Start'}</button>
                <button onClick={this.handleReset}>Reset</button>
            </div>
        )
    }
}

export default StopWatch