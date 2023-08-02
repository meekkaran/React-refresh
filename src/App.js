
import MyListComponent from './MyListComponent';
import MyStylesComponent from './MyStylesComponent';
import ConditionalComponent from './ConditionalComponent';
import UseEffectHook from './UseEffectHook';
import Parent from './Parent';
import MyContext from './MyContext';

function App(){
    return (
        <div>
            <MyContext.Provider value={5}>
                <Parent />
            </MyContext.Provider>
            {/* <MyListComponent /> */}
            {/* <MyStylesComponent /> */}
            {/* <ConditionalComponent /> */}
            {/* <UseEffectHook /> */}
        </div>    
    );
}

export default App