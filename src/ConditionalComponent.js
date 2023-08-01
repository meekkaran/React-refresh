import {useState} from 'react';
import './ConditionalComponent.css';

const ConditionalComponent =() => {
    const [boxColor, setBoxColor] = useState("red");

    const renderElement = () => {
        if (boxColor === "red"){
            return <div className='redBox'></div>;
        }
        return <div className='greenBox'></div>;
    }

    return(
        <div>
            <h1>Conditional Rendering</h1>
            <div className='btn-container'>
                <button className='redBtn' onClick={() => setBoxColor("red")}>
                    Red
                </button>
                <button className='greenBtn' onClick={() => setBoxColor("green")}>
                    Green
                </button>
            </div>
            <div className='box-container'>
                {renderElement()}
                {/* <div className='redBox'></div>
                <div className='greenBox'></div> */}
            </div>
        </div>
    );
};

export default ConditionalComponent