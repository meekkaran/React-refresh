import React from 'react';
import ReactDOM from 'react-dom/client';
import ClassComponent from './ClassComponent';
import App from './App';


let el = document.getElementById("root");
const root = ReactDOM.createRoot(el);


// root.render(<App />);
root.render(
<>
  <ClassComponent />
  <hr />
  <App />
</>
); 