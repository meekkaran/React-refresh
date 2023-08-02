const GrandChildOne = (props) => {
    return  (
        <div className="grandchild first">
            <h1>Grand child one Component</h1>
            <button onClick={props.subscribe}>subscribe</button>
        </div>
    );
};

export default GrandChildOne;