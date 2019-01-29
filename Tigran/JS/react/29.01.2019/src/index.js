import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
ReactDOM.render(<App/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();




// const text = document.getElementsByTagName("p")[0].textContent;
// let count = 0;
// const inputVal = document.getElementsByTagName("input")[0].value;
// function fun(tex){
//     let index = tex.indexOf(inputVal);
//     if(index !== -1){
//         count++;
//         return fun(tex.slice(index + inputVal.length))
//     }else{
//         return console.log(count);
//     }
// }



// fun(text);