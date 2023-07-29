
import { useState } from 'react';

function StateComponentFn(){
    
    // const [counter, setCounter] = useState(0);
    // const [isSubscribed, setIsSubscribed] = useState(false);

    const [state, setState] = useState({
        counter: 0,
    });

    const increment = () => {
        setState({...state, counter: state.counter + 1 });
    };

    const decrement = () => {
        setState({...state, counter: state.counter - 1 });
    };

    const reset = () => {
        setState({...state, counter: state.counter = 0 });
    };


    return (
        // useState
        <div className="App">
            <div className="counter">{state.counter}</div>
            <button onClick={increment}>INCREASE</button>
            <button onClick={decrement}>DECREASE</button>
            <button onClick={reset}>RESET</button>
        </div>
        
    );
}

export default StateComponentFn