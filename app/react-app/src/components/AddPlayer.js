import React from "react";

class AddPlayer extends React.Component {

    state = {
        value: ''
    }

    handleValueChange = (e) => {
        this.setState({
            value: e.target.value
        })
        console.log(e.target.value);
    }

    handleSubmit = (e) => {
        e.preventDefault();
        if (this.state.value === '') {
            this.state.value = 'Unknown Player'
        }
        this.props.addPlayer(this.state.value, this.props.newId);
        this.setState({
            value: ''
        })
        // this.state.value = '';
    }

    render() {

        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    type='text'
                    value={this.state.value}
                    onChange={this.handleValueChange}
                    placeholder='Type your name'>
                </input>

                <input
                    type='submit'
                >
                    
                </input>
            </form>
        )
    }
};

export default AddPlayer