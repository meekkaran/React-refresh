import { useState } from "react";
import ChildOne from "./ChildOne";
import ChildTwo from "./ChildTwo";

const Parent = () => {
    const [isSubscribed, setIsSubscribed] = useState(false);

    const subscribe = () => {
        setIsSubscribed(true);
    }

    return(
        <div className="parent">
            <h1>Parent Component</h1>
            <div className="cildren-container">
                <ChildOne subscribe={subscribe}/>
                <ChildTwo isSubscribed={isSubscribed} />
            </div>
        </div>
    );
};

export default Parent;