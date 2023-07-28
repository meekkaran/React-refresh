import Student from "./Student";

function App(){
    function print(){
        return "WebTechTalk"
    }

    return (
        <>
            {/* <h1 style={{color:'white', backgroundColor:'red'}}>Welcome to{print()}.Please subscribe and support</h1>
            <h2 className="sub-title">Thanks</h2>
            <label htmlFor="fName">Firstname</label>
            <input name="fName" maxLength={5} autoFocus={true} placeholder="Enter First Name"/> */}
        <Student />
        </>
    );
}

export default App