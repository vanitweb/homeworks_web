import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Lesson1 from './Lesson1';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Lesson1 />, document.getElementById('root'));
serviceWorker.unregister();

