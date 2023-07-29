
import { useState } from 'react';

function App(){
    
    // const [counter, setCounter] = useState(0);
    // const [isSubscribed, setIsSubscribed] = useState(false);

    const [state, setState] = useState({
        counter: 0,
        isSubscribed: false
    });

    const increment = () => {
        setState({...state, counter: state.counter + 1 });
    };

    const subscribe = () => {
        setState({...state, isSubscribed:true})
    };

    return (
        // useState
        <div className="App">
            <div className="counter">{state.counter}</div>
            <button onClick={increment}>INCREMENT</button>
            <button onClick={subscribe}>You have to subscribe</button>
        </div>
        
    );
}

export default App