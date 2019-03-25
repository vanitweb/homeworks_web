import React from 'react';
import ReactDOM from 'react-dom';
import App from './component/02.02.19/App';
import {state} from './component/02.02.19/redux/state';
import {addPost}  from './component/02.02.19/redux/state';
import {BrowserRouter} from 'react-router-dom';

let rerenderEntireTree = () => {
	ReactDOM.render(
	<BrowserRouter>
	 <App state={state} addPost={addPost}/>
	</BrowserRouter>, document.getElementById('root'));
}
rerenderEntireTree();
