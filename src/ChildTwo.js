import GrandChildTwo from "./GrandChildTwo";

const ChildTwo = (props) => {
    return(
        <div className="child first">
            <h1>First Child Component</h1>
            <GrandChildTwo isSubscribed={props.isSubscribed}/>
        </div>
    );
};

export default ChildTwo;