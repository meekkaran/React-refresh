import Student from "./Student";

function App(){
    // function showAlert(){
    //     alert("Welcome to WebTechTalk") 
    // }


    // const request = () => {
    //     alert("subscribe and like")
    // }
    const onTextChange = (event) => {
        // console.log("Change event is triggered")
        console.log(event.target.value)
    }

    let count = 0

    function increment() {
        count = count + 1
        console.log(count)
    }

    function decrement() {
        count = count - 1
    }

    return (
        // handling events
        <div className="App">
            {/* <input onChange={onTextChange}/> */}

            {/* <button onClick={() => showAlert()}>Click Me</button>
            <button onClick={request}>Subscribe</button> */}

            <button onClick={decrement}>DECREMENT</button>
            <div style={{fontSize:"26px", fontWeight:"bold", color:"red"}}>{count}</div>
            <button onClick={increment}>INCREMENT</button>
        </div>
        
    );
}

export default App