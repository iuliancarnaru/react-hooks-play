import React from 'react';
import ReactDOM from 'react-dom';

//import App from './AppClass'; 
//import AppFunction from './AppFunction'; 
import Register from './Register';



import * as serviceWorker from './serviceWorker';


//ReactDOM.render(<App />, document.getElementById('root'));
//ReactDOM.render(<AppFunction />, document.getElementById('root'));
ReactDOM.render(<Register />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
