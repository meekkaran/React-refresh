const GrandChildTwo = (props) => {
    return  (
        <div className="grandchild second">
            <h3>Grand child Two Component</h3>
            <div className="message">
            {props.isSubscribed ? (
                <div className="greenColor">
                    Thank you very much, it motivates me alot
                </div>
            ) : (
                <div className="redColor">
                    Please subscribe, it just akes a few seconds
                </div>
            )}
            
            </div>
        </div>
        
    );
};

export default GrandChildTwo;