import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
// import 'bootstrap/dist/css/bootstrap.css';

// import ClassComponent from './ClassComponent';
// import StateComponent from './StateComponent';
// import StateComponentFn from './StateComponentFn';


let el = document.getElementById("root");
const root = ReactDOM.createRoot(el);


// root.render(<App />);
root.render(
<>
  {/* <ClassComponent /> */}
  <hr />
  <App />
  {/* <StateComponent /> */}
  {/* <StateComponentFn /> */}

</>
); 