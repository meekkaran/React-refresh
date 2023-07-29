import React from 'react';

class StateComponent extends React.Component{

    constructor(){
        super();
        this.state = {
            count:0
        };
    }
    

    increment = () => {
        this.setState({
            count: this.state.count + 1
        });
        console.log(this.state.count);
    }
    decrement = () => {
        this.setState({
            count: this.state.count - 1
        });
        console.log(this.state.count);
    }
    reset = () => {
        this.setState({
            count: this.state.count = 0
        });
        console.log(this.state.count);
    }


    render() {
        return (
            // state
            <div>
                <div style={{fontSize:"40px", fontWeight:"bold", color:"orange"}}>{this.state.count}</div>
                <button onClick={this.increment}>INCREASE</button>
                <button onClick={this.decrement}>DECREASE</button>
                <button onClick={this.reset}>RESET</button>
            </div>
            
        );
    }
}

export default StateComponent;